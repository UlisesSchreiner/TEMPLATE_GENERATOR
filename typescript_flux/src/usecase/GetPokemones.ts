import fluxjs from "fluxjs";
import uy from "componentscontract";
import { PokemonesImp } from "../infraestructure/repository/pokemones/PokemonesImp";
export interface getPokemonesInput {
  label: (context: any) => string;
}

export const GetPokemones = function (input: getPokemonesInput) {

  async function execute(context: any) {
    // pegada a la api
    let response = await PokemonesImp.getPokemones()
    context.dataProxy.putData("pokemones", response)
  }

  return {
    execute,
  };
};
