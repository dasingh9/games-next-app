"use client"
import { useState } from "react";

export default function AddNewGame({ onAdd, onClose }) {
    const [game, setGame] = useState({
        id: "",
        title: "",
        thumbnail: "",
        shortDescription: "",
        gameUrl: "",
        genre: "",
        platform: "",
        publisher: "",
        developer: "",
        releaseDate: "",
        freetogameProfileUrl: "",
        authorFisrtName: "",
        authorLastName: "",
        authorCity: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setGame(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (game.title && game.genre) {
            onAdd({ ...game, id: Date.now() });
            onClose();
        }
    }

    return (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', background: 'rgba(0,0,0,0.3)' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-between align-items-center">
                        <h5 className="modal-title">Add New Game</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input name="title" value={game.title} onChange={handleChange} placeholder="Title" required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input name="thumbnail" value={game.thumbnail} onChange={handleChange} placeholder="Thumbnail URL" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input name="shortDescription" value={game.shortDescription} onChange={handleChange} placeholder="Short Description" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input name="gameUrl" value={game.gameUrl} onChange={handleChange} placeholder="Game URL" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input name="genre" value={game.genre} onChange={handleChange} placeholder="Genre" required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input name="platform" value={game.platform} onChange={handleChange} placeholder="Platform" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input name="publisher" value={game.publisher} onChange={handleChange} placeholder="Publisher" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input name="developer" value={game.developer} onChange={handleChange} placeholder="Developer" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input name="releaseDate" value={game.releaseDate} onChange={handleChange} placeholder="Release Date" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input name="freetogameProfileUrl" value={game.freetogameProfileUrl} onChange={handleChange} placeholder="Profile URL" className="form-control" />
                            </div>
                            <div className="d-flex justify-content-start" style={{ marginTop: '12px' }}>
                                <button type="submit" className="btn btn-primary">Add Game</button>
                                <button type="button" className="btn btn-secondary" onClick={onClose} style={{ marginLeft: '8px' }}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
