import fluxjs from 'fluxjs';
import { HomeDisclaimerProvider } from './provider/HomeDisclaimerProvider';
import { PokemonesCongratsProvider } from './provider/PokemonesCongratsProvider';
import { GetPokemonsProvider } from './provider/GetPokemonsProvider';
import { DummyDisclaimerProvider } from './provider/DummyDisclaimerProvider';
import { DummyCongratsRightProvider } from './provider/DummyCongratsRightProvider';
import { DummyCongratsLeftProvider } from './provider/DummyCongratsLeftProvider';

let edgeStep = new fluxjs.LogicStep();
edgeStep.id = "first_template_start_id";

let homePage = new HomeDisclaimerProvider().invoke()
let getPokemones = new GetPokemonsProvider().invoke()
let pokemonesCongrats = new PokemonesCongratsProvider().invoke()
let dummyDisclaimer = new DummyDisclaimerProvider().invoke()
let dummyCongratsRigth = new DummyCongratsRightProvider().invoke()
let dummyCongratsLeft = new DummyCongratsLeftProvider().invoke()
let inputBifurcation = new fluxjs.LogicStep(); 
inputBifurcation.id = "input_bifurcation";

let template = new fluxjs.Template(edgeStep);

let inputCheckCondition = (context: any) => {
    return context.request.data.output.text_uno == "right"
}

// logic navigation
template.nexFrom(edgeStep, homePage);
template.nexFrom(homePage, getPokemones);
template.nexFrom(getPokemones, pokemonesCongrats);
template.linkFrom(homePage, dummyDisclaimer, "pokemones", true)
template.nexFrom(dummyDisclaimer, inputBifurcation, true)
template.bifurcationFrom(inputBifurcation, dummyCongratsRigth, dummyCongratsLeft, inputCheckCondition)



export default template;
