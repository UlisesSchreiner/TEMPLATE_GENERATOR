const awilix = require('awilix')
import fluxjs from "fluxjs"
import SessionClientImpl from './SessionClientImpl';

// Define una función de fábrica personalizada
function createVersionWithSessionClient() {
    const sessionClientInstance = new SessionClientImpl();
    console.log("dependencia fabricada", sessionClientInstance)
  return fluxjs.Version.getInstance(sessionClientInstance);
}

// Crea el contenedor de dependencias
const container = awilix.createContainer();

// Registra la función de fábrica personalizada con inyección de la instancia de SessionClient
container.register({
  mobileVersion: awilix.asFunction(createVersionWithSessionClient)
});

export default container;