import GamesComponent from "@/components/games/GamesComponent";

export default function GamesPage({ searchParams }) {
    return (
        <GamesComponent searchParams={searchParams}></GamesComponent>
    );
}