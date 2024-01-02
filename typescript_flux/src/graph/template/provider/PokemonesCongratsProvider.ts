import uy from "componentscontract";
import { congratsBuilder, congratsBuilderInput } from "../Builder/CongratsBuilder";

export class PokemonesCongratsProvider {
  myInput: congratsBuilderInput = {
    titleLabel: (context: any) => {
      return "Se obtuvo " + String(context.dataProxy.getData("pokemones")) + " de la api de pokemones";
    },
    buttonLabel: (context: any) => {
      return "OK"
    },
  };

  async before (context: any) {
    let logicStepResult = context.dataProxy.getData("pokemones")
    console.log("### --> logic step result ", logicStepResult)
    console.log("### --> request del contecto en provider ", context.request.data.output.text_uno)
  }

  invoke() {
    let experimental = new uy.MobileViewStep();
    experimental.id = "second_view_step";
    experimental.backGroundColor = "#FFFFFF";
    experimental.organizer = "scrolling";
    experimental.beforeAction = this.before 
    experimental.builderAction = congratsBuilder(this.myInput).execute;

    return experimental;
  }
}
