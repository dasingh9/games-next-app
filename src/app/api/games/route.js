import GameService from "../../../lib/services/GameService";
import { ResponseBuilder } from "../../../lib/responseBuilder";

const gameService = new GameService();

// Handles GET /api/games to get all games
export async function GET() {
    try {
        const games = await gameService.getGames();
        console.log('[API] GET /api/games success');
        return ResponseBuilder.success(games);
    } catch (error) {
        console.error('[API] GET /api/games error:', error?.message);
        return ResponseBuilder.badRequest(error?.message);
    }
}

// Handles POST /api/games to create a new game
export async function POST(req) {
    try {
        const game = await req.json();
        const created = await gameService.createGame(game);
        console.log('[API] POST /api/games success');
        return ResponseBuilder.success(created);
    } catch (error) {
        console.error('[API] POST /api/games error:', error?.message);
        return ResponseBuilder.badRequest(error?.message);
    }
}

