import uy from "componentscontract";
import { WithInputDisclaimerBuilder, WithInputDisclaimerBuilderInput } from "../Builder/WithInputDisclaimerBuilder";

export class DummyDisclaimerProvider {
  myInput: WithInputDisclaimerBuilderInput = {
    titleLabel: (context: any) => {
      return "This is a dummy disclaimer";
    },
    firstButtonLabel: (context: any) => {
      return "Continue"
    }
  };

  async before (context: any) {
  //  let logicStepResult = context.dataProxy.getData("pokemones")
  //  console.log("### --> logic step result ", logicStepResult)
  //  console.log("### --> request del contecto en provider ", context.request.data.output.text_uno)
  }

  invoke() {
    let experimental = new uy.MobileViewStep();
    experimental.id = "dummy_congrats_view_step";
    experimental.backGroundColor = "#FFFFFF";
    experimental.organizer = "scrolling";
    experimental.beforeAction = this.before 
    experimental.builderAction = WithInputDisclaimerBuilder(this.myInput).execute;

    return experimental;
  }
}
