import axios from "axios";
import PokemonesI from "../../../domain/contract/PokemonesInterface";

export const PokemonesImp: PokemonesI = {
    getPokemones: async () => {
        const url = "https://pokeapi.co/api/v2/pokemon/ditto";
        const response = await axios.get(url);
        console.log("### -> response from client", response.data.name)
        return response.data.name
    }
}
