import { GamesList } from "./GamesList";
import GameService from "../../lib/services/gameService";
import { GamesFilter } from "./GamesFilter";
import { Flexbox } from "../shared/Flexbox";
import AddNewGame from "./AddNewGame";
import "./games.css";

const gameService = new GameService();

export default async function GamesComponent({searchParams}) {
    // Await searchParams as required by Next.js dynamic API
    const params = await searchParams;
    const keyword = params?.keyword || "";
    const genre = params?.genre || "";
    const games = await gameService.getGames();

    // Server-side filtering
    let filteredGames = games;
    if (keyword) {
        filteredGames = filteredGames.filter(game => game.title.toLowerCase().includes(keyword.toLowerCase()));
    }
    if (genre) {
        filteredGames = filteredGames.filter(game => game.genre === genre);
    }

    return (
        <>
            <GamesFilter keyword={keyword} genre={genre} />
            <GamesList games={filteredGames} displayType="cards" />
        </>
    )
}