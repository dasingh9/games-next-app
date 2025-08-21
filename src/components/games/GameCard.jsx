function Thumbnail({url}) {
    return (
        <img src={url} alt="Game Image" />
    )
}


export function GameCard({ game, children }) {

    //card style used just for demo purpose, otherwise this can be removed
    const cardStyle = { 
        backgroundColor:"white",
        border: "0px solid green"
    };

    return (
        <div className="card" style={cardStyle}>
            <Thumbnail url={game.thumbnail}/>
            <div className="card-content">
                <h3 className="game-title">{game.title}</h3>
                <p className="game-description">{game.shortDescription}</p>
                <a className="play-btn" href={game.gameUrl} target="_blank">Play</a>
            </div>
        </div>
    )
}