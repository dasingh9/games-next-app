import Link from 'next/link';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Thumbnail({ url }) {
    return (
        <img src={url} alt="Game Image" />
    )
}


export function GameCard({ game, children }) {

    //card style used just for demo purpose, otherwise this can be removed
    const cardStyle = {
        backgroundColor: "white",
        border: "0px solid green"
    };

    return (
        <div className="card" style={cardStyle}>
            <Thumbnail url={game.thumbnail} />
            <div className="card-content">
                <h3 className="game-title">{game.title}</h3>
                <p className="game-description">{game.shortDescription}</p>
                <a className="play-btn" href={game.gameUrl} target="_blank">Play</a>
            </div>
        </div>
    )


    {
        /* 
        // MUI sample card
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia component="img" height="140" alt="iguana"
                    image={game.thumbnail} />
                <CardContent>
                    <Typography gutterBottom variant="h5"
                        component="div">
                        {game.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {game.shortDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link href={game.gameUrl} target="_blank" rel="noopener noreferrer">
                    <Button>Play</Button>
                </Link>
            </CardActions>
        </Card>
        */
    }
}