const particlesConfig:object = {
    fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true
    }
  },
  particles: {
    color: {
      value: [
        "#3998D0",
        "#2EB6AF",
        "#A9BD33",
        "#FEC73B",
        "#F89930",
        "#F45623",
        "#D62E32",
        "#EB586E",
        "#9952CF"
      ]
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 800,
          y: 800
        }
      },
      direction: "none",
      enable: true,
      outModes: {
        default: "destroy"
      },
      random: false,
      speed: 4,
      straight: false,
      trail: {
        fillColor: "#1e2b36",
        length: 30,
        enable: true
      }
    },
    number: { density: { enable: true, area: 800 }, value: 0 },
    opacity: {
      value: 1
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 25,
      animation: {
        startValue: "min",
        enable: true,
        minimumValue: 1,
        speed: 2,
        destroy: "max",
        sync: true
      }
    }
  },
  detectRetina: true,
  emitters: {
    direction: "none",
    rate: {
      quantity: 5,
      delay: 0.3
    },
    size: {
      width: 0,
      height: 0
    },
    position: {
      x: 50,
      y: 50
    }
  },
};
export default particlesConfig;
