import uy from "componentscontract";
import { congratsBuilder, congratsBuilderInput } from "../Builder/CongratsBuilder";

export class DummyCongratsLeftProvider {
  myInput: congratsBuilderInput = {
    titleLabel: (context: any) => {
      return "Dummy congrats LEFT";
    },
    buttonLabel: (context: any) => {
      return "Go home"
    },
  };

  invoke() {
    let experimental = new uy.MobileViewStep();
    experimental.id = "dummy_congrats_left_view_step";
    experimental.backGroundColor = "#FFFFFF";
    experimental.organizer = "scrolling"; 
    experimental.builderAction = congratsBuilder(this.myInput).execute;

    return experimental;
  }
}
