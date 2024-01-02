import fluxjs from 'fluxjs';
import { SuccessCongratsProvider } from './provider/SuccessCongratsProvider';
import { FailCongratsProvider } from './provider/FailCongratsProvider';
import { GetPokemonsProvider } from './provider/GetPokemonsProvider';

let edgeStep = new fluxjs.LogicStep();
edgeStep.id = "first_template_start_id";

let logicStep = new GetPokemonsProvider().invoke()
let experimental2 = new SuccessCongratsProvider().invoke()
let experimental3 = new FailCongratsProvider().invoke()

let template = new fluxjs.Template(edgeStep);


// logic navigation
template.nexFrom(edgeStep, experimental2);
template.nexFrom(experimental2, logicStep);
template.nexFrom(logicStep, experimental3);

export default template;
