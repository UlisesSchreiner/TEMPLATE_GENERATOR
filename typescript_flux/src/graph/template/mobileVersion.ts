import container from "../../infraestructure/containers"
import fluxjs from "fluxjs"
import MobileTemplate from './MobileTemplate'
import MobileWelcomeTemplate from './MobileWelcomeTemplate'

let instance = container.resolve('mobileVersion')

export default function init() {
    let entryStep = new fluxjs.LogicStep()
    entryStep.id = "entry_step"

    instance.nexFrom(entryStep, MobileWelcomeTemplate)
    //instance.nexFrom(entryStep, MobileTemplate)
}
