import { ValidationError, RecordNotFoundError } from './errors/api-error.js';

export class ResponseBuilder {
    static errorResponse(error) {
        if (error instanceof ValidationError) {
            return this.badRequest(error.message);
        }
        if (error instanceof RecordNotFoundError) {
            return this.notFound(error.message);
        }
        return this.internalServerError(error?.message || 'Internal Server Error');
    }

    static success(data, statusCode = 200) {
        return new Response(JSON.stringify(data), {
            status: statusCode,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    static badRequest(errorMessage = 'Bad Request') {
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    static notFound(errorMessage = 'Not Found') {
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    static unauthorized(errorMessage = 'Unauthorized') {
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    static forbidden(errorMessage = 'Forbidden') {
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: 403,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    static internalServerError(errorMessage = 'Internal Server Error') {
        return new Response(JSON.stringify({ error: errorMessage }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    static created(data) {
        return new Response(JSON.stringify(data), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    static noContent() {
        return new Response(null, {
            status: 204,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}