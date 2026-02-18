import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Slim version is lighter

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // This should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles Container Loaded", container);
  };

  // Define your particle look and behavior
  const options = {
    background: {
      color: { value: "transparent" }, // Let your CSS handle the main background
    },
    fpsLimit: 120,
    particles: {
      color: { value: ["#96e1d3", "#c2ac5c"]}, // Using your --secondary-color
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: { default: "out" },
      },
      number: { density: { enable: true }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return null;
};

export default ParticlesBackground;