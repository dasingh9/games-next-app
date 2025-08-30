import { GameDao } from '../dao/gameDao.js';
import { GameValidator } from '../validators/gameValidator.js';
import { RecordNotFoundError } from '../errors/api-error.js';

export default class GameService {
    constructor(gameDao = new GameDao()) {
        this.gameDao = gameDao;
    }

    async getGames() {
        return await this.gameDao.getAllGames();
    }

    async getGameById(id) {
        // Ensure id is a number for strict equality
        const game = await this.gameDao.getGameById(Number(id));
        if (!game) throw new RecordNotFoundError('Game not found');
        return game;
    }

    async createGame(gameData) {
        GameValidator.validateCreate(gameData);
        return await this.gameDao.createGame(gameData);
    }

    async updateGame(id, updatedData) {
        GameValidator.validateUpdate(updatedData);
        const updated = await this.gameDao.updateGame(Number(id), updatedData);
        if (!updated) throw new RecordNotFoundError('Game not found');
        return updated;
    }

    async deleteGame(id) {
        const deleted = await this.gameDao.deleteGame(Number(id));
        if (!deleted) throw new RecordNotFoundError('Game not found');
        return deleted;
    }
}