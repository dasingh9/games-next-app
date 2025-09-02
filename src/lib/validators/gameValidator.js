import { ValidationError } from '../errors/api-error';

export class GameValidator {
  static validateCreate(game) {
    if (!game.title || typeof game.title !== 'string') {
      throw new ValidationError('Game title is required and must be a string.');
    }
    if (!game.thumbnail || typeof game.thumbnail !== 'string') {
      throw new ValidationError('Game thumbnail is required and must be a string.');
    }
    if (!game.short_description || typeof game.short_description !== 'string') {
      throw new ValidationError('Short description is required and must be a string.');
    }
    if (!game.game_url || typeof game.game_url !== 'string') {
      throw new ValidationError('Game URL is required and must be a string.');
    }
    if (!game.genre || typeof game.genre !== 'string') {
      throw new ValidationError('Genre is required and must be a string.');
    }
    if (!game.platform || typeof game.platform !== 'string') {
      throw new ValidationError('Platform is required and must be a string.');
    }
    if (!game.publisher || typeof game.publisher !== 'string') {
      throw new ValidationError('Publisher is required and must be a string.');
    }
    if (!game.developer || typeof game.developer !== 'string') {
      throw new ValidationError('Developer is required and must be a string.');
    }
    if (!game.release_date || typeof game.release_date !== 'string') {
      throw new ValidationError('Release date is required and must be a string.');
    }
    if (!game.freetogame_profile_url || typeof game.freetogame_profile_url !== 'string') {
      throw new ValidationError('Freetogame profile URL is required and must be a string.');
    }
  }

  static validateUpdate(game) {
    if (game.title !== undefined && typeof game.title !== 'string') {
      throw new ValidationError('If provided, title must be a string.');
    }
    if (game.thumbnail !== undefined && typeof game.thumbnail !== 'string') {
      throw new ValidationError('If provided, thumbnail must be a string.');
    }
    if (game.short_description !== undefined && typeof game.short_description !== 'string') {
      throw new ValidationError('If provided, short_description must be a string.');
    }
    if (game.game_url !== undefined && typeof game.game_url !== 'string') {
      throw new ValidationError('If provided, game_url must be a string.');
    }
    if (game.genre !== undefined && typeof game.genre !== 'string') {
      throw new ValidationError('If provided, genre must be a string.');
    }
    if (game.platform !== undefined && typeof game.platform !== 'string') {
      throw new ValidationError('If provided, platform must be a string.');
    }
    if (game.publisher !== undefined && typeof game.publisher !== 'string') {
      throw new ValidationError('If provided, publisher must be a string.');
    }
    if (game.developer !== undefined && typeof game.developer !== 'string') {
      throw new ValidationError('If provided, developer must be a string.');
    }
    if (game.release_date !== undefined && typeof game.release_date !== 'string') {
      throw new ValidationError('If provided, release_date must be a string.');
    }
    if (game.freetogame_profile_url !== undefined && typeof game.freetogame_profile_url !== 'string') {
      throw new ValidationError('If provided, freetogame_profile_url must be a string.');
    }
  }
}