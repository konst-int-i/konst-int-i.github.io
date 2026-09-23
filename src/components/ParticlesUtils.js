import { loadSlim } from 'tsparticles-slim';

export const particlesInit = async engine => {
  await loadSlim(engine);
};
