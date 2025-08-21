"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Flexbox } from "../shared/Flexbox";

export function GamesFilter({ keyword: initialKeyword = "", genre: initialGenre = "" }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [keyword, setKeyword] = useState(initialKeyword);
    const [genre, setGenre] = useState(initialGenre);

    function handleFilter(e) {
        e.preventDefault();
        const params = new URLSearchParams(searchParams.toString());
        if (keyword) {
            params.set("keyword", keyword);
        } else {
            params.delete("keyword");
        }
        if (genre) {
            params.set("genre", genre);
        } else {
            params.delete("genre");
        }
        router.push("?" + params.toString());
    }

    function clearFilters() {
        setKeyword("");
        setGenre("");
        router.push("?");
    }

    return (
        <form onSubmit={handleFilter}>
            <Flexbox>
                <input
                    type="text"
                    name="keyword"
                    className="input-name-filter"
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                    placeholder="Filter by title"
                />
                <select name="genre" id="genre" value={genre} onChange={e => setGenre(e.target.value)}>
                    <option value="">All Genres</option>
                    <option value="Shooter">Shooter</option>
                    <option value="ARPG">ARPG</option>
                    <option value="Strategy">Strategy</option>
                </select>
                <button type="submit" className="btn btn-primary">Apply Filter</button>
                <button type="button" className="btn btn-secondary" onClick={clearFilters}>Clear Filters</button>
            </Flexbox>
        </form>
    );
}