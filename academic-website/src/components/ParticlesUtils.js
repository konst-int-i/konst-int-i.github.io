import { loadSlim } from "tsparticles-slim"; 

export const particlesInit = async engine => {
   console.log(engine);
   // You can initiate the tsParticles instance (engine) here.
   await loadSlim(engine); // Make sure to import loadSlim at the top
};

export const particlesLoaded = async container => {
   await console.log(container);
};