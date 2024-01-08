import fluxjs from "fluxjs";
import uy from "componentscontract";
import { disclaimerBuilder, disclaimerBuilderInput } from "../Builder/DisclaimerBuilder";

export class HomeDisclaimerProvider {
  myInput: disclaimerBuilderInput = {
    titleLabel: (context: any) => {
      return "Home page";
    },
    firstButtonLabel: (context: any) => {
      return "Continue";
    },
    secondButtonLabel: (context: any) => {
      return "Dummy disclaimer";
    }, 
  };

  async before (context: any) {
    //context.dataProxy.putData("title", "titulo from context")
    //context.session.setDataInSession("mi_key", 123)
  }

  invoke() {
    let experimental = new uy.MobileViewStep();
    experimental.id = "first_view_step";
    experimental.backGroundColor = "#f6eefd";
    experimental.organizer = "scrolling";
    experimental.beforeAction = this.before 
    experimental.builderAction = disclaimerBuilder(this.myInput).execute;

    return experimental;
  }
}
