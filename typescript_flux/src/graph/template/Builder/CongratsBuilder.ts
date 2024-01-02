import fluxjs from "fluxjs";
import uy from "componentscontract";
export interface congratsBuilderInput {
  titleLabel: (context: any) => string;
  buttonLabel: (context: any) => string;
}

export const congratsBuilder = function (input: congratsBuilderInput) {

  function setupTitle(context: any) {
    let title = new uy.MobileText();
    title.text = input.titleLabel(context);
    title.backgroundColor = "#ffffff";
    title.color = "#000000";
    title.truncate = true;
    title.gravity = uy.GravityValue.LEFT;
    title.textType = uy.TextType.LIGHT;

    context.stepProxy.addComponent(title);
  }

  function setupButon(context: any) {
    let connectionEvent = new fluxjs.WebRedirectionEvent("/custommiddle");
    let buttonComponent = new uy.BlockButton();
    let spacing = new uy.Spacing();
    spacing.bottom = 5;
    spacing.right = 5;
    spacing.left = 5;
    spacing.top = 5;
    buttonComponent.spacing = spacing;
    buttonComponent.onClickEvent = connectionEvent;
    buttonComponent.color = "#ea00ff";
    buttonComponent.hoverColor = "#f8a6ff";
    buttonComponent.position = "botton";
    buttonComponent.text = input.buttonLabel(context);

    context.stepProxy.addComponent(buttonComponent);
  }

  async function execute(context: any) {
    setupTitle(context);
    setupButon(context);
  }

  return {
    execute,
  };
};
