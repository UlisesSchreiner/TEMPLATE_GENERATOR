import uy from "componentscontract";
import { congratsBuilder, congratsBuilderInput } from "../Builder/CongratsBuilder";

export class DummyCongratsRightProvider {
  myInput: congratsBuilderInput = {
    titleLabel: (context: any) => {
      return "Dummy congrats RIGHT";
    },
    buttonLabel: (context: any) => {
      return "Go home"
    },
  };

  invoke() {
    let experimental = new uy.MobileViewStep();
    experimental.id = "dummy_congrats_right_view_step";
    experimental.backGroundColor = "#FFFFFF";
    experimental.organizer = "scrolling"; 
    experimental.builderAction = congratsBuilder(this.myInput).execute;

    return experimental;
  }
}
