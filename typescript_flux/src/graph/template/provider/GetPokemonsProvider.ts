import fluxjs from "fluxjs";
import uy from "componentscontract";
import { getPokemonesInput, GetPokemones } from "../../../usecase/GetPokemones";

export class GetPokemonsProvider {
  myInput: getPokemonesInput = {
    label: (context: any) => {
      return "cualquier dato"//context.session.getDataInSession("mi_key")
    },
  };

  async before (context: any) {
    
    //console.log("### --> request del contecto en provider ", context.request.data.output.text_uno)
  }

  invoke() {
    let experimental = new fluxjs.LogicStep();
    experimental.id = "get_pokemons_step";
    experimental.builderAction = GetPokemones(this.myInput).execute;

    return experimental;
  }
}
