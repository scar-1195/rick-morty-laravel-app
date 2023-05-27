import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { rickMortyApi } from "../api";

const getData = async () => {
    const rnd = 4;
    try {
        const { data: location } = await rickMortyApi(`/${rnd}`);
        const fiveResidents = location.residents.slice(0, 5);

        const residentsInfoPromises = fiveResidents.map((residentUrl) =>
            axios.get(residentUrl)
        );
        const residentsInfoResponses = await Promise.all(residentsInfoPromises);
        const residentsInfo = residentsInfoResponses
            .map((response) => response.data)
            .sort((a, b) => a.name.localeCompare(b.name));

        console.log(residentsInfo);
        return residentsInfo;
    } catch (error) {}
};


export const useGetData = () => {
    const query = useQuery([], getData);
    return query;
};
