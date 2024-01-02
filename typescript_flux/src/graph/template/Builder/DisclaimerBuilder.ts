import fluxjs from "fluxjs";
import uy from "componentscontract";
export interface disclaimerBuilderInput {
  titleLabel: (context: any) => string;
  firstButtonLabel: (context: any) => string;
  secondButtonLabel: (context: any) => string;
}

export const disclaimerBuilder = function (input: disclaimerBuilderInput) {

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

  function setupFirstButon(context: any) {
    let connectionEvent = new fluxjs.ConnectionEvent("continue");
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
    buttonComponent.text = input.firstButtonLabel(context);

    context.stepProxy.addComponent(buttonComponent);
  }

  function setupSecondButon(context: any) {
    let connectionEvent = new fluxjs.ConnectionEvent("pokemones");
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
    buttonComponent.text = input.secondButtonLabel(context);

    context.stepProxy.addComponent(buttonComponent);
  }

  async function execute(context: any) {
    setupTitle(context);
    setupFirstButon(context);
    setupSecondButon(context)
  }

  return {execute};
};
