import fluxjs from "fluxjs";
import uy from "componentscontract";
import { congratsBuilder, congratsBuilderInput } from "../Builder/CongratsBuilder";

export class SuccessCongratsProvider {
  myInput: congratsBuilderInput = {
    titleLabel: (context: any) => {
      return "Listo para iniciar?";
    },
    buttonLabel: (context: any) => {
      return context.dataProxy.getData("title");
    },
  };

  async before (context: any) {
    context.dataProxy.putData("title", "titulo from context")
    context.session.setDataInSession("mi_key", 123)
  }

  invoke() {
    let experimental = new uy.MobileViewStep();
    experimental.id = "first_view_step";
    experimental.backGroundColor = "#f6eefd";
    experimental.organizer = "scrolling";
    experimental.beforeAction = this.before 
    experimental.builderAction = congratsBuilder(this.myInput).execute;

    return experimental;
  }
}
