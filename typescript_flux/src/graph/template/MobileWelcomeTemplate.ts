import fluxjs from 'fluxjs';
import { HomeDisclaimerProvider } from './provider/HomeDisclaimerProvider';
import { PokemonesCongratsProvider } from './provider/PokemonesCongratsProvider';
import { GetPokemonsProvider } from './provider/GetPokemonsProvider';
import { DummyCongratsProvider } from './provider/DummyCongratsProvider';

let edgeStep = new fluxjs.LogicStep();
edgeStep.id = "first_template_start_id";

let homePage = new HomeDisclaimerProvider().invoke()
let getPokemones = new GetPokemonsProvider().invoke()
let pokemonesCongrats = new PokemonesCongratsProvider().invoke()
let dummyCongrats = new DummyCongratsProvider().invoke()

let template = new fluxjs.Template(edgeStep);


// logic navigation
template.nexFrom(edgeStep, homePage);
template.nexFrom(homePage, getPokemones);
template.nexFrom(getPokemones, pokemonesCongrats);
template.linkFrom(homePage, dummyCongrats, "pokemones", true)

export default template;
