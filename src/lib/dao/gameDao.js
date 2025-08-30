import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_FILE = path.join(__dirname, 'games-db.json');

export class GameDao {
    async _readFile() {
        const data = await readFile(DB_FILE, 'utf-8');
        return JSON.parse(data);
    }

    async _writeFile(data) {
        await writeFile(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    }

    async getAllGames() {
        return await this._readFile();
    }

    async getGameById(id) {
        const games = await this._readFile();
        const game = games.find(g => g.id === id);
        return game;
    }

    async createGame(gameData) {
        const games = await this._readFile();
        const nextId = games.length ? Math.max(...games.map(g => g.id)) + 1 : 1;
        const newGame = {
            id: nextId,
            title: gameData.title,
            thumbnail: gameData.thumbnail,
            short_description: gameData.short_description,
            game_url: gameData.game_url,
            genre: gameData.genre,
            platform: gameData.platform,
            publisher: gameData.publisher,
            developer: gameData.developer,
            release_date: gameData.release_date,
            freetogame_profile_url: gameData.freetogame_profile_url
        };
        games.push(newGame);
        await this._writeFile(games);
        return newGame;
    }

    async updateGame(id, updatedData) {
        const games = await this._readFile();
        const index = games.findIndex(g => g.id === id);
        if (index === -1) return null;
        games[index] = { ...games[index], ...updatedData };
        await this._writeFile(games);
        return games[index];
    }

    async deleteGame(id) {
        const games = await this._readFile();
        const index = games.findIndex(g => g.id === id);
        if (index === -1) return null;
        const deleted = games.splice(index, 1);
        await this._writeFile(games);
        return deleted[0];
    }
}