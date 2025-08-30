let gamesCache = null;

export default class GameService {
    async getGames() {
        if (gamesCache) {
            return gamesCache;
        }
        const response = await fetch("https://raw.githubusercontent.com/dasingh9/public/refs/heads/main/games-data.json");
        const games = await response.json();
        gamesCache = games;
        return games;
    }

    async getGameById(id) {
        // Check cache first
        let games = gamesCache;
        if (!Array.isArray(games) || games.length === 0) {
            games = await this.getGames();
        }
        return games.find(game => String(game.id) === String(id));
    }
}