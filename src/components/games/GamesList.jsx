import { GameCard } from "./GameCard";
import { Flexbox } from "../shared/Flexbox";

export function GamesList({games, displayType}) {

    if(displayType=="cards") {
        return (
            <Flexbox>
                {games.map(x => (<GameCard key={x.id} game={x} />))}
            </Flexbox>
        )
    }
    else if(displayType=="table") {
        return (
            <table className="table">
                { games.map(x => (
                    <tr>
                        <td>{x.title}</td>
                        <td>{x.genre}</td>
                        <td>{x.platform}</td>
                        <td>{x.gameUrl}</td>
                    </tr>
                ))}
            </table>
        )
    }

}