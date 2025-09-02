import GameService from "../../../../lib/services/GameService";
import { ResponseBuilder } from "../../../../lib/responseBuilder";
import { RecordNotFoundError, ValidationError } from "../../../../lib/errors/api-error";

const gameService = new GameService();

// Handles GET /api/games/{id} to get a game by id
export async function GET(req, { params }) {
    try {
        params = await params;
        const game = await gameService.getGameById(params.id);
        if (!game) {
            throw new RecordNotFoundError('Game not found');
        }
        console.log(`[API] GET /api/games/${params.id} success`);
        return ResponseBuilder.success(game);
    } catch (error) {
        console.error(`[API] GET /api/games/${params.id} error:`, error?.message);
        return ResponseBuilder.errorResponse(error);
    }
}


// Handles PUT /api/games/{id} to update a game
export async function PUT(req, { params }) {
    try {
        params = await params;
        const data = await req.json();
        const updated = await gameService.updateGame(params.id, data);
        console.log(`[API] PUT /api/games/${params.id} success`);
        return ResponseBuilder.success(updated);
    } catch (error) {
        console.error(`[API] PUT /api/games/${params.id} error:`, error?.message);
        return ResponseBuilder.errorResponse(error);
    }
}

// Handles DELETE /api/games/{id} to delete a game with a params.id
export async function DELETE(req, { params }) {
    try {
        params = await params;
        const deleted = await gameService.deleteGame(params.id);
        console.log(`[API] DELETE /api/games/${params.id} success`);
        return ResponseBuilder.success(deleted);
    } catch (error) {
        console.error(`[API] DELETE /api/games/${params.id} error:`, error?.message);
        return ResponseBuilder.errorResponse(error);
    }
}
