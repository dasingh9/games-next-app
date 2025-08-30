import GameService from "@/lib/services/GameService";

const gameService = new GameService();

export default async function GameDetail({ params }) {
    const { id } = await params;
    const game = await gameService.getGameById(id);

    /*if (!game) {
        return <div>Game not found.</div>;
    }*/

    if(!game)
        throw new Error("Game not found in the games repository");

    return (
        <div style={{ maxWidth: 600, margin: '2rem auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #0001', padding: 24 }}>
            <img src={game.thumbnail} alt={game.title} style={{ width: '100%', borderRadius: 8 }} />
            <h1>{game.title}</h1>
            <p><strong>Description:</strong> {game.shortDescription}</p>
            <p><strong>Genre:</strong> {game.genre}</p>
            <p><strong>Platform:</strong> {game.platform}</p>
            <p><strong>Publisher:</strong> {game.publisher}</p>
            <p><strong>Developer:</strong> {game.developer}</p>
            <p><strong>Release Date:</strong> {game.releaseDate}</p>
            <p>
                <a className="play-btn" href={game.gameUrl} target="_blank" rel="noopener noreferrer">Play Now</a> <br/>
                <a className="play-btn" href={game.freetogameProfileUrl} target="_blank" rel="noopener noreferrer">Profile</a>
            </p>
        </div>
    );
}