import { CharacterCard, Loading } from "./";
import { useGetData } from "../hooks";

export const CharacterList = () => {
    const query = useGetData();

    if (query.isFetching) {
        return <Loading />;
    }
    return (
        <>
            <div className="grid px-5">
                <div className="col-12 text-center">
                    <h1>Rick and Morty</h1>
                </div>
                {query.data.map((character) => (
                    <CharacterCard key={character.id} {...character} />
                ))}
            </div>
        </>
    );
};
