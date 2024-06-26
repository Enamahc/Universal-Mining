var locales = "en-EN";
var currency = "USD";

var savegame = JSON.parse(localStorage.getItem("Save"));
var saveBP = JSON.parse(localStorage.getItem("BPSave"));
var saveResearch = JSON.parse(localStorage.getItem("RSave"));
var saveConversions = JSON.parse(localStorage.getItem("CSave"));

var prestige = JSON.parse(localStorage.getItem("PrestigeSave"));

var gamedata = {
  version: "0.0.0.a",
  newgame: true,
  money: 0,
  planetSize: 10,
  res: {
    Res1a: 0,
    Res1b: 0,
    Res1c: 0,
    Res2a: 0,
    Res2b: 0,
    Res2c: 0,
    Res3a: 0,
    Res3b: 0,
    Res3c: 0,
    Rare1: 0,
    Rare2: 0,
    Rare3: 0
  },
  resName: {
    Res1a: "Iron",
    Res1b: "Copper",
    Res1c: "Aluminium",
    Res2a: "Zinc",
    Res2b: "Lead",
    Res2c: "Silver",
    Res3a: "Iridium",
    Res3b: "Gold",
    Res3c: "Palladium",
    Rare1: "Cassiterite",
    Rare2: "Red beryl",
    Rare3: "Taaffeite"
  },
  baseValue: {
    Res1a: 1,
    Res1b: 1,
    Res1c: 1,
    Res2a: 50,
    Res2b: 50,
    Res2c: 50,
    Res3a: 1600,
    Res3b: 1600,
    Res3c: 1600,
    Rare1: 25,
    Rare2: 50,
    Rare3: 2000
  },
  resValue: {
    Res1a: 0,
    Res1b: 0,
    Res1c: 0,
    Res2a: 0,
    Res2b: 0,
    Res2c: 0,
    Res3a: 0,
    Res3b: 0,
    Res3c: 0,
    Rare1: 0,
    Rare2: 0,
    Rare3: 0
  },
  resRatio: {
    Res1R1: 1,
    Res1R2: 0.02,
    Res1R3: 0.000625,
    Res2R1: 50,
    Res2R2: 1,
    Res2R3: 0.03125,
    Res3R1: 1600,
    Res3R2: 32,
    Res3R3: 1
  },
  rare: {
    Rare1: false,
    Rare2: false,
    Rare3: false
  },
  minePower: 1,
  reach: {
    d1NW: 0,
    d1N: 0,
    d1NE: 0,
    d1W: 0,
    d1E: 0,
    d1SW: 0,
    d1S: 0,
    d1SE: 0,
    d2core: 0,
    core: 0
  },
  notMined: {
    d1NW: [],
    d1N: [],
    d1NE: [],
    d1W: [],
    d1E: [],
    d1SW: [],
    d1S: [],
    d1SE: [],
    d2NW: [],
    d2N: [],
    d2NE: [],
    d2W: [],
    d2core: [],
    d2E: [],
    d2SW: [],
    d2S: [],
    d2SE: [],
    /* 
        d3NW: [],
        d3N: [],
        d3NE: [],
        d3W: [], */
    d3core: []
    /* ,
        d3E: [],
        d3SW: [],
        d3S: [],
        d3SE: [] */
  },
  possibleOuterMaterial: ["Iron", "Copper", "Aluminium"],
  outermaterial: {
    name: "",
    ref: ""
  },
  possibleInnerMaterial: ["Zinc", "Lead", "Silver"],
  innermaterial: {
    name: "",
    ref: ""
  },
  possibleCoreMaterial: ["Iridium", "Gold", "Palladium"],
  corematerial: {
    name: "",
    ref: ""
  },
  droneAssign: {
    d1NW: 0,
    d1N: 0,
    d1NE: 0,
    d1W: 0,
    d1E: 0,
    d1SW: 0,
    d1S: 0,
    d1SE: 0,
    d2NW: 0,
    d2N: 0,
    d2NE: 0,
    d2W: 0,
    d2core: 0,
    d2E: 0,
    d2SW: 0,
    d2S: 0,
    d2SE: 0,
    /* d3NW: 0, */
    /* d3N: 0, */
    /* d3NE: 0, */
    /* d3W: 0, */
    d3core: 0
    /* d3E: 0,
    d3SW: 0,
    d3S: 0,
    d3SE: 0 */
  },
  d1base: 2,
  d1x: 1.4,
  d1rate: 1,
  d2base: 1,
  d2x: 1.4,
  d2rate: 1,
  d3base: 0.2,
  d3x: 1.4,
  d3rate: 1,
  yield1: 0.1,
  yield2: 0.01,
  yield3: 0.001,
  drone1: 0,
  d1left: 0,
  drone2: 0,
  d2left: 0,
  drone3: 0,
  d3left: 0,
  shipCargoLvl: 1,
  shipMaxCargo: 10,
  shipCapacity: 10,
  shipBayCapacity: 5,
  droneMk1: {
    Res1a: 0,
    Res1b: 0,
    Res1c: 0
  },
  droneMk2: {
    Res2a: 0,
    Res2b: 0,
    Res2c: 0,
    d1: 1
  },
  droneMk3: {
    Res3a: 0,
    Res3b: 0,
    Res3c: 0,
    d2: 1
  },
  shipStock: {
    Res1a: 0,
    Res1b: 0,
    Res1c: 0,
    Res2a: 0,
    Res2b: 0,
    Res2c: 0,
    Res3a: 0,
    Res3b: 0,
    Res3c: 0,
    Rare1: 0,
    Rare2: 0,
    Rare3: 0
  },
  sumValue: 0,
  sellingTime: 60,
  timeLeft: 0,
  tech: {
    membercard1: 0,
    membercard2: 0,
    membercard3: 0,
    researchLab: 0,
    droneMk1: 0,
    droneMk2: 0,
    droneMk3: 0,
    exoMk1: 1,
    exoMk2: 0,
    exoMk3: 0,
    cargoMk1: 1,
    cargoMk2: 0,
    cargoMk3: 0,
    droneBayMk1: 1,
    droneBayMk2: 0,
    droneBayMk3: 0,
    thrustersMk1: 1,
    thrustersMk2: 0,
    thrustersMk3: 0,
    antennaMk1: 1,
    antennaMk2: 0,
    antennaMk3: 0,
    converterMk1: 0,
    converterMk2: 0,
    converterMk3: 0,
    autonomousDrone: 0,
    massReducer: 0,
    engineeredDroneMk2: 0,
    engineeredDroneMk3: 0,
    planetAnalyzer: 0,
    teleporter: 0,
    tradingAI: 0,
    miningAI: 0,
    spatialDrillingLaser: 0,
    tractorBeam: 0,
    autoPrestige: 0
  },
  BP: {
    membercard1: 0,
    membercard2: 0,
    membercard3: 0,
    researchLab: 0,
    droneMk1: 0,
    droneMk2: 0,
    droneMk3: 0,
    exoMk1: 1,
    exoMk2: 0,
    exoMk3: 0,
    cargoMk1: 1,
    cargoMk2: 0,
    cargoMk3: 0,
    droneBayMk1: 1,
    droneBayMk2: 0,
    droneBayMk3: 0,
    thrustersMk1: 1,
    thrustersMk2: 0,
    thrustersMk3: 0,
    antennaMk1: 1,
    antennaMk2: 0,
    antennaMk3: 0,
    converterMk1: 0,
    converterMk2: 0,
    converterMk3: 0,
    autonomousDrone: 0,
    massReducer: 0,
    engineeredDroneMk2: 0,
    engineeredDroneMk3: 0,
    planetAnalyzer: 0,
    teleporter: 0,
    tradingAI: 0,
    miningAI: 0,
    spatialDrillingLaser: 0,
    tractorBeam: 0,
    autoPrestige: 0
  },
  RP: 0,
  resRP: {
    Res1a: 0.2,
    Res1b: 0.2,
    Res1c: 0.2,
    Res2a: 4,
    Res2b: 4,
    Res2c: 4,
    Res3a: 64,
    Res3b: 64,
    Res3c: 64,
    Rare1: 12.8,
    Rare2: 128,
    Rare3: 1280
  },
  prestigeTime: 10,
  prestigeCost: 0,
  prestigeCreep: 1.3,
  prestigeNb: 0,
  prestigeTimeLeft: 0,
  coordinatesNb: 0,
  coordinatesPrice: 0,
  planetShop: {
    c1: {
      name: "",
      ref: ""
    },
    c2: {
      name: "",
      ref: ""
    },
    c3: {
      name: "",
      ref: ""
    },
    size: 0,
  },
  planet1: {
    c1: {
      name: "",
      ref: ""
    },
    c2: {
      name: "",
      ref: ""
    },
    c3: {
      name: "",
      ref: ""
    },
    size: 0,
  },
  planet2: {
    c1: {
      name: "",
      ref: ""
    },
    c2: {
      name: "",
      ref: ""
    },
    c3: {
      name: "",
      ref: ""
    },
    size: 0,
  },
  planet3: {
    c1: {
      name: "",
      ref: ""
    },
    c2: {
      name: "",
      ref: ""
    },
    c3: {
      name: "",
      ref: ""
    },
    size: 0,
  },
  planet4: {
    c1: {
      name: "",
      ref: ""
    },
    c2: {
      name: "",
      ref: ""
    },
    c3: {
      name: "",
      ref: ""
    },
    size: 0,
  },
  planet5: {
    c1: {
      name: "",
      ref: ""
    },
    c2: {
      name: "",
      ref: ""
    },
    c3: {
      name: "",
      ref: ""
    },
    size: 0,
  },
  lasttick: 0
};

var blueprints = {
  droneMk1: {
    prev: [],
    next: ["droneMk2", "exoMk2"],
    title: "Mining Drone Mk1",
    bought: false,
    toCraft: true,
    price: 8,
    res: {
      Res1a: 2,
      Res1b: 2,
      Res1c: 2,
      Res2a: 0,
      Res2b: 0,
      Res2c: 0,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Automated mining drone that can mine the upper layer of the planet."
  },
  droneMk2: {
    prev: ["droneMk1", "exoMk2"],
    next: ["droneMk3", "exoMk3"],
    title: "Mining Drone Mk2",
    bought: false,
    toCraft: true,
    price: 250,
    res: {
      Res1a: 0,
      Res1b: 0,
      Res1c: 0,
      Res2a: 0.63,
      Res2b: 0.63,
      Res2c: 0.63,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0,
      d1: 1
    },
    desc: "Automated mining drone that can mine the second layer of the planet."
  },
  droneMk3: {
    prev: ["droneMk2", "exoMk3"],
    next: [],
    title: "Mining Drone Mk3",
    bought: false,
    toCraft: true,
    price: 1000,
    res: {
      Res1a: 0,
      Res1b: 0,
      Res1c: 0,
      Res2a: 0,
      Res2b: 0,
      Res2c: 0,
      Res3a: 0.2,
      Res3b: 0.2,
      Res3c: 0.2,
      d2: 1
    },
    desc: "Automated mining drone that can mine the core of the planet!"
  },
  membercard1: {
    prev: [],
    next: ["membercard2"],
    title: "Membership Card I",
    bought: false,
    toCraft: false,
    price: 2500,
    desc: "This membership card of the Universal Mining Organization reduces travel costs by 99.99%!"
  },
  membercard2: {
    prev: ["membercard1"],
    next: ["membercard3"],
    title: "Membership Card II",
    bought: false,
    toCraft: false,
    price: 5000,
    desc: "Get another 99.99% reduction on travel costs!"
  },
  membercard3: {
    prev: ["membercard2"],
    next: [],
    title: "Membership Card III (Not implemented)",
    bought: false,
    toCraft: false,
    price: 0,
    desc: "(Not implemented)"
  },
  researchLab: {
    prev: [],
    next: [],
    title: "Research Lab",
    bought: false,
    toCraft: true,
    price: 500,
    res: {
      Res1a: 15,
      Res1b: 15,
      Res1c: 15,
      Res2a: 5,
      Res2b: 5,
      Res2c: 5,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "This laboratory provides access to research on the collected materials."
  },
  exoMk1: {
    prev: [],
    next: ["exoMk2"],
    bought: true,
    toCraft: false
  },
  exoMk2: {
    prev: ["exoMk1", "droneMk1"],
    next: ["exoMk3", "droneMk2"],
    title: "Exoskeleton Mk1",
    bought: false,
    toCraft: true,
    price: 150,
    res: {
      Res1a: 33,
      Res1b: 33,
      Res1c: 33,
      Res2a: 0,
      Res2b: 0,
      Res2c: 0,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Increase your strength enough to mine the second layer of the planet by hand."
  },
  exoMk3: {
    prev: ["exoMk2", "droneMk2"],
    next: ["droneMk3"],
    title: "Exoskeleton Mk2",
    bought: false,
    toCraft: true,
    price: 2500,
    res: {
      Res1a: 150,
      Res1b: 150,
      Res1c: 150,
      Res2a: 33,
      Res2b: 33,
      Res2c: 33,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Increase your strength enough to mine the core of the planet by hand!"
  },
  cargoMk1: {
    prev: [],
    next: ["cargoMk2", "droneBayMk2"],
    bought: true
  },
  cargoMk2: {
    prev: ["cargoMk1"],
    next: ["cargoMk3", "droneBayMk3"],
    title: "Cargo Bay Mk2",
    bought: false,
    toCraft: true,
    price: 100,
    res: {
      Res1a: 3.3,
      Res1b: 3.3,
      Res1c: 3.3,
      Res2a: 0,
      Res2b: 0,
      Res2c: 0,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Increases ship cargo space from 10 units to 100 units!"
  },
  cargoMk3: {
    prev: ["cargoMk2"],
    next: [],
    title: "Cargo Bay Mk3",
    bought: false,
    toCraft: true,
    price: 2000,
    res: {
      Res1a: 30,
      Res1b: 30,
      Res1c: 30,
      Res2a: 3.3,
      Res2b: 3.3,
      Res2c: 3.3,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Increases ship cargo space from 100 units to 1000 units!"
  },
  droneBayMk1: {
    prev: [],
    next: ["droneBayMk2"],
    bought: true
  },
  droneBayMk2: {
    prev: ["cargoMk1", "droneBayMk1"],
    next: ["droneBayMk3"],
    title: "Drone Bay Mk2",
    bought: false,
    toCraft: true,
    price: 250,
    res: {
      Res1a: 30,
      Res1b: 30,
      Res1c: 30,
      Res2a: 1,
      Res2b: 1,
      Res2c: 1,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Increases the number of drones transportable to new planets from 5 to 20!"
  },
  droneBayMk3: {
    prev: ["cargoMk2", "droneBayMk2"],
    next: [],
    title: "Drone Bay Mk3",
    bought: false,
    toCraft: true,
    price: 4000,
    res: {
      Res1a: 300,
      Res1b: 300,
      Res1c: 300,
      Res2a: 30,
      Res2b: 30,
      Res2c: 30,
      Res3a: 0.05,
      Res3b: 0.05,
      Res3c: 0.05,
    },
    desc: "Increases the number of drones transportable to new planets from 20 to 50!"
  },
  thrustersMk1: {
    prev: [],
    next: ["thrustersMk2"],
    bought: true
  },
  thrustersMk2: {
    prev: ["thrustersMk1"],
    next: ["thrustersMk3"],
    title: "Thrusters Mk2",
    bought: false,
    toCraft: true,
    price: 350,
    res: {
      Res1a: 33,
      Res1b: 33,
      Res1c: 33,
      Res2a: 0.3,
      Res2b: 0.3,
      Res2c: 0.3,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0,
    },
    desc: "Cuts travel times in half!"
  },
  thrustersMk3: {
    prev: ["thrustersMk2"],
    next: [],
    title: "Thrusters Mk3",
    bought: false,
    toCraft: true,
    price: 2000,
    res: {
      Res1a: 210,
      Res1b: 210,
      Res1c: 210,
      Res2a: 21,
      Res2b: 21,
      Res2c: 21,
      Res3a: 0.21,
      Res3b: 0.21,
      Res3c: 0.21
    },
    desc: "Cuts travel times in half, again!"
  },
  antennaMk1: {
    prev: [],
    next: ["antennaMk2"],
    bought: true
  },
  antennaMk2: {
    prev: ["antennaMk1"],
    next: ["antennaMk3"],
    title: "Antenna Mk2",
    bought: false,
    toCraft: true,
    price: 1000,
    res: {
      Res1a: 1,
      Res1b: 1,
      Res1c: 1,
      Res2a: 1,
      Res2b: 1,
      Res2c: 1,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "With this antenna, the ship will be able to scan 2 planets to go to!"
  },
  antennaMk3: {
    prev: ["antennaMk2"],
    next: [],
    title: "Antenna Mk3",
    bought: false,
    toCraft: true,
    price: 5000,
    res: {
      Res1a: 1,
      Res1b: 1,
      Res1c: 1,
      Res2a: 1,
      Res2b: 1,
      Res2c: 1,
      Res3a: 1,
      Res3b: 1,
      Res3c: 1
    },
    desc: "With this antenna, the ship will be able to scan 5 planets to go to!"
  }
}

var research = {
  engineeredDroneMk2: {
    prev: [],
    next: ["engineeredDroneMk3"],
    title: "Engineered Drones Mk2",
    bought: false,
    toCraft: false,
    RP: 1060,
    desc: "Drones Mk2 doesn't require Mk1 drone anymore to be crafted. And the cost of making the Mk1 drone is now based on the quantity of Mk1 drone only (instead of Mk1 + Mk2)"
  },
  engineeredDroneMk3: {
    prev: ["engineeredDroneMk2"],
    next: [],
    title: "Engineered Drones Mk3",
    bought: false,
    toCraft: false,
    RP: 14304,
    desc: "Drones Mk3 doesn't require Mk2 drone anymore to be crafted. And the cost of making the Mk2 drone is now based on the quantity of Mk2 drone only (instead of Mk2 + Mk3)"
  },
  planetAnalyzer: {
    prev: [],
    next: ["massReducer"],
    title: "Planet Analyzer",
    bought: false,
    toCraft: true,
    RP: 530,
    res: {
      Res1a: 30,
      Res1b: 30,
      Res1c: 30,
      Res2a: 3,
      Res2b: 3,
      Res2c: 3,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Provides the composition of the planets scanned by the ship."
  },
  converterMk1: {
    prev: [],
    next: ["massReducer", "converterMk2"],
    title: "Resource Converter Mk1",
    bought: false,
    toCraft: true,
    RP: 530,
    res: {
      Res1a: 30,
      Res1b: 30,
      Res1c: 30,
      Res2a: 0,
      Res2b: 0,
      Res2c: 0,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "A machine capable of rearranging the atoms that make up matter."
  },
  converterMk2: {
    prev: ["converterMk1"],
    next: ["converterMk3"],
    title: "Resource Converter Mk2",
    bought: false,
    toCraft: true,
    RP: 3180,
    res: {
      Res1a: 0,
      Res1b: 0,
      Res1c: 0,
      Res2a: 3,
      Res2b: 3,
      Res2c: 3,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Improves your resource converter by allowing cross tier conversion. Adds one converter."
  },
  converterMk3: {
    prev: ["converterMk2"],
    next: [],
    title: "Resource Converter Mk3",
    bought: false,
    toCraft: true,
    RP: 4770,
    res: {
      Res1a: 0,
      Res1b: 0,
      Res1c: 0,
      Res2a: 0,
      Res2b: 0,
      Res2c: 0,
      Res3a: 0.3,
      Res3b: 0.3,
      Res3c: 0.3
    },
    desc: "Improves your conversion ratios. (Not Implemented)"
  },
  massReducer: {
    prev: ["planetAnalyzer", "converterMk1"],
    next: [],
    title: "Mass Reducer",
    bought: false,
    toCraft: false,
    RP: 530,
    desc: "Reduces the weight of materials in the cargo bay, thereby reducing transport costs."
  },
  autonomousDrone: {
    prev: [],
    next: ["miningAI"],
    title: "Autonomous Drones",
    bought: false,
    toCraft: false,
    RP: 530,
    desc: "Drones are assigned automatically."
  },
  miningAI: {
    prev: ["tractorBeam", "autonomousDrone"],
    next: ["tradingAI", "spatialDrillingLaser"],
    title: "Mining AI",
    bought: false,
    toCraft: false,
    RP: 530,
    desc: "Allows the ship and drones to mine other planets when offline."
  },
  tradingAI: {
    prev: ["miningAI"],
    next: [],
    title: "Trading AI",
    bought: false,
    toCraft: false,
    RP: 1060,
    desc: "Allows the ship to sell resources mined on other planets when offline."
  },
  spatialDrillingLaser: {
    prev: ["miningAI"],
    next: ["teleporter", "autoPrestige"],
    title: "Spatial Drilling Laser",
    bought: false,
    toCraft: true,
    RP: 14304,
    res: {
      Res1a: 147,
      Res1b: 147,
      Res1c: 147,
      Res2a: 21,
      Res2b: 21,
      Res2c: 21,
      Res3a: 3,
      Res3b: 3,
      Res3c: 3
    },
    desc: "With this laser, the ship can mine from orbit at a high efficiency level."
  },
  teleporter: {
    prev: ["spatialDrillingLaser"],
    next: [],
    title: "Teleporter",
    bought: false,
    toCraft: true,
    RP: 28608,
    res: {
      Res1a: 300,
      Res1b: 300,
      Res1c: 300,
      Res2a: 30,
      Res2b: 30,
      Res2c: 30,
      Res3a: 3,
      Res3b: 3,
      Res3c: 3
    },
    desc: "Nullifies all travel times."
  },
  autoPrestige: {
    prev: ["spatialDrillingLaser"],
    next: [],
    title: "Auto Prestige (Not Implemented)",
    bought: false,
    toCraft: false,
    RP: 1000000000000,
    desc: "Automates trips to new planets.(Not Implemented)"
  }
}

var conversions = {
  c1: {
    input: "",
    inputValue: 0,
    output: "",
    outputValue: 0,
    auto: false
  },
  c2: {
    input: "",
    inputValue: 0,
    output: "",
    outputValue: 0,
    auto: false
  },
  c3: {
    input: "",
    inputValue: 0,
    output: "",
    outputValue: 0,
    auto: false
  },
}

window.onload = function() {
  chooseRegion("map", "map");
  if (savegame != null) {
    Object.entries(gamedata).forEach(([key, value]) => {
      gamedata[key] = savegame[key];
    });
    Object.entries(saveBP).forEach(([key, value]) => {
      blueprints[key] = saveBP[key];
    });
    Object.entries(research).forEach(([key, value]) => {
      research[key] = saveResearch[key];
    });
    Object.entries(conversions).forEach(([key, value]) => {
      conversions[key] = saveConversions[key];
    });
    for (let i = 1; i <= 3; i++) {
      document.getElementById('c' + i + 'Input').value = conversions['c' + i].input;
      document.getElementById('c' + i + 'InputValue').value = conversions['c' + i].inputValue;
      cOutput(i);
      document.getElementById('c' + i + 'Output').value = conversions['c' + i].output;
      document.getElementById('c' + i + 'Auto').checked = conversions['c' + i].auto;
    }
    offlineProgress();
    if (gamedata.prestigeTimeLeft > 0) {
      travelling();
    } else {
      document.getElementById('prestigeAnimation').style.display = 'none';
      document.getElementById('loading').style.display = 'none';
      document.getElementById('main').style.display = 'grid';
    }
    if (gamedata.timeLeft > 0) {
      selling();
    }
  } else if (prestige != null) {
    Object.entries(prestige).forEach(([key, value]) => {
      gamedata[key] = prestige[key];
    });
    if (gamedata.prestigeNb === 1) {
      step6()
    }
    gamedata.prestigeTimeLeft = gamedata.prestigeTime;
    travelling();
    localStorage.clear();
    init();
  } else if (gamedata.newgame === true) {
    document.getElementById('loading').style.display = 'flex';
    document.getElementById('prestigeAnimation').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    setTimeout(
      function() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('prestigeAnimation').style.display = 'none';
        document.getElementById('main').style.display = 'grid';
      }, 5000);
    init();
    tuto();
  }
  tab("shop");
  prestige = {
    res: {}
  };

  document.getElementById("outermaterial").innerHTML = gamedata.outermaterial.name;
  document.getElementById("innermaterial").innerHTML = gamedata.innermaterial.name;
  document.getElementById("corematerial").innerHTML = gamedata.corematerial.name;

  Object.entries(blueprints).forEach(([key, value]) => {
    if (gamedata.tech[key] === 1) {
      blueprints[key].bought = true;
    }
  });
  Object.entries(research).forEach(([key, value]) => {
    if (gamedata.tech[key] === 1) {
      research[key].bought = true;
    }
  });

  Object.entries(gamedata.resRP).forEach(([key, value]) => {
    let el = document.getElementById(key + "RP");
    el.value = format(gamedata.resRP[key], "standard");
    update(key + "RP", format(gamedata.resRP[key], "standard"));
  });

  Object.entries(gamedata.rare).forEach(([key, value]) => {
    if (gamedata.rare[key] === false) {
      document.getElementById(key).parentNode.style.display = "none";
    } else {
      document.getElementById(key).parentNode.style.display = "flex";
    }
  });

  Object.entries(gamedata.droneAssign).forEach(([key, value]) => {
    update(key, format(gamedata.droneAssign[key], "round"));
    update("local_" + key, format(gamedata.droneAssign[key], "round"));
  });

  if (gamedata.tech.researchLab === 1) {
    researchLab();
  } else {
    document.getElementById("labButton").style.display = "none";
  }
  document.getElementById("droneMk1List").style.display = "none";
  document.getElementById("droneMk2List").style.display = "none";
  document.getElementById("droneMk3List").style.display = "none";
  if (gamedata.tech.droneMk1 === 1) {
    document.getElementById("workBenchButton").style.display = "block";
    document.getElementById("droneMk1List").style.display = "flex";
  }
  if (gamedata.tech.droneMk2 === 1) {
    document.getElementById("droneMk2List").style.display = "flex";
  }
  if (gamedata.tech.droneMk3 === 1) {
    document.getElementById("droneMk3List").style.display = "flex";
  }
  if (gamedata.tech.converterMk1 === 1) {
    document.getElementById("converterButton").style.display = "block";
  } else {
    document.getElementById("converterButton").style.display = "none";
  }
  //outputCalc(1);
  //outputCalc(2);
  //outputCalc(3);

  setDim();
  setShop();
  setWorkbench();
  save();
}

var grids = {
  grid1NW: 0,
  grid2NW: 0,
  grid1N: 0,
  grid2N: 0,
  grid1NE: 0,
  grid2NE: 0,
  grid1SW: 0,
  grid2SW: 0,
  grid1S: 0,
  grid2S: 0,
  grid1SE: 0,
  grid2SE: 0,
  grid1W: 0,
  grid2W: 0,
  grid1E: 0,
  grid2E: 0,
  grid2core: 0,
  grid3core: 0
};

var h = 0;
var l = 0;
var cornerBorder = [];
var flatBorder = [];
var flatCoreBorder = [];
var c2leftBorder = [];
var coreCoord = [];
var coreBorder = [];
var coreExtBorder = [];
var coreIntBorder = [];

function borders() {
  for (let y = 2 / 3 * h * h - (h / 3 - 1); y <= 2 / 3 * h * h; y++) {
    cornerBorder.push(y);
  }
  for (let y = 1; y <= h / 3; y++) {
    let n = h * h * 2 / 3 + y * (2 * h / 3);
    cornerBorder.push(n);
  }
  for (let y = 2 / 3 * h * l - l + 1; y <= 2 / 3 * h * l; y++) {
    flatBorder.push(y);
  }
  for (let y = 1; y <= 1 / 3 * h; y++) {
    let n = 1 / 3 * h * (y - 1) + 1;
    c2leftBorder.push(n);
  }
  for (let y = 0; y < l / 2; y++) {
    for (let z = 1; z <= l / 2; z++) {
      let n = l * l / 4 + l / 4 + z + y * l;
      coreCoord.push(n);
    }
  }
  for (let y = 1; y <= l; y++) {
    coreExtBorder.push(y);
  }
  for (let y = 0; y < l; y++) {
    let n = l * y + 1;
    if (!coreExtBorder.includes(n)) {
      coreExtBorder.push(n);
    }
  }
  for (let y = 1; y <= l; y++) {
    let n = l * y;
    if (!coreExtBorder.includes(n)) {
      coreExtBorder.push(n);
    }
  }
  for (let y = l * l - l; y <= l * l; y++) {
    coreExtBorder.push(y);
  }
  for (let y = 0; y < coreCoord.length; y++) {
    let n1 = coreCoord[y] - 1;
    let n2 = coreCoord[y] + 1;
    let n3 = coreCoord[y] - l;
    let n4 = coreCoord[y] + l;
    if (!coreCoord.includes(n1)) {
      coreIntBorder.push(n1);
      coreBorder.push(coreCoord[y]);
    }
    if (!coreCoord.includes(n2)) {
      coreIntBorder.push(n2);
      coreBorder.push(coreCoord[y]);
    }
    if (!coreCoord.includes(n3)) {
      coreIntBorder.push(n3);
      coreBorder.push(coreCoord[y]);
    }
    if (!coreCoord.includes(n4)) {
      coreIntBorder.push(n4);
      coreBorder.push(coreCoord[y]);
    }
  }
  for (let y = (l * (h / 3 - 1) + 1); y <= l * h / 3; y++) {
    flatCoreBorder.push(y);
  }
}

function offlineProgress() {
  var time = Math.round((Date.now() - gamedata.lasttick) / 1000);
  var resCycle = gamedata.prestigeTime + (gamedata.shipMaxCargo / (gamedata.yield1 * gamedata.drone1 + gamedata.yield2 * gamedata.drone2 + gamedata.yield3 * gamedata.drone3));
  if (gamedata.tech.miningAI === 0 && gamedata.tech.tradingAI === 0) {
    if (gamedata.d1left + gamedata.d2left + gamedata.d3left <= gamedata.drone1 + gamedata.drone2 + gamedata.drone3) {
      for (let i = 0; i < time; i++) {
        droneMining();
      }
    }
  } else if (gamedata.tech.miningAI === 1 && gamedata.tech.tradingAI === 0) {
    for (let i = 0; i < Math.floor(time / resCycle); i++) {
      Math.floor(Math.random() * 3);
    }
  }
  if (conversions.c1.auto === true){
    for (let i = 0; i < time; i++) {
      conversion(1, false);
    }
    
  }
  if (conversions.c2.auto === true){
    for (let i = 0; i < time; i++) {
      conversion(2, false);
    }
  }
  if (conversions.c3.auto === true){
    for (let i = 0; i < time; i++) {
      conversion(3, false);
    }
  }
  gamedata.timeLeft = gamedata.timeLeft - time;
}

function travelling() {
  document.getElementById('prestigeAnimation').style.display = 'flex';
  document.getElementById('loading').style.display = 'none';
  document.getElementById('main').style.display = 'none';
  var x = setInterval(function() {
    gamedata.prestigeTimeLeft -= 0.1;
    if (gamedata.prestigeTimeLeft < 0) {
      document.getElementById('prestigeAnimation').style.display = 'none';
      document.getElementById('loading').style.display = 'none';
      document.getElementById('main').style.display = 'grid';
      clearInterval(x);
    }
    save();
  }, 100)
}

function init() {
  if (gamedata.outermaterial.name === "") {
    let x = Math.floor(Math.random() * 3);
    gamedata.outermaterial.name = gamedata.possibleOuterMaterial[x];
    gamedata.outermaterial.ref = "Res1" + String.fromCharCode(97 + x);
    x = Math.floor(Math.random() * 3);
    gamedata.innermaterial.name = gamedata.possibleInnerMaterial[x];
    gamedata.innermaterial.ref = "Res2" + String.fromCharCode(97 + x);
    x = Math.floor(Math.random() * 3);
    gamedata.corematerial.name = gamedata.possibleCoreMaterial[x];
    gamedata.corematerial.ref = "Res3" + String.fromCharCode(97 + x);
  }

  if (gamedata.newgame === true) {
    gamedata.planetSize = 10;
  }
  h = 3 * gamedata.planetSize;
  l = h + h / 3;
  planetGenerator();

  Object.entries(gamedata.notMined).forEach(([key, value]) => {
    let x = 0;
    if (key.includes("1") && key.length === 3) {
      x = l * 2 * h / 3;
    } else if (key.includes("2") && key.length === 3) {
      x = l * h / 3;
    } else if (key.includes("1") && key.length === 4) {
      x = h * h - h / 3 * h / 3;
    } else if (key.includes("2") && key.length === 4) {
      x = h / 3 * h / 3;
    } else if (key.includes("2") && key.length === 6) {
      x = l * l;
    } else if (key.includes("3") && key.length === 6) {
      x = l / 2 * l / 2;
    }
    for (let y = 1; y <= x; ++y) {
      gamedata.notMined[key].push(y);
    }
  });
  gamedata.d1left = gamedata.drone1;
  gamedata.d2left = gamedata.drone2;
  gamedata.d3left = gamedata.drone3;

  Object.entries(gamedata.resValue).forEach(([key, value]) => {
    gamedata.resValue[key] = randn_bm(0, 1, 1) * (((gamedata.baseValue[key] * 0.2) + gamedata.baseValue[key]) - gamedata.baseValue[key] * 0.8) + gamedata.baseValue[key] * 0.8;
  });
  gamedata.newgame = false;
  save();
}

function planetGenerator() {
  let x = 0;
  if (gamedata.tech.antennaMk3 === 1) {
    x = 5;
  } else if (gamedata.tech.antennaMk2 === 1) {
    x = 2;
  } else {
    x = 1;
  }
  for (let i = 1; i <= x; i++) {
    let n = Math.floor(Math.random() * 3);
    gamedata["planet" + i].c1.name = gamedata.possibleOuterMaterial[n];
    gamedata["planet" + i].c1.ref = "Res1" + String.fromCharCode(97 + n);
    n = Math.floor(Math.random() * 3);
    gamedata["planet" + i].c2.name = gamedata.possibleInnerMaterial[n];
    gamedata["planet" + i].c2.ref = "Res2" + String.fromCharCode(97 + n);
    n = Math.floor(Math.random() * 3);
    gamedata["planet" + i].c3.name = gamedata.possibleCoreMaterial[n];
    gamedata["planet" + i].c3.ref = "Res3" + String.fromCharCode(97 + n);
    gamedata["planet" + i].size = Math.round(randn_bm(1, 20, 1));
  }
}

function reset() {
  if (confirm("This will erase any saved game. Are you sure?")) {
    clearInterval(saveGameLoop);
    window.localStorage.clear();
    document.location.reload(true);
    gamedata.newgame = true;
    document.getElementById("logs").value = ">";
  } else {
    document.getElementById("logs").value = document.getElementById("logs").value + "\n> Reset aborted.";
    glow(document.getElementById("logs"));
  }
}

function save() {
  gamedata.lasttick = Date.now();
  localStorage.setItem("Save", JSON.stringify(gamedata));
  localStorage.setItem("BPSave", JSON.stringify(blueprints));
  localStorage.setItem("RSave", JSON.stringify(research));
  localStorage.setItem("CSave", JSON.stringify(conversions));
}

const waitUntil = (condition) => {
  return new Promise((resolve) => {
    let interval = setInterval(() => {
      if (!condition()) {
        return
      }

      clearInterval(interval)
      resolve()
    }, 100)
  })
}

var saveGameLoop = window.setInterval(function() {
  save();
}, 15000);

var mainGameLoop = window.setInterval(function() {
  droneMining();
  
  if (c1Auto.checked){
    conversion(1, false);
  }
  if (c2Auto.checked){
    conversion(2, false);
  }
  if (c3Auto.checked){
    conversion(3, false);
  }

  if (document.getElementById("labCheckbox").checked) {
    changeRP();
  }

  gamedata.lasttick = Date.now();
}, 1000);

var refreshLoop = window.setInterval(function() {
  Object.entries(gamedata.res).forEach(([key, value]) => {
    update(key, format(gamedata.res[key], "standard"));
  });
  // if (gamedata.tech.engineeredDroneMk2 === 1){
  //   gamedata.droneMk2.d1 = 0;
  // }
  // if (gamedata.tech.engineeredDroneMk3 === 1){
  //   gamedata.droneMk3.d2 = 0;
  // }
  update("money", format(gamedata.money, "currency"));
  update("RP", format(gamedata.RP, "standard"));
  update("drone1", format(gamedata.drone1, "round"));
  update("d1left", format(gamedata.d1left, "round"));
  update("drone2", format(gamedata.drone2, "round"));
  update("d2left", format(gamedata.d2left, "round"));
  update("drone3", format(gamedata.drone3, "round"));
  update("d3left", format(gamedata.d3left, "round"));
  Object.entries(gamedata.shipStock).forEach(([key, value]) => {
    update((key + "Ship"), format(gamedata.shipStock[key], "standard"));
  });

  Object.entries(blueprints).forEach(([key, value]) => {
    if (document.getElementById(key) != null) {
      if (gamedata.money >= blueprints[key].price / 2 || blueprints[key].price <= 100 || typeof blueprints[key].price == "undefined") {
        document.getElementById(key).style.display = "flex"
      }
    }
  });

  if (gamedata.shipCapacity <= 0) {
    document.getElementById("cargoFull").style.display = "grid";
  } else {
    document.getElementById("cargoFull").style.display = "none";
  }

}, 10);

var errLog;
function log(msg, keep) {
  var logBox = document.getElementById("logs");
  if (errLog > 1){logBox.value = logBox.value.slice(0, logBox.value.length-4-String(errLog).length)}
  if (keep === true) {
    if (logBox.value.slice(logBox.value.length-msg.length) != msg){
      logBox.value = logBox.value + "\n> " + msg;
      errLog = 1;
    } else {
      errLog += 1;
      logBox.value = logBox.value + " (x" + errLog + ")";
    }
  } else {
    logBox.value = "> " + msg;
  }
  glow(logBox);
  logBox.scrollTo(0, logBox.scrollHeight);
}

var inTuto = false;

function tuto() {
  var startDelay = 1000;
  var interval = 3000;
  setTimeout(function() {
    inTuto = true;
    log("Good morning Miner! Please follow this quick guide to start your journey:", false);
    setTimeout(function() {
      log("First, click on an external region of the planet.", true);
      blink(document.getElementById("planet"));
      for (let i = 0; i < document.getElementsByClassName("region").length; i++) {
        if (i != 4){
          document.getElementsByClassName("region")[i].addEventListener("click", step1);
        }
      }
    }, interval);
  }, startDelay);
}

function step1() {
  log("Great! Now click the surface (the frontier of the green area and the night sky)", false);
  document.getElementById("planet").classList.remove("glow");
  blink(document.getElementsByClassName("grid")[0].firstChild);
  for (let i = 0; i < document.getElementsByClassName("region").length; i++) {
    if (i != 4){
      document.getElementsByClassName("region")[i].removeEventListener("click", step1)
    }
  }
  document.getElementsByClassName("grid")[0].firstChild.addEventListener("click", step2);
}
async function step2() {
  document.getElementById("planet").classList.remove("blink");
  log("You now have mined your first ore. Keep mining until you've reach 10 units of this ore.", false);
  document.getElementsByClassName("grid")[0].firstChild.removeEventListener("click", step2);
  await waitUntil(() => gamedata.res[gamedata.outermaterial.ref] >= 5)
  log("Quite boring huh? Don't worry, this won't last long.", false);
  await waitUntil(() => gamedata.res[gamedata.outermaterial.ref] >= 10)
  log("Good job! Now leave this region using the Back button, and click on your ship in orbit.", false);
  glow(document.getElementById("ship"));
  document.getElementById("ship").addEventListener("click", step3);
}
async function step3() {
  document.getElementById("ship").classList.remove("glow");
  document.getElementById("logarea").style.zIndex = "9999";
  glow(document.getElementById("resShip"));
  log("Now set the amount of the collected ore to 10, in the storage part of the ship menu. Then click on 'SELL', this will send your ship to sell those resources. You'll need $8 to go further in the tutorial.", false);
  await waitUntil(() => gamedata.money > 8)
  log("Perfect! In the Shop menu, you can now buy the Mining Drone Mk1 Blueprint. Once bought, go to the Workbench tab to see resources required to craft it.", false);
  glow(document.getElementById("shop"));
  document.getElementById("ship").removeEventListener("click", step3);
  document.getElementById("workBenchButton").addEventListener("click", step4);
}
async function step4() {
  document.getElementById("shop").classList.remove("glow");
  document.getElementById("workBenchButton").removeEventListener("click", step4);
  if (gamedata.res[gamedata.outermaterial.ref] >= 2){
    log("As you can see, you need three differents resources. However, you will only find " + gamedata.outermaterial.name + " on this planet. As you already own the required amount of " + gamedata.outermaterial.name +", go back to the ship menu, load your resources into the storage, and go to another planet by clicking on the 'Leave this planet' button. If your ship isn't back yet, you can mine more " + gamedata.outermaterial.name + ". Ship speed depends on thrusters level. Moreover, you can't load more than 10 units of ore in your ship storage for now. This depends on Cargo bay level.", false);
  } else {
    log("As you can see, you need three differents resources. However, you will only find " + gamedata.outermaterial.name + " on this planet. So go back to a region of your choice and mine until you get the required amount of this resource.", false);
    await waitUntil(() => gamedata.res[gamedata.outermaterial.ref] >= 2)
    log("Good. Now go back to the ship menu, load your resources into the storage, and go to another planet by clicking on the 'Leave this planet' button. If your ship isn't back yet, you can mine more " + gamedata.outermaterial.name + ". Ship speed depends on thrusters level. Moreover, you can't load more than 10 units of ore in your ship storage for now. This depends on Cargo bay level.", false);
  }
  document.getElementById("prestige").addEventListener("click", step5);
}

function step5() {
  log("You are here in a menu where you can select the planet you want to go to. Choice is limited here because you need more tech and better equipment to scan more planets and see their compositions. If you don't want to blindly choose, you can buy coordinates of specific planets in the shop. Be aware that the cost of travels increases each time you use it.", false);
  document.getElementById("prestige").removeEventListener("click", step5);
}

function step6() {
  log("You are now on a new planet! Check its composition! If the outer layer material is different from the previous one go mine the amount required for the drone Mk1, and then find a planet with the last required ore. Remember to load your ship before leaving! However, if the material is the same as the one you previously mined, bad luck here. Travel to another planet.\nYou now have the basics of the game, keep going and mine the whole galaxy! For the Universal Mining Corporation!", false);
  document.getElementById("logarea").style.zIndex = "1";
  inTuto = false;
}

function update(id, content) {
  document.getElementById(id).innerHTML = content;
}

function setDronePrice(lvl) {
  if (lvl === 1 || lvl === 0) {
    Object.entries(gamedata.droneMk1).forEach(([key, value]) => {
      if (gamedata.tech.engineeredDroneMk2 === 0) {
        gamedata.droneMk1[key] = gamedata.d1base * Math.pow(gamedata.d1x, gamedata.drone1 + gamedata.drone2 + gamedata.drone3);
      } else {
        gamedata.droneMk1[key] = gamedata.d1base * Math.pow(gamedata.d1x, gamedata.drone1);
      }
      if (document.getElementById("droneMk1" + key + "Cost") != null) {
        update("droneMk1" + key + "Cost", format(gamedata.droneMk1[key], "standard"));
      }
    });
    document.getElementById("droneMk1List").style.display = "flex";
  }
  if (lvl === 2 || lvl === 0) {
    Object.entries(gamedata.droneMk2).forEach(([key, value]) => {
      if (gamedata.tech.engineeredDroneMk3 === 0) {
        if (key.includes("d")){
          if (gamedata.tech.engineeredDroneMk2 === 0){
            gamedata.droneMk2[key] = 1;
          } else {
            gamedata.droneMk2[key] = 0;
          }
        } else {
          gamedata.droneMk2[key] = gamedata.d2base * Math.pow(gamedata.d2x, gamedata.drone2 + gamedata.drone3);
        }
      } else {
        if (key.includes("d")){
          if (gamedata.tech.engineeredDroneMk2 === 0){
            gamedata.droneMk2[key] = 1;
          } else {
            gamedata.droneMk2[key] = 0;
          }
        } else {
          gamedata.droneMk2[key] = gamedata.d2base * Math.pow(gamedata.d2x, gamedata.drone2);
        }
      }
      if (document.getElementById("droneMk2" + key + "Cost") != null) {
        update("droneMk2" + key + "Cost", format(gamedata.droneMk2[key], "standard"));
      }
    });
    // if (gamedata.tech.engineeredDroneMk2 === 0) {
    //   setDronePrice(1);
    // }
    document.getElementById("droneMk2List").style.display = "flex";
  }
  if (lvl === 3 || lvl === 0) {
    Object.entries(gamedata.droneMk3).forEach(([key, value]) => {
      if (key.includes("d")){
        if (gamedata.tech.engineeredDroneMk3 === 0){
          gamedata.droneMk3[key] = 1;
        } else {
          gamedata.droneMk3[key] = 0;
        }
      } else {
        gamedata.droneMk3[key] = gamedata.d3base * Math.pow(gamedata.d3x, gamedata.drone3);
      }
      if (document.getElementById("droneMk3" + key + "Cost") != null) {
        update("droneMk3" + key + "Cost", format(gamedata.droneMk3[key], "standard"));
      }
    });
    // if (gamedata.tech.engineeredDroneMk2 === 0) {
    //   setDronePrice(1);
    // }
    // if (gamedata.tech.engineeredDroneMk3 === 0) {
    //   setDronePrice(2);
    // }
    document.getElementById("droneMk3List").style.display = "flex";
  }
}

function setDim() {
  h = 3 * gamedata.planetSize;
  l = h + h / 3;
  borders();
}

function setShop() {
  createShopItem("planetCoordinates");
  Object.entries(blueprints).forEach(([key, value]) => {
    if ((blueprints[key].toCraft === false || gamedata.BP[key] === 0) && gamedata.tech[key] === 0) {
      if (blueprints[key].prev.length === 0) {
        createShopItem(key);
      } else {
        let check = 0;
        for (let i = 0; i < blueprints[key].prev.length; i++) {
          if (gamedata.BP[blueprints[key].prev[i]] === 1 && gamedata.tech[blueprints[key].prev[i]] === 1) {
            check += 1;
          }
        }
        if (check === blueprints[key].prev.length) {
          createShopItem(key);
        }
      }
    }
  });
}

function createShopItem(BP) {
  let buyable;
  let buyable_text;
  let btn;
  let tooltip;
  let buyable_title;
  let buyable_title_text;
  let buyable_title_price;
  let cost;
  let amount;
  if (BP === "planetCoordinates" && document.getElementById(BP) === null) {
    buyable = document.createElement("div");
    Object.assign(buyable, {
      className: "buyable",
      id: BP
    });
    buyable_text = document.createElement("div");
    Object.assign(buyable_text, {
      className: "buyable_text"
    });
    buyable.appendChild(buyable_text);
    btn = document.createElement("button");
    Object.assign(btn, {
      className: "buyable_button",
      innerText: "Set",
      onclick: function() {
        coordinatesPrice();
        document.getElementById("coordinatesMenu").style.display = "flex";
      }
    });
    buyable.appendChild(btn);
    tooltip = document.createElement("span");
    Object.assign(tooltip, {
      className: "tooltip",
      innerText: "Buy coordinates of a planet with specific characteristics.",
    });
    buyable.appendChild(tooltip);
    buyable_title = document.createElement("div");
    Object.assign(buyable_title, {
      className: "buyable_title"
    });
    buyable_text.appendChild(buyable_title);
    buyable_title_text = document.createElement("span");
    Object.assign(buyable_title_text, {
      className: "buyable_title_text",
      innerText: "Planet Coordinates"
    });
    buyable_title_price = document.createElement("div");
    Object.assign(buyable_title_price, {
      className: "buyable_title_price"
    });
    buyable_title.appendChild(buyable_title_text);
    buyable_title.appendChild(buyable_title_price);
    cost = document.createElement("div");
    buyable_title_price.appendChild(cost);
    buyable_title_text = document.createElement("span");
    Object.assign(cost, {
      className: "price",
      innerText: "Cost :"
    });
    amount = document.createElement("span");
    cost.appendChild(amount);
    Object.assign(amount, {
      innerText: "variable"
    });
    document.getElementById("shop").appendChild(buyable);
  } else if (document.getElementById(BP) === null) {
    var nextItem = blueprints[BP];
    buyable = document.createElement("div");
    Object.assign(buyable, {
      className: "buyable",
      id: BP
    });
    document.getElementById("shop").appendChild(buyable);
    buyable_text = document.createElement("div");
    Object.assign(buyable_text, {
      className: "buyable_text"
    });
    buyable.appendChild(buyable_text);
    btn = document.createElement("button");
    Object.assign(btn, {
      className: "buyable_button",
      innerText: "Buy",
      onclick: function() {
        buyShopItem(nextItem, BP);
      }
    });
    buyable.appendChild(btn);
    tooltip = document.createElement("span");
    Object.assign(tooltip, {
      className: "tooltip",
      innerText: nextItem.desc,
    });
    buyable.appendChild(tooltip);
    buyable_title = document.createElement("div");
    Object.assign(buyable_title, {
      className: "buyable_title",
    });
    buyable_text.appendChild(buyable_title);
    buyable_title_text = document.createElement("span");
    Object.assign(buyable_title_text, {
      className: "buyable_title_text",
      innerText: nextItem.title
    });
    buyable_title_price = document.createElement("div");
    Object.assign(buyable_title_price, {
      className: "buyable_title_price",
    });
    buyable_title.appendChild(buyable_title_text);
    buyable_title.appendChild(buyable_title_price);
    cost = document.createElement("div");
    buyable_title_price.appendChild(cost);
    Object.assign(cost, {
      className: "price",
      innerText: "Cost :"
    });
    amount = document.createElement("span");
    cost.appendChild(amount);
    Object.assign(amount, {
      innerText: format(nextItem.price, "currency")
    });
    if (nextItem.toCraft === true) {
      buyable.style.background = "linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 0, 1)), url('https://blueprintmarketing.fr/wp-content/uploads/2020/11/Blueprint-Marketing-Plan.jpg')";
      buyable.style["background-size"] = "cover";
      buyable_title_text.innerText = nextItem.title + " (BP)";
    }
    document.getElementById(BP).style.display = "none";
  }
}

function buyShopItem(item, tech) {
  if (gamedata.money >= item.price) {
    item.bought = true;
    gamedata.BP[tech] = 1;
    document.getElementById("shop").removeChild(document.getElementById(tech));
    if (item.toCraft === true) {
      glow(document.getElementById("workBenchButton"));
      createWorkbenchItem(item, tech, "shop");
      gamedata.money -= item.price;
      
    } else {
      gamedata.tech[tech] = 1;
      gamedata.money -= item.price;
      try {
        window[tech]();
      } catch (err) {}
    }
    save();
  } else {
    log("Not enough money.", true);
  }
  setShop();
}

function coordinatesPrice() {
  let c1 = document.getElementById("outermaterialSelector");
  let c2 = document.getElementById("innermaterialSelector");
  let c3 = document.getElementById("corematerialSelector");
  let size = document.getElementById("sizeSelector");
  let cost = 0;
  if (c1.value != "Res1any") {
    cost += Math.pow(1.2, gamedata.coordinatesNb)
  }
  if (c2.value != "Res2any") {
    cost += Math.pow(1.2, gamedata.coordinatesNb) * 10
  }
  if (c3.value != "Res3any") {
    cost += Math.pow(1.2, gamedata.coordinatesNb) * 100
  }
  if (size.value != "sizeany") {
    cost += Math.pow(1.2, gamedata.coordinatesNb) * Math.abs((parseInt(size.selectedIndex, 10) - 10))
  }
  if (cost > 0) {
    update("coordinatesCost", format(cost, "currency"));
  } else {
    cost = 0 - cost
    update("coordinatesCost", format(cost, "currency"));
  }
  gamedata.coordinatesPrice = cost;
}

function buyCoord() {
  let c1 = document.getElementById("outermaterialSelector");
  let c2 = document.getElementById("innermaterialSelector");
  let c3 = document.getElementById("corematerialSelector");
  let size = document.getElementById("sizeSelector");
  let x = true;
  if (gamedata.money >= gamedata.coordinatesPrice) {
    if (gamedata.planetShop.size != 0) {
      if (confirm("These new coordinates will overwrite those you already have. Do you want to proceed?")) {
        x = true;
      } else {
        x = false;
      }
    }
    if (x === true) {
      gamedata.money -= gamedata.coordinatesPrice;
      if (!c1.value.includes("any")) {
        gamedata.planetShop.c1.name = c1.options[c1.selectedIndex].text;
        gamedata.planetShop.c1.ref = c1.value;
      } else {
        let n = Math.floor(Math.random() * 3);
        gamedata.planetShop.c1.name = gamedata.possibleOuterMaterial[n];
        gamedata.planetShop.c1.ref = "Res1" + String.fromCharCode(97 + n);
      }
      if (!c2.value.includes("any")) {
        gamedata.planetShop.c2.name = c2.options[c2.selectedIndex].text;
        gamedata.planetShop.c2.ref = c2.value;
      } else {
        let n = Math.floor(Math.random() * 3);
        gamedata.planetShop.c2.name = gamedata.possibleInnerMaterial[n];
        gamedata.planetShop.c2.ref = "Res2" + String.fromCharCode(97 + n);
      }
      if (!c3.value.includes("any")) {
        gamedata.planetShop.c3.name = c3.options[c3.selectedIndex].text;
        gamedata.planetShop.c3.ref = c3.value;
      } else {
        let n = Math.floor(Math.random() * 3);
        gamedata.planetShop.c3.name = gamedata.possibleCoreMaterial[n];
        gamedata.planetShop.c3.ref = "Res3" + String.fromCharCode(97 + n);
      }
      if (!size.value.includes("any")) {
        gamedata.planetShop.size = parseInt(size.selectedIndex, 10);
      } else {
        gamedata.planetShop.size = Math.round(randn_bm(1, 20, 1));
      }
      gamedata.coordinatesNb += 1;
      log("Coordinates bought!", false);
    }
    save();
    chooseRegion('map', 'map');
  } else {
    log("Not enough money.", true);
  }
}

function setWorkbench() {
  while (document.getElementById("workbench").firstChild) {
    document.getElementById("workbench").removeChild(document.getElementById("workbench").firstChild);
  }
  var wtitle = document.getElementById("workbench").appendChild(document.createElement("div"))
  wtitle.className = "menutitle";
  wtitle.innerHTML = "WORKBENCH";
  Object.entries(blueprints).forEach(([key, value]) => {
    if (gamedata.BP[key] === 1 && (gamedata.tech[key] === 0 || key === "droneMk1" || key === "droneMk2" || key === "droneMk3") && document.getElementById(key) == null) {
      if (typeof blueprints[key].price == "undefined"){
        createWorkbenchItem(blueprints[key], key, "lab")
      } else {
        createWorkbenchItem(blueprints[key], key, "shop");
      }
    }
  });
  if (gamedata.tech.droneMk1 === 1) {
    if(document.getElementById("droneMk1") == null){createWorkbenchItem(blueprints.droneMk1, "droneMk1", "shop")};
    setDronePrice(1);
  }
  if (gamedata.tech.droneMk2 === 1) {
    if(document.getElementById("droneMk2") == null){createWorkbenchItem(blueprints.droneMk2, "droneMk2", "shop")};
    setDronePrice(2);
  }
  if (gamedata.tech.droneMk3 === 1) {
    if(document.getElementById("droneMk3") == null){createWorkbenchItem(blueprints.droneMk3, "droneMk3", "shop")};
    setDronePrice(3);
  }

}

function createWorkbenchItem(item, tech, from) {
  var buyable = document.createElement("div");
  buyable.className = "buyable";
  buyable.id = tech;
  document.getElementById("workbench").appendChild(buyable);
  var buyable_text = document.createElement("div");
  buyable_text.className = "buyable_text";
  buyable.appendChild(buyable_text);
  let btn = document.createElement("button");
  btn.innerText = "Craft";
  btn.className = "craft_button";
  if (tech.includes("droneMk1")) {
    Object.entries(gamedata.droneMk1).forEach(([key, value]) => {
      if (gamedata.droneMk1[key] === 0) {
        gamedata.droneMk1[key] = item.res[key];
      }
    });
    btn.addEventListener("click", function() {
      buyDrone1();
    });
  } else if (tech.includes("droneMk2")) {
    Object.entries(gamedata.droneMk2).forEach(([key, value]) => {
      if (gamedata.droneMk2[key] === 0 && !key.includes("d1")) {
        gamedata.droneMk2[key] = item.res[key];
      }
    });
    btn.addEventListener("click", function() {
      buyDrone2();
    });
  } else if (tech.includes("droneMk3")) {
    Object.entries(gamedata.droneMk3).forEach(([key, value]) => {
      if (gamedata.droneMk3[key] === 0 && !key.includes("d2")) {
        gamedata.droneMk3[key] = item.res[key];
      }
    });
    btn.addEventListener("click", function() {
      buyDrone3();
    });
  } else {
    btn.addEventListener("click", function() {
      craftItem(item, tech, from);
    });
  }
  buyable.appendChild(btn);
  var tooltip = document.createElement("span");
  tooltip.className = "tooltip hideable";
  tooltip.innerText = item.desc;
  buyable.appendChild(tooltip);
  // buyable.addEventListener("mouseover", () => {
  //   tooltip.style.display = "block";
  // }, false);
  // buyable.addEventListener("mouseleave", () => {
  //   tooltip.style.display = "none";
  // }, false);
  var buyable_title = document.createElement("div");
  buyable_title.className = "buyable_title";
  buyable_text.appendChild(buyable_title);
  var buyable_title_text = document.createElement("span");
  buyable_title_text.className = "buyable_title_text";
  var buyable_title_price = document.createElement("div");
  buyable_title_price.className = "buyable_title_price";
  buyable_title.appendChild(buyable_title_text);
  buyable_title.appendChild(buyable_title_price);
  buyable_title_text.innerText = item.title;
  var cost = document.createElement("div");
  buyable_title_price.appendChild(cost);
  Object.entries(item.res).forEach(([key, value]) => {
    if (key.includes("d1") && gamedata.tech.engineeredDroneMk2 === 0){
      var res = document.createElement("div");
      res.className = "drone d1";
      buyable_title_price.appendChild(res);
      res.innerText = "Drone Mk1";
      var amount = document.createElement("span");
      amount.id = tech + key + "Cost";
      res.appendChild(amount);
      amount.innerText = value;
    } else if (key.includes("d2") && gamedata.tech.engineeredDroneMk3 === 0) {
      var res = document.createElement("div");
      res.className = "drone d2";
      buyable_title_price.appendChild(res);
      res.innerText = "Drone Mk2";
      var amount = document.createElement("span");
      amount.id = tech + key + "Cost";
      res.appendChild(amount);
      amount.innerText = value;
    } else if (value > 0 && !key.includes("d")) {
      var res = document.createElement("div");
      if (key.includes("Res1")) {
        res.className = "cat1";
      } else if (key.includes("Res2")) {
        res.className = "cat2";
      } else if (key.includes("Res3")){
        res.className = "cat3";
      }
      buyable_title_price.appendChild(res);
      res.innerText = gamedata.resName[key];
      var amount = document.createElement("span");
      amount.id = tech + key + "Cost";
      res.appendChild(amount);
      amount.innerText = value;
    }
  });
}

function craftItem(item, tech, from) {
  let x = true;
  Object.entries(item.res).some(function(key) {
    if (gamedata.res[key[0]] < item.res[key[0]]) {
      x = false;
    }
  });
  if (x === true) {
    if (item.next.length > 0) {
      glow(document.getElementById(from + "Button"));
    }
    Object.entries(item.res).forEach(([key, value]) => {
      gamedata.res[key] -= item.res[key];
    });
    document.getElementById("workbench").removeChild(document.getElementById(tech));
    gamedata.tech[tech] = 1;
    save();
    try {
      window[tech]();
    } catch (err) {}
  } else {
    log("Not enough resources!", true)
    // document.getElementById("logs").value = document.getElementById("logs").value + "\n> Not enough resources!";
    // glow(document.getElementById("logs"));
  }
  setShop();
  if (document.getElementById("labButton").style.display === "block") {
    researchLab();
  }
}

function researchLab() {
  if (document.getElementById("labButton").style.display === "none") {
    document.getElementById("labButton").style.display = "block";
    document.getElementById("labTab").style.display = "block";
    glow(document.getElementById("labButton"));
  }
  Object.entries(research).forEach(([key, value]) => {
    if (gamedata.BP[key] === 0) {
      if (research[key].prev.length === 0) {
        createLabItem(key);
      } else {
        let check = 0;
        for (let i = 0; i < research[key].prev.length; i++) {
          if (gamedata.BP[research[key].prev[i]] === 1 && gamedata.tech[research[key].prev[i]] === 1) {
            check += 1;
          }
        }
        if (check === research[key].prev.length) {
          createLabItem(key);
        }
      }
    }
  });
}

function createLabItem(BP) {
  if (document.getElementById(BP) === null) {
    var nextItem = research[BP];
    var buyable = document.createElement("div");
    buyable.className = "buyable";
    buyable.id = BP;
    document.getElementById("labTab").appendChild(buyable);
    var buyable_text = document.createElement("div");
    buyable_text.className = "buyable_text";
    buyable.appendChild(buyable_text);
    let btn = document.createElement("button");
    btn.innerText = "Buy";
    btn.className = "buyable_button";
    btn.addEventListener("click", function() {
      buyLabItem(nextItem, BP);
    });
    buyable.appendChild(btn);
    var tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.innerText = nextItem.desc;
    buyable.appendChild(tooltip);
    var buyable_title = document.createElement("div");
    buyable_title.className = "buyable_title";
    buyable_text.appendChild(buyable_title);
    var buyable_title_text = document.createElement("span");
    buyable_title_text.className = "buyable_title_text";
    var buyable_title_price = document.createElement("div");
    buyable_title_price.className = "buyable_title_price";
    buyable_title.appendChild(buyable_title_text);
    buyable_title.appendChild(buyable_title_price);
    buyable_title_text.innerText = nextItem.title;
    var cost = document.createElement("div");
    buyable_title_price.appendChild(cost);
    cost.innerText = "Cost :";
    cost.className = "RPprice";
    var amount = document.createElement("span");
    cost.appendChild(amount);
    amount.innerText = format(nextItem.RP, "standard");
    if (nextItem.toCraft === true) {
      buyable.style.background = "linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 0, 1)), url('https://blueprintmarketing.fr/wp-content/uploads/2020/11/Blueprint-Marketing-Plan.jpg')";
      buyable.style["background-size"] = "cover";
      buyable_title_text.innerText = nextItem.title + " (BP)";
    }
  }
}

function buyLabItem(item, tech) {
  if (gamedata.RP >= item.RP) {
    item.bought = true;
    blueprints[tech] = research[tech];
    document.getElementById("labTab").removeChild(document.getElementById(tech));
    if (tech.includes("engineeredDroneMk2")){
      gamedata.droneMk2.d1 = 0;
    } else if (tech.includes("engineeredDroneMk3")){
      gamedata.droneMk3.d2 = 0;
    } 
    if (item.toCraft === true) {
      glow(document.getElementById("workBenchButton"));
      // createWorkbenchItem(item, tech, "lab");
      gamedata.RP -= item.RP;
    } else {
      gamedata.tech[tech] = 1;
      gamedata.RP -= item.RP;
      try {
        window[tech]();
      } catch (err) {}
    }
    gamedata.BP[tech] = 1;
    save();
  } else {
    log("Not enough Research Points (RP)!", true);
    // document.getElementById("logs").value = document.getElementById("logs").value + "\n> Not enough Research Points (RP)!";
  }
  researchLab();
}

function labSwitch(){
  if (document.getElementById("labCheckbox").checked){
    log("Research machine working.", true);
  } else {
    log("Research machine stopped.", true);
  }
}

function changeRP() {
  Object.entries(gamedata.resRP).forEach(([key, value]) => {
    let el = document.getElementById(key + "Lab");
    if (el.value > 0 && gamedata.res[key] >= el.value) {
      gamedata.RP += el.value * value;
      gamedata.res[key] -= el.value;
    } else if (el.value > 0 && gamedata.res[key] < el.value) {
      el.value = gamedata.res[key]
      gamedata.RP += el.value * value;
      gamedata.res[key] -= el.value;
      el.value = 0;
    }
  });
}

function resetRP() {
  Object.entries(gamedata.resRP).forEach(([key, value]) => {
    let el = document.getElementById(key + "Lab");
    el.value = 0;
  });
}

function exoMk2() {
  log("Strength artificially increased! You can now mine second layer!", false);
  gamedata.minePower = 2;
  save();
}

function exoMk3() {
  log("Strength artificially increased! You can now mine the core!", false);
  gamedata.minePower = 3;
  save();
}

function cargoMk2() {
  gamedata.shipCargoLvl = 2;
  gamedata.shipMaxCargo = 100;
  gamedata.shipCapacity += 90;
  log("Cargo space increased to " + gamedata.shipMaxCargo + " units!", false);
  update("storage", gamedata.shipMaxCargo + "u", "standard");
}

function cargoMk3() {
  gamedata.shipCargoLvl = 3;
  gamedata.shipMaxCargo = 1000;
  gamedata.shipCapacity += 900;
  log("Cargo space increased to " + gamedata.shipMaxCargo + " units!", false);
  update("storage", gamedata.shipMaxCargo + "u", "standard");
}

function droneBayMk2() {
  gamedata.shipBayCapacity = 20;
  log("Drone bay capacity increased to " + gamedata.shipBayCapacity + " drones!", false);
  update("storageDrone", gamedata.shipBayCapacity + " drones", "standard");
}

function droneBayMk3() {
  gamedata.shipBayCapacity = 50;
  log("Drone bay capacity increased to " + gamedata.shipBayCapacity + " drones!", false);
  update("storageDrone", gamedata.shipBayCapacity + " drones", "standard");
}

function thrustersMk2() {
  log("Thrusters improved! All travel time have been reduced!", false);
  gamedata.sellingTime = gamedata.sellingTime / 2;
  gamedata.prestigeTime = 5;
}

function thrustersMk3() {
  log("Thrusters improved! All travel time have been reduced!", false);
  gamedata.sellingTime = gamedata.sellingTime / 2;
  gamedata.prestigeTime = 2.5;
}

function antennaMk2() {
  log("Antenna improved! Your ship can now scan 2 planets!", false);
  planetGenerator();
}

function antennaMk3() {
  log("Antenna improved! Your ship can now scan 5 planets!", false);
  planetGenerator();
}

function converterMk1() {
  log("This machine will allow you to convert resources into another of the same tier.", false)
  document.getElementById('converterButton').style.display = 'block';
}

function converterMk2() {
  log("With this improvement, you are now able to convert resources into another of any tier.", false)
}

function converterMk3() {
  //antimatter for TP
  log("With his improvement, your conversion ratio are way better.", false)
}

function massReducer() {
  log("You've found how to reduce the density of molecule. This will reduce the fuel cost of traveling to other planets.", false);
  gamedata.prestigeCreep = 1.2;
}

function planetAnalyzer() {
  log("You are now able to analyze distant planets, revealing their compositions!", false);
}

function teleporter() {
  log("With the teleport technology, every travel is now instantaneous! (This might cost special resource in the future)", false);
  gamedata.sellingTime = 0;
  gamedata.prestigeTime = 0;
}

function tradingAI() {
  console.log("tradingAI function");
}

function miningAI() {
  console.log("miningAI function");
}

function spatialDrillingLaser() {
  console.log("spatialDrillingLaser function");
}

function tractorBeam() {
  console.log("tractorBeam function");
}

function autoPrestige() {
  console.log("autoPrestige function");
}

function randn_bm(min, max, skew) {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) num = randn_bm(min, max, skew); // resample between 0 and 1 if out of range
  num = Math.pow(num, skew); // Skew
  num *= max - min; // Stretch to fill range
  num += min; // offset to min
  return num;
}

function format(number, type) {
  let exponent = Math.floor(Math.log10(number));
  let mantissa = number / Math.pow(10, exponent);
  if (type == "round") return number.toFixed(0);
  if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent;
  if (type == "engineering")
    return (
      (Math.pow(10, exponent % 3) * mantissa).toFixed(2) +
      "e" +
      Math.floor(exponent / 3) * 3
    );
  if (type == "standard") return new Intl.NumberFormat([locales, "en-EN"]).format(Math.abs(number));
  if (type == "currency") return new Intl.NumberFormat([locales, "en-EN"], {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 3,
    currencyDisplay: 'narrowSymbol'
  }).format(number);
}

function removeItemOnce(arr, value, i) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  if(inTuto = false){rareDrop(i);}
  return arr;
}

function rareDrop(i) {
  if (Math.random() >= (1 - 1 / 1000) && i === 3) {
    gamedata.res.Rare3 += 1;
    log("You've found a rare Taaffeite gemstone!", true);
    if (gamedata.rare.Rare3 == false) {
      document.getElementById("Rare3").parentNode.style.display = "flex";
      gamedata.rare.Rare3 = true;
    }
  } else if (Math.random() >= (1 - 1 / 1000) && i === 2) {
    gamedata.res.Rare2 += 1;
    log("You've found a Red beryl crystal!", true);
    if (gamedata.rare.Rare2 == false) {
      document.getElementById("Rare2").parentNode.style.display = "flex";
      gamedata.rare.Rare2 = true;
    }
  } else if (Math.random() >= (1 - 1 / 1000) && i === 1) {
    gamedata.res.Rare1 += 1;
    log("You've found a Cassiterite geode", true);
    if (gamedata.rare.Rare1 == false) {
      document.getElementById("Rare1").parentNode.style.display = "flex";
      gamedata.rare.Rare1 = true;
    }
  }
}

function addDrone(region, number) {
  if (gamedata["d" + number + "left"] > 0) {
    gamedata["d" + number + "left"] -= 1;
    gamedata.droneAssign["d" + number + region] += 1;
    update("d" + number + region, gamedata.droneAssign["d" + number + region]);
    update("local_d" + number + region, gamedata.droneAssign["d" + number + region]);
    update("d" + number + "left", gamedata["d" + number + "left"]);
  }
}

function removeDrone(region, number) {
  if (gamedata.droneAssign["d" + number + region] > 0) {
    gamedata["d" + number + "left"] += 1;
    gamedata.droneAssign["d" + number + region] -= 1;
    update("d" + number + region, gamedata.droneAssign["d" + number + region]);
    update("local_d" + number + region, gamedata.droneAssign["d" + number + region]);
    update("d" + number + "left", gamedata["d" + number + "left"]);
  }
}

function removeAllDrones(){
  Object.entries(gamedata.droneAssign).forEach(([key, value]) => {
    if(value> 0){
      gamedata.droneAssign[key] -= value;
      gamedata[key.slice(0, 2) + "left"] += value;
      update(key, gamedata.droneAssign[key]);
      update("local_" + key, gamedata.droneAssign[key]);
      update(key.slice(0, 2) + "left", gamedata[key.slice(0, 2) + "left"]);
    }
  });
}

function droneMining() {
  Object.entries(gamedata.droneAssign).forEach(([key, value]) => {
    var toMine = [];
    var cell = [];
    var downscale = 0; //DownMining (les drones peuvent miner les couches d'un tier inférieur au leur)
    if (value > 0) {
      if (key.includes("core") && gamedata.reach.d2core != 0) {
        if (key.includes("2")) {
          if (gamedata.notMined.d2core.includes(1)) {
            const notMinedExt = gamedata.notMined.d2core.filter(function(n) {
              if (gamedata.reach.d2core.includes("d2N")) { //Region Coeur atteinte par le nord
                return n <= (gamedata.reach.d2core.slice(0,-3));                  
              } else if (gamedata.reach.d2core.includes("d2W")) { //Region Coeur atteinte par l'ouest
                if ((Math.abs(n - l*(l-gamedata.reach.d2core.slice(0,-3))) + 1) % l === 0 && n <= l*(l-gamedata.reach.d2core.slice(0,-3)) + 1){
                  return n;
                }
              } else if (gamedata.reach.d2core.includes("d2E")) { //Region Coeur atteinte par l'est
                if (n < coreExtBorder[0] + l){
                  return n;
                } else if (Math.abs(n - l*(gamedata.reach.d2core.slice(0,-3))) % l === 0 && n <= l*(l-gamedata.reach.d2core.slice(0,-3))){
                  return n;
                }
              } else if (gamedata.reach.d2core.includes("d2S")) { //Region Coeur atteinte par le sud
                if (n <= coreExtBorder.slice(0, -gamedata.reach.d2core.slice(0,-3))[coreExtBorder.slice(0, -gamedata.reach.d2core.slice(0,-3)).length-1] && n > coreExtBorder[coreExtBorder.length-1] - l){
                  return n;
                } else if((n - coreExtBorder[0]) % l === 0){
                  return n;
                }
              }
            })
            toMineReversed = notMinedExt.reverse();
            toMine = toMineReversed.slice(0, gamedata.droneAssign[key]);
          } else {
            const notMinedExt = gamedata.notMined[key].filter(function(n) {
              if (!coreCoord.includes(n)) {
                return n;
              }
            })
            toMine = notMinedExt.slice(0, gamedata.droneAssign[key]);
          }
        } else if (key.includes("3")) {
          if (gamedata.reach.core != 0 && gamedata.notMined.d2core.includes(coreBorder.slice(1)[0])) {
            const notMinedTemp = gamedata.notMined.d2core.filter(function(n) {
              if (coreBorder.includes(n)) {
                if (coreBorder.includes(gamedata.reach.core + l)) { //Coeur atteint par le nord
                  return n <= (gamedata.reach.core + l);                  
                } else if (coreBorder.includes(gamedata.reach.core + 1)) { //Coeur atteint par l'ouest
                  if ((Math.abs(n-gamedata.reach.core)+1) % l === 0 || n === gamedata.reach.core +1){
                    return n;
                  }
                } else if (coreBorder.includes(gamedata.reach.core - 1)) { //Coeur atteint par l'est
                  if (n < coreBorder[0] + l){
                    return n;
                  } else if ((Math.abs(n-gamedata.reach.core)-1) % l === 0){
                    return n;
                  }
                } else if (coreBorder.includes(gamedata.reach.core - l)) { //Coeur atteint par le sud
                  if (n <= gamedata.reach.core - l && n > coreBorder[coreBorder.length-1] - l){
                    return n;
                  } else if((n - coreBorder[0]) % l ===0){
                    return n;
                  }
                }
              }
            })
            toMineReversed = notMinedTemp.reverse();
            toMine = toMineReversed.slice(0, gamedata.droneAssign[key]);
          } else /*if (gamedata.notMined.d2core.includes(coreBorder.slice(-1)[0]))*/ {
            const notMinedCore = gamedata.notMined.d2core.filter(function(n) {
              if (coreCoord.includes(n)) {
                return n;
              }
            })
            toMine = notMinedCore.slice(0, gamedata.droneAssign[key]);
          }
        }
      } else if (key.includes("1")) {
        toMine = gamedata.notMined[key].slice(0, gamedata.droneAssign[key]);
      } else if (key.includes("2")) {
        if (gamedata.notMined[key].includes(1) && gamedata.reach["d1" + key.slice(2)] != 0) {
          if (key.length === 3) {
            const notMinedReversed = gamedata.notMined[key].filter(function(n) {
              return n <= (gamedata.reach["d1" + key.slice(2)] - (2 * h / 3 * (l) - l));
            })
            toMine = notMinedReversed.slice(-gamedata.droneAssign[key]);
            toMineReversed = toMine.reverse();
          } else if (key.length === 4) {
            if (gamedata.reach["d1" + key.slice(2)] < (h * 2 * h / 3 + 2 * h / 3)) {
              const notMinedReversed = gamedata.notMined[key].filter(function(n) {
                return n <= (gamedata.reach["d1" + key.slice(2)] - (h * 2 * h / 3 + 2 * h / 3 - h));
              });
              toMine = notMinedReversed.slice(-gamedata.droneAssign[key]);
              toMineReversed = toMine.reverse();
            } else {
              const notMinedReversed = gamedata.notMined[key].filter(function(n) {
                if (c2leftBorder.includes(n)) {
                  return n <= (((gamedata.reach["d1" + key.slice(2)] - (h * 2 * h / 3 + 2 * h / 3)) / 2) + 1);
                }
              });
              toMine = notMinedReversed.slice(-gamedata.droneAssign[key]);
              toMineReversed = toMine.reverse();
            }
          }
        } else if (!gamedata.notMined[key].includes(1) && gamedata.notMined[key].length > 0) {
          toMine = gamedata.notMined[key].slice(0, gamedata.droneAssign[key]);
        // } else {  //DownMining
        //   downscale = 1;  //DownMining
        //   toMine = gamedata.notMined["d1" + key.slice(2)].slice(0, gamedata.droneAssign[key]);  //DownMining
        }
      }
      if (key != "d3core") {
        // if (downscale != 1){  //DownMining
          cell = document.getElementById("mineGri" + key).getElementsByTagName("td");
        // } else {  //DownMining
        //   cell = document.getElementById("mineGrid" + (parseInt(key.slice(1).slice(0,-1))-1).toString() + key.slice(2)).getElementsByTagName("td");  //DownMining
        // }  //DownMining
      } else {
        cell = document.getElementById("mineGrid2core").getElementsByTagName("td");
      }
      if (toMine.length >= 0) {
        for (let x = 0; x < toMine.length; x++) {
          if (cell[toMine[x] - 1] === undefined) {
            // if (key.includes("3")) {  //DownMining
            //   removeItemOnce(gamedata.notMined.d2core, toMine[x], 3);  //DownMining
            // } else if (downscale != 1){  //DownMining
            //   removeItemOnce(gamedata.notMined[key], toMine[x], 2);  //DownMining
            // } else {  //DownMining
            //   removeItemOnce(gamedata.notMined["d" + (parseInt(key.slice(1).slice(0,-1))-1).toString() + key.slice(2)], toMine[x], 1);  //DownMining
            // }  //DownMining
            if (key.includes("1")) {
              if (flatBorder.includes(toMine[x]) && gamedata.reach[key] === 0) {
                gamedata.reach[key] = toMine[x];
              }
              gamedata.res[gamedata.outermaterial.ref] = gamedata.res[gamedata.outermaterial.ref] + gamedata.yield1;
              removeItemOnce(gamedata.notMined[key], toMine[x], 1) // retirer pour DownMining
            } else if (key.includes("2")) {
              if (key.includes("core") && coreIntBorder.includes(toMine[x]) && gamedata.reach[key] === 0) {
                gamedata.reach[key] = toMine[x];
              }
              gamedata.res[gamedata.innermaterial.ref] = gamedata.res[gamedata.innermaterial.ref] + gamedata.yield2;
              removeItemOnce(gamedata.notMined[key], toMine[x], 2) // retirer pour DownMining
              if (key.length === 3 && gamedata.reach.core === 0 && flatCoreBorder.includes(toMine[x])) {
                gamedata.reach.core = toMine[x];
              }
            } else if (key.includes("3")) {
              gamedata.res[gamedata.corematerial.ref] = gamedata.res[gamedata.corematerial.ref] + gamedata.yield3;
              removeItemOnce(gamedata.notMined.d2core, toMine[x], 3); // retirer pour DownMining
            }

          } else {
            if (key.includes("2") || key.includes("3")) {
              if (gamedata.minePower === 1) {
                gamedata.minePower = 2;
                cell[toMine[x] - 1].click();
                gamedata.minePower = 1;
              } else {
                cell[toMine[x] - 1].click(); //bug à résoudre, le minage du coeur se bloque car il essaie de reprendre cellule 1 au lieu de partir à l'envers pour l'atteindre
              }
            } else if (key.includes("1")) {
              cell[toMine[x] - 1].click();
            }
          }
        }
      }
    }
  });
  if (gamedata.tech.autonomousDrone === 1 && document.getElementById('droneAuto').checked) {
    autonomy();
  }
}

function mining(grid, el, row, col, i, region, optReg) {
  // console.log("You clicked on element:", el);
  // console.log("You clicked on col:", col);
  // console.log("You clicked on row:", row);
  // console.log("You clicked on item #:", i);
  var antCol = (grid.rows[row].cells[col - 1] !== undefined) ?
    Number(grid.rows[row].cells[col - 1].textContent) :
    0;
  var antRow = (grid.rows[row - 1] !== undefined) ?
    Number(grid.rows[row - 1].cells[col].textContent) :
    0;
  var postCol = (grid.rows[row].cells[col + 1] !== undefined) ?
    Number(grid.rows[row].cells[col + 1].textContent) :
    0;
  var postRow = 0;

  if (grid.rows[row + 1] !== undefined) {
    if (grid.rows[row + 1].cells[col] !== undefined) {
      postRow = Number(grid.rows[row + 1].cells[col].textContent);
    } else {
      postRow = 0;
    }
  } else {
    postRow = 0;
  }
  if (
    ((!region.includes(antCol) && antCol != 0) ||
      (!region.includes(antRow) && antRow != 0) ||
      (!region.includes(postCol) && postCol != 0) ||
      (!region.includes(postRow) && postRow != 0) ||
      (optReg.includes("1") && optReg.length === 4 && (col === 0 || row === 0)) ||
      (row === 0 && optReg.includes("1")) ||
      ((row === 0 || row === l - 1 || col === 0 || col === l - 1) && optReg.includes("core") && gamedata.reach.d2core != 0) ||
      (optReg.includes("2") && optReg.length === 3 && !gamedata.notMined["d1" + optReg.slice(2)].includes(i + (2 * h / 3 * (l) - l)) && row === 0) ||
      (optReg.includes("2") && optReg.length === 4 && ((!gamedata.notMined["d1" + optReg.slice(2)].includes(h * (2 * h / 3) + 2 / 3 * h * (row + 1)) && col === 0) || (!gamedata.notMined["d1" + optReg.slice(2)].includes(h * (2 * h / 3) - h / 3 + (col + 1)) && row === 0)))
    ) &&
    region.includes(i)
  ) {
    if (((optReg.length == 4 && cornerBorder.includes(i)) || (optReg.length == 3 && flatBorder.includes(i)) || (optReg.includes("core") && coreIntBorder.includes(i))) && gamedata.reach[optReg] === 0) {
      log("You've reached the next layer!", true);
      gamedata.reach[optReg] = i;
    }
    if (optReg.includes("2") && optReg.length === 3 && gamedata.reach.d2core === 0 && flatCoreBorder.includes(i)) {
      log("You've reached the core region!", true);
      gamedata.reach.d2core = col + optReg;
    }
    if (grid.parentNode.id.includes("core")) {
      if (!coreCoord.includes(i) && gamedata.minePower > 1 && gamedata.reach.d2core != 0) {
        if (coreIntBorder.includes(i) && gamedata.reach.core === 0) {
          log("You've reached the Core!", true);
          gamedata.reach.core = i;
        }
        removeItemOnce(region, i, 2);
        el.className = "clicked";
        gamedata.res[gamedata.innermaterial.ref] = gamedata.res[gamedata.innermaterial.ref] + gamedata.yield2;
      } else if (coreCoord.includes(i) && gamedata.minePower > 2 && gamedata.reach.core != 0) {
        removeItemOnce(region, i, 3);
        el.className = "clicked";
        gamedata.res[gamedata.corematerial.ref] = gamedata.res[gamedata.corematerial.ref] + gamedata.yield3;
      }
    } else if (grid.parentNode.id.includes("1")) {
      removeItemOnce(region, i, 1);
      el.className = "clicked";
      gamedata.res[gamedata.outermaterial.ref] = gamedata.res[gamedata.outermaterial.ref] + gamedata.yield1;
    } else if (
      grid.parentNode.id.includes("2") &&
      gamedata.minePower > 1
    ) {
      removeItemOnce(region, i, 2);
      el.className = "clicked";
      gamedata.res[gamedata.innermaterial.ref] = gamedata.res[gamedata.innermaterial.ref] + gamedata.yield2;
    } else if (
      grid.parentNode.id.includes("2") &&
      gamedata.minePower <= 1
    ) {
      log("You're not strong enough to mine this layer. Research Exoskeleton Mk1 first.", true);
    }
  }
  if (optReg.includes("core")){
    if (gamedata.reach.d2core === 0){
      log("Can't mine here. You must reach this region by mining outer regions first.", true);
    } else if (coreCoord.includes(i) && gamedata.minePower <= 2) {
      log("You're not strong enough to mine this layer. Research Exoskeleton Mk2 first.", true);
    }
  }
}

function autonomy() {
  Object.entries(gamedata.notMined).forEach(([key, value]) => {
    if (gamedata.notMined[key].length === 0) {
      if (key.includes("1")) {
        gamedata.d1left = gamedata.d1left + gamedata.droneAssign[key];
        update("d1left", gamedata.d1left);
      } else if (key.includes("2")) {
        gamedata.d2left = gamedata.d2left + gamedata.droneAssign[key];
        update("d2left", gamedata.d2left);
      } else if (key.includes("3")) {
        gamedata.d3left = gamedata.d3left + gamedata.droneAssign[key];
        update("d3left", gamedata.d3left);
      }
      gamedata.droneAssign[key] = 0;
      update(key, gamedata.droneAssign[key]);
      update("local_" + key, gamedata.droneAssign[key]);
    }
  });
  Object.entries(gamedata.notMined).forEach(([key, value]) => {
    if (gamedata.notMined[key].length > 0) {
      if (key.includes("1") && gamedata.d1left > 0) {
        gamedata.droneAssign[key] = gamedata.droneAssign[key] + gamedata.d1left;
        gamedata.d1left = 0;
        update("d1left", gamedata.d1left);
      } else if (key.includes("2") && gamedata.d2left > 0 && gamedata.reach["d1" + key.slice(2)] > 0) {
        gamedata.droneAssign[key] = gamedata.droneAssign[key] + gamedata.d2left;
        gamedata.d2left = 0;
        update("d2left", gamedata.d2left);
      } else if (key === 'd2core' && gamedata.d2left > 0 && gamedata.reach["d2" + key.slice(2)] != 0) {
        gamedata.droneAssign[key] = gamedata.droneAssign[key] + gamedata.d2left;
        gamedata.d2left = 0;
        update("d2left", gamedata.d2left);
      } else if (key.includes("3") && gamedata.d3left > 0 && gamedata.reach.core > 0) {
        gamedata.droneAssign[key] = gamedata.droneAssign[key] + gamedata.d3left;
        gamedata.d3left = 0;
        update("d3left", gamedata.d3left);
      }
      update(key, gamedata.droneAssign[key]);
      update("local_" + key, gamedata.droneAssign[key]);
    }
  });
}

function chooseRegion(to, from) {

  if (to.length === 2) {
    grids["grid1" + to] = clickableGrid(h, h, mining, gamedata.notMined["d1" + to], "d1" + to);
    grids["grid2" + to] = clickableGrid(h / 3, h / 3, mining, gamedata.notMined["d2" + to], "d2" + to);
    document.getElementById("mineGrid1" + to).appendChild(grids["grid1" + to]);
    document.getElementById("mineGrid2" + to).appendChild(grids["grid2" + to]);
  } else if (to.length === 1) {
    grids["grid1" + to] = clickableGrid(2 * h / 3, l, mining, gamedata.notMined["d1" + to], "d1" + to);
    grids["grid2" + to] = clickableGrid(h / 3, l, mining, gamedata.notMined["d2" + to], "d2" + to);
    document.getElementById("mineGrid1" + to).appendChild(grids["grid1" + to]);
    document.getElementById("mineGrid2" + to).appendChild(grids["grid2" + to]);
  } else if (to === "core") {
    grids["grid2" + to] = clickableGrid(l, l, mining, gamedata.notMined["d2" + to], "d2" + to);
    /* grids["grid3" + to] = clickableGrid(l/2, l/2, mining, gamedata.notMined["d3" + to], "d3" + to); */
    document.getElementById("mineGrid2" + to).appendChild(grids["grid2" + to]);
    /* document.getElementById("mineGrid3" + to).appendChild(grids["grid3" + to]); */
  } else if (from != "map" && from != "core") {
    document.getElementById("mineGrid1" + from).removeChild(grids["grid1" + from]);
    document.getElementById("mineGrid2" + from).removeChild(grids["grid2" + from]);
  } else if (from != "map" && from === "core") {
    document.getElementById("mineGrid2" + from).removeChild(grids["grid2" + from]);
  }

  document.getElementById("map").style.display = "none";
  var regionToHide = document.getElementsByClassName("detailRegion");
  for (var i = 0; i < regionToHide.length; i++) {
    regionToHide[i].style.display = "none";
  }

  var regionToShow = document.getElementsByClassName("detailRegion" + " " + to);
  if (regionToShow.length >= 1) {
    regionToShow[0].style.display = "grid";
  }
  document.getElementById(to).style.display = "grid";
  document.getElementById("shipMenu").style.display = "none";
  //document.getElementById("converterMenu").style.display = "none";
  document.getElementById("coordinatesMenu").style.display = "none";
}

function clickableGrid(rows, cols, callback, regionArray, regionName) {
  let i = 0;
  let j = 0;
  var grid = document.createElement("table");
  let reg = regionArray;
  grid.className = "grid";
  if (regionName.length === 3 || regionName.includes("d2")) {
    for (let r = 0; r < rows; ++r) {
      let tr = grid.appendChild(document.createElement("tr"));
      for (let c = 0; c < cols; ++c) {
        let cell = tr.appendChild(document.createElement("td"));
        i = ++i;
        cell.innerHTML = "<span style='display:none;'>" + i + "</span>";
        if (!regionArray.includes(i)) {
          cell.className = "clicked";
        } else if (regionName.includes("d1")) {
          cell.className = "couche1";
        } else if (regionName.includes("d2")) {
          if (regionName.length === 6 && coreCoord.includes(i)) {
            cell.className = "couche3";
          } else {
            cell.className = "couche2";
          }
        }
        cell.addEventListener(
          "click",
          (function(grid, el, r, c, i, reg, regionName) {
            return function() {
              callback(grid, el, r, c, i, reg, regionName);
            };
          })(grid, cell, r, c, i, reg, regionName),
          false
        );
      }
    }
  } else if (regionName.length === 4) {
    for (let r = 0; r < (2 * rows) / 3; ++r) {
      let tr = grid.appendChild(document.createElement("tr"));
      for (let c = 0; c < cols; ++c) {
        let cell = tr.appendChild(document.createElement("td"));
        i = ++i;
        cell.innerHTML = "<span style='display:none;'>" + i + "</span>";
        if (!regionArray.includes(i)) {
          cell.className = "clicked";
        } else if (regionName.includes("d1")) {
          cell.className = "couche1";
        } else if (regionName.includes("d2")) {
          cell.className = "couche2";
        }
        cell.addEventListener(
          "click",
          (function(grid, el, r, c, i, reg, regionName) {
            return function() {
              callback(grid, el, r, c, i, reg, regionName);
            };
          })(grid, cell, r, c, i, reg, regionName),
          false
        );
      }
    }
    for (let r = (2 * rows) / 3; r < rows; ++r) {
      let tr = grid.appendChild(document.createElement("tr"));
      for (let c = 0; c < (2 * cols) / 3; ++c) {
        let cell = tr.appendChild(document.createElement("td"));
        i = ++i;
        cell.innerHTML = "<span style='display:none;'>" + i + "</span>";
        if (!regionArray.includes(i)) {
          cell.className = "clicked";
        } else if (regionName.includes("d1")) {
          cell.className = "couche1";
        } else if (regionName.includes("d2")) {
          cell.className = "couche2";
        }
        cell.addEventListener(
          "click",
          (function(grid, el, r, c, i, reg, regionName) {
            return function() {
              callback(grid, el, r, c, i, reg, regionName);
            };
          })(grid, cell, r, c, i, reg, regionName),
          false
        );
      }
    }
  }
  return grid;
}

function tab(tab) {
  
  setWorkbench();
  setShop();
  document.getElementById("shop").style.display = "none";
  document.getElementById("lab").style.display = "none";
  document.getElementById("workbench").style.display = "none";
  document.getElementById("labTab").style.display = "none";
  document.getElementById("machineTab").style.display = "none";
  document.getElementById(tab).style.display = "inline-block";
  if (tab === "lab") {
    document.getElementById("labTab").style.display = "inline-block";
  }
  if (tab.includes("Tab")) {
    document.getElementById("lab").style.display = "inline-block";
  }
  Object.entries(gamedata.rare).forEach(([key, value]) => {
    if (gamedata.rare[key] == false) {
      let el = document.getElementsByClassName(key)
      for (var i = 0; i < el.length; i++) {
        el[i].style.display = "none";
      }
    } else {
      let el = document.getElementsByClassName(key)
      for (var i = 0; i < el.length; i++) {
        el[i].style.display = "flex";
      }
    }
  });
}

function buyDrone1() {
  let x = true;
  Object.entries(gamedata.droneMk1).some(function(key) {
    if (gamedata.res[key[0]] < gamedata.droneMk1[key[0]]) {
      x = false;
    }
  });
  if (x === true) {
    if (gamedata.drone1 === 0) {
      log("You now have a Mining drone, click on any region of the planet and assign it to this region. It will then mine automatically.", false);
    }
    gamedata.tech.droneMk1 = 1;
    gamedata.drone1 += 1;
    gamedata.d1left += 1;
    Object.entries(gamedata.droneMk1).forEach(([key, value]) => {
      if (gamedata.droneMk1[key] > 0) {
        gamedata.res[key] -= gamedata.droneMk1[key];
      }
    });
    setDronePrice(1);
  } else {
    log("Not enough resources!", true);
  }
}

function buyDrone2() {
  let x = true;
  Object.entries(gamedata.droneMk2).some(function(key) {
    if (key[0] != "d1"){
      if (gamedata.res[key[0]] < gamedata.droneMk2[key[0]]) {
        x = false;
      }
    }
  });
  if (x === false) {
    log("Not enough resources!", true);
  }

  if (gamedata.tech.engineeredDroneMk2 === 0 && gamedata.drone1 === 0) {
    log("Not enough Mk1 drone!", true);
    x = false;
  }
  if (x === true) {
    gamedata.tech.droneMk2 = 1;
    gamedata.drone2 += 1;
    gamedata.d2left += 1;
    Object.entries(gamedata.droneMk2).forEach(([key, value]) => {
      if (gamedata.droneMk2[key] > 0 && !key.includes("d1")) {
        gamedata.res[key] -= gamedata.droneMk2[key];
      }
    });
    if (gamedata.tech.engineeredDroneMk2 === 0) {
      gamedata.drone1 -= 1;
      if (gamedata.d1left === 0) {
        for (const [key, value] of Object.entries(gamedata.droneAssign)) {
          if (value > 0 && key.includes("d1")) {
            gamedata.droneAssign[key] -= 1;
            gamedata.d1left += 1;
            update(key, format(gamedata.droneAssign[key], "round"));
            update("local_" + key, format(gamedata.droneAssign[key], "round"));
            break;
          }
        }
      }
      gamedata.d1left -= 1;
    }
    setDronePrice(2);
  }
}

function buyDrone3() {
  let x = true;
  Object.entries(gamedata.droneMk3).some(function(key) {
    if (key[0] != "d2"){
      if (gamedata.res[key[0]] < gamedata.droneMk2[key[0]]) {
        x = false;
      }
    }
  });
  if (x === false) {
    log("Not enough resources!", true);
  }

  if (gamedata.tech.engineeredDroneMk3 === 0 && gamedata.drone2 === 0) {
    log("Not enough Mk2 drone!", true);
    x = false;
  }
  if (x === true) {
    gamedata.tech.droneMk3 = 1;
    gamedata.drone3 += 1;
    gamedata.d3left += 1;
    Object.entries(gamedata.droneMk3).forEach(([key, value]) => {
      if (gamedata.droneMk3[key] > 0 && !key.includes("d2")) {
        gamedata.res[key] -= gamedata.droneMk3[key];
      }
    });
    if (gamedata.tech.engineeredDroneMk3 === 0) {
      gamedata.drone2 -= 1;
      if (gamedata.d2left === 0) {
        for (const [key, value] of Object.entries(gamedata.droneAssign)) {
          if (value > 0 && key.includes("d2")) {
            gamedata.droneAssign[key] -= 1;
            gamedata.d2left += 1;
            update(key, format(gamedata.droneAssign[key], "round"));
            update("local_" + key, format(gamedata.droneAssign[key], "round"));
            break;
          }
        }
      }
      gamedata.d2left -= 1;
    }
    setDronePrice(3);
  }
}

function converterMenu() {
  document.getElementById("converterMenu").style.display = "flex";
  if (gamedata.tech.converterMk2 === 1){
    document.getElementById("converter1").style.display = "grid";
    document.getElementById("converter2").style.display = "grid";
    document.getElementById("converter3").style.display = "grid";
  }else{
    document.getElementById("converter1").style.display = "grid";
    document.getElementById("converter2").style.display = "none";
    document.getElementById("converter3").style.display = "none";
  }
  //cOutput(1);
  outputCalc(1);
  //cOutput(2);
  outputCalc(2);
  //cOutput(3);
  outputCalc(3);
}
//Fonctions converter :
function cOutput(id) {
  var select = document.getElementById("c"+ id + "Output");
  document.getElementById("c"+ id + "Auto").checked = false;
  document.getElementById('ratio' + id).innerHTML = "0:0";
  select.options.length = 1;
  if (gamedata.tech.converterMk2 === 0){
    for(index in gamedata.resName) {
      if(document.getElementById("c"+ id + "Input").value.includes("Res1") && index.includes("Res1") && index != document.getElementById("c"+ id + "Input").value){
        select.options[select.options.length] = new Option(gamedata.resName[index], index);
      } else if(document.getElementById("c"+ id + "Input").value.includes("Res2") && index.includes("Res2") && index != document.getElementById("c"+ id + "Input").value){
        select.options[select.options.length] = new Option(gamedata.resName[index], index);
      } else if(document.getElementById("c"+ id + "Input").value.includes("Res3") && index.includes("Res3") && index != document.getElementById("c"+ id + "Input").value){
        select.options[select.options.length] = new Option(gamedata.resName[index], index);
      }
    }
  } else {
    for(index in gamedata.resName) {
      if(index.includes("Res") && index != document.getElementById("c"+ id + "Input").value){
        select.options[select.options.length] = new Option(gamedata.resName[index], index);
      }
    }
  }
}

function cRatio(id) {
  if (document.getElementById("c"+ id + "Input").value != "Res1any" && document.getElementById("c"+ id + "Output").value != "Res1any" ){
    if (document.getElementById("c"+ id + "Input").value.includes("Res1")){
      if (document.getElementById("c"+ id + "Output").value.includes("Res1")){
        document.getElementById('ratio' + id).innerHTML = (1/gamedata.resRatio.Res1R1) + ":1";
        return gamedata.resRatio.Res1R1;
      } else if(document.getElementById("c"+ id + "Output").value.includes("Res2")){
        document.getElementById('ratio' + id).innerHTML = (1/gamedata.resRatio.Res1R2) + ":1";
        return gamedata.resRatio.Res1R2;
      } else if(document.getElementById("c"+ id + "Output").value.includes("Res3")){
        document.getElementById('ratio' + id).innerHTML = (1/gamedata.resRatio.Res1R3) + ":1";
        return gamedata.resRatio.Res1R3;
      }
    } else if (document.getElementById("c"+ id + "Input").value.includes("Res2")){
      if (document.getElementById("c"+ id + "Output").value.includes("Res1")){
        document.getElementById('ratio' + id).innerHTML = "1:"+ (gamedata.resRatio.Res2R1);
        return gamedata.resRatio.Res2R1;
      } else if(document.getElementById("c"+ id + "Output").value.includes("Res2")){
        document.getElementById('ratio' + id).innerHTML = (1/gamedata.resRatio.Res2R2) + ":1";
        return gamedata.resRatio.Res2R2;
      } else if(document.getElementById("c"+ id + "Output").value.includes("Res3")){
        document.getElementById('ratio' + id).innerHTML = (1/gamedata.resRatio.Res2R3) + ":1";
        return gamedata.resRatio.Res2R3;
      }
    } else if (document.getElementById("c"+ id + "Input").value.includes("Res3")){
      if (document.getElementById("c"+ id + "Output").value.includes("Res1")){
        document.getElementById('ratio' + id).innerHTML = "1:"+ (gamedata.resRatio.Res3R1);
        return gamedata.resRatio.Res3R1;
      } else if(document.getElementById("c"+ id + "Output").value.includes("Res2")){
        document.getElementById('ratio' + id).innerHTML = "1:"+ (gamedata.resRatio.Res3R2);
        return gamedata.resRatio.Res3R2;
      } else if(document.getElementById("c"+ id + "Output").value.includes("Res3")){
        document.getElementById('ratio' + id).innerHTML = (1/gamedata.resRatio.Res3R3) + ":1";
        return gamedata.resRatio.Res3R3;
      }
    }
  } else {
    document.getElementById('ratio' + id).innerHTML = "0:0";
    return 0;
  }
}

function outputCalc(id){
  if (document.getElementById('c' + id + 'Input').value != "Res1any" && document.getElementById('c' + id + 'Output').value != "Res1any"){
    var result = document.getElementById('c' + id + 'InputValue').value * cRatio(id);
  } else {
    var result = 0;
  }
  if (result === 0){
    document.getElementById('c' + id + 'OutputValue').innerHTML = "0 u";
  } else if (result >= 100000 || result < 0.001){
    document.getElementById('c' + id + 'OutputValue').innerHTML = format(result, 'scientific') + " u";
  } else {
    document.getElementById('c' + id + 'OutputValue').innerHTML = format(result, 'standard') + " u";
  }
  conversions['c' + id].input = document.getElementById('c' + id + 'Input').value;
  conversions['c' + id].inputValue = document.getElementById('c' + id + 'InputValue').value;
  conversions['c' + id].output = document.getElementById('c' + id + 'Output').value;
  conversions['c' + id].outputValue = result;
  if (document.getElementById('c' + id + 'Auto').checked){
    conversions['c' + id].auto = true;
  } else {
    conversions['c' + id].auto = false;    
  }

  return result
}

function conversion(id, button){
  result = outputCalc(id);
  if (result >= 0.001 && gamedata.res[document.getElementById('c'+id+'Input').value] >= document.getElementById('c'+id+'InputValue').value){
    gamedata.res[document.getElementById('c'+id+'Input').value] -= document.getElementById('c'+id+'InputValue').value;
    gamedata.res[document.getElementById('c'+id+'Output').value] += result;
  } else if (gamedata.res[document.getElementById('c'+id+'Input').value] < document.getElementById('c'+id+'InputValue').value){
    if (document.getElementById('c' + id + 'Auto').checked){
      log("Not enough resources. Converter n°" + id + " stopped.", true);
      document.getElementById('c' + id + 'Auto').checked = false;
      conversions['c' + id].auto = false;
    } else {
      log("Not enough resources!", true);
    }
  } else if (result < 0.001 && document.getElementById('c'+id+'Input').value != 'Res1any' && document.getElementById('c'+id+'Output').value != 'Res1any'){
    log("Unable to proceed. Conversion output would be too low!", true);
  } else if (button === true){
    log("Select both input and output to proceed.", true);
  }
}

function shipMenu() {
  var shipTech = ["cargo", "droneBay", "thrusters", "antenna", "planetAnalyzer", "tractorBeam", "miningAI", "tradingAI", "spatialDrillingLaser", "teleporter", "autoPrestige"];
  document.getElementById("shipMenu").style.display = "grid";
  let root = document.documentElement.style;
  root.setProperty("--res1GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res1a + gamedata.shipStock.Res1b + gamedata.shipStock.Res1c))) + "%");
  root.setProperty("--res2GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res2a + gamedata.shipStock.Res2b + gamedata.shipStock.Res2c))) + "%");
  root.setProperty("--res3GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res3a + gamedata.shipStock.Res3b + gamedata.shipStock.Res3c))) + "%");
  root.setProperty("--resRGaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Rare1 + gamedata.shipStock.Rare2 + gamedata.shipStock.Rare3))) + "%");

  Object.entries(gamedata.rare).forEach(([key, value]) => {
    if (gamedata.rare[key] == false) {
      let el = document.getElementsByClassName(key)
      for (var i = 0; i < el.length; i++) {
        el[i].style.display = "none";
      }
    } else {
      let el = document.getElementsByClassName(key)
      for (var i = 0; i < el.length; i++) {
        el[i].style.display = "flex";
      }
    }
  });

  Object.entries(gamedata.res).forEach(([key, value]) => {
    let el = document.getElementById(key + "Ship");
    el.value = format(gamedata.shipStock[key], "standard");
    update(key + "Value", format(gamedata.resValue[key], "standard"));
  });
  for (let i = 0; i < 4; i++) {
    if (gamedata.tech[shipTech[i] + "Mk3"] == 1) {
      document.getElementById(shipTech[i]).innerText = "Mk3";
    } else if (gamedata.tech[shipTech[i] + "Mk2"] == 1) {
      document.getElementById(shipTech[i]).innerText = "Mk2";
    } else if (gamedata.tech[shipTech[i] + "Mk1"] == 1) {
      document.getElementById(shipTech[i]).innerText = "Mk1";
    }
  }
  for (let i = 4; i < shipTech.length; i++) {
    if (gamedata.tech[shipTech[i]] == 0) {
      document.getElementById(shipTech[i] + "Item").style.display = "none";
    } else {
      document.getElementById(shipTech[i] + "Item").style.display = "flex";
    }
  }
  update("sumValue", format(gamedata.sumValue, "currency"));
  update("money", format(gamedata.money, "currency"));
  update("moneyShip", format(gamedata.money, "currency"));
  update("storageDrone", format(gamedata.shipBayCapacity, "standard") + " drones");
  update("storage", format(gamedata.shipMaxCargo, "standard") + " u");
  gamedata.prestigeCost = Math.pow(gamedata.prestigeCreep, gamedata.prestigeNb) * ((gamedata.shipMaxCargo - gamedata.shipCapacity) / gamedata.shipMaxCargo) + 1;
  update("prestigeCost", "Cost : " + format(gamedata.prestigeCost, "currency"));
}

function changeStock(res, resCat) {

  let el = document.getElementById(res + "Ship");
  if (parseFloat(el.value) >= 0) {
    if (gamedata.res[res] >= (parseFloat(el.value) - gamedata.shipStock[res])) {
      if (gamedata.shipCapacity + (gamedata.shipStock[res] - parseFloat(el.value)) > 0) {
        gamedata.res[res] = gamedata.res[res] + (gamedata.shipStock[res] - parseFloat(el.value));
        gamedata.shipCapacity = gamedata.shipCapacity + (gamedata.shipStock[res] - parseFloat(el.value));
        gamedata.shipCapacity = Number(gamedata.shipCapacity.toFixed(3));
        gamedata.shipStock[res] = parseFloat(el.value);
      } else if (parseFloat(el.value) - gamedata.shipStock[res] >= gamedata.shipCapacity) {
        gamedata.res[res] = gamedata.res[res] - gamedata.shipCapacity;
        gamedata.shipStock[res] = gamedata.shipStock[res] + gamedata.shipCapacity;
        gamedata.shipCapacity = 0;
        el.value = format(gamedata.shipStock[res], "standard");
      }
    } else if ((parseFloat(el.value) - gamedata.shipStock[res]) > gamedata.res[res] && gamedata.res[res] > 0) {
      if (gamedata.shipCapacity >= gamedata.res[res]) {
        gamedata.shipStock[res] = gamedata.shipStock[res] + gamedata.res[res];
        gamedata.shipCapacity = gamedata.shipCapacity - gamedata.res[res];
        gamedata.res[res] = 0;
        el.value = format(gamedata.shipStock[res], "standard");
      } else {
        gamedata.shipStock[res] = gamedata.shipStock[res] + gamedata.shipCapacity;
        gamedata.res[res] = gamedata.res[res] - gamedata.shipCapacity;
        gamedata.shipCapacity = 0;
        el.value = format(gamedata.shipStock[res], "standard");
      }
    } else {
      el.value = format(gamedata.shipStock[res], "standard");
    }
  } else {
    el.value = format(gamedata.shipStock[res], "standard");
  }

  let root = document.documentElement.style;
  root.setProperty("--res1GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res1a + gamedata.shipStock.Res1b + gamedata.shipStock.Res1c))) + "%");
  root.setProperty("--res2GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res2a + gamedata.shipStock.Res2b + gamedata.shipStock.Res2c))) + "%");
  root.setProperty("--res3GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res3a + gamedata.shipStock.Res3b + gamedata.shipStock.Res3c))) + "%");
  root.setProperty("--resRGaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Rare1 + gamedata.shipStock.Rare2 + gamedata.shipStock.Rare3))) + "%");

  gamedata.sumValue = 0;
  Object.entries(gamedata.shipStock).forEach(([key, value]) => {
    let el = document.getElementById(key + "Ship");
    gamedata.sumValue = gamedata.sumValue + gamedata.shipStock[key] * gamedata.resValue[key];
  });
  update("sumValue", format(gamedata.sumValue, "currency"));
  gamedata.prestigeCost = Math.pow(gamedata.prestigeCreep, gamedata.prestigeNb) * ((gamedata.shipMaxCargo - gamedata.shipCapacity) / gamedata.shipMaxCargo) + 1;
  update("prestigeCost", "Cost : " + format(gamedata.prestigeCost, "currency"));
}

function resetAmounts(sale) {
  Object.entries(gamedata.shipStock).forEach(([key, value]) => {
    let el = document.getElementById(key + "Ship");
    if (sale === undefined) {
      gamedata.res[key] = gamedata.res[key] + parseFloat(el.value);
    }
    gamedata.shipStock[key] = gamedata.shipStock[key] - parseFloat(el.value);
    gamedata.shipCapacity = gamedata.shipCapacity + parseFloat(el.value);
    el.value = 0;
  });
  let root = document.documentElement;
  root.style.setProperty("--res1GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res1a + gamedata.shipStock.Res1b + gamedata.shipStock.Res1c))) + "%");
  root.style.setProperty("--res2GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res2a + gamedata.shipStock.Res2b + gamedata.shipStock.Res2c))) + "%");
  root.style.setProperty("--res3GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res3a + gamedata.shipStock.Res3b + gamedata.shipStock.Res3c))) + "%");
  root.style.setProperty("--res3GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Rare1 + gamedata.shipStock.Rare2 + gamedata.shipStock.Rare3))) + "%");
  gamedata.sumValue = 0;
  update("sumValue", format(gamedata.sumValue, "currency"));
  gamedata.prestigeCost = Math.pow(1.3, gamedata.prestigeNb) * ((gamedata.shipMaxCargo - gamedata.shipCapacity) / gamedata.shipMaxCargo) + 1;
  update("prestigeCost", "Cost : " + format(gamedata.prestigeCost, "currency"));
}

function sellRessources() {
  if (gamedata.sumValue > 0) {
    var msg = "";
    if (gamedata.tech.teleporter === 0) {
      var minutes = Math.floor(gamedata.sellingTime / 60);
      var seconds = gamedata.sellingTime % 60;
      msg = "Ship won't be in orbit for " + minutes + "m" + seconds + "s";
    }
    if (confirm("Are you sure you want to sell resources stocked in ship?\n" + msg)) {
      gamedata.money = gamedata.money + gamedata.sumValue;
      resetAmounts(true);
      update("money", format(gamedata.money, "currency"));
      update("moneyShip", format(gamedata.money, "currency"));
      chooseRegion('map', 'map');
      gamedata.timeLeft = gamedata.sellingTime;
      selling();
    } else {
      document.getElementById("logs").value = document.getElementById("logs").value + "\n> Selling aborted.";
      glow(document.getElementById("logs"));
    }
  }
}

function selling() {
  document.getElementById("ship").style.display = "none";
  document.getElementById("timer").style.display = "block";
  var x = setInterval(function() {
    gamedata.timeLeft -= 1;
    var m = Math.floor(gamedata.timeLeft / 60);
    var s = gamedata.timeLeft % 60;
    document.getElementById("timer").innerHTML = "Ship will be back in " + m + "m " + s + "s ";
    if (gamedata.timeLeft < 0) {

      clearInterval(x);
      document.getElementById("ship").style.display = "block";
      document.getElementById("timer").style.display = "none";
    }
  }, 1000)
}

function planetMenu() {
  if (gamedata.money >= gamedata.prestigeCost) {
    let x = 0;
    Object.entries(gamedata.res).forEach(([key, value]) => {
      x += gamedata.res[key];
    });
    if (gamedata.shipCapacity > 0 && x > 0 && (gamedata.drone1 + gamedata.drone2 + gamedata.drone3) <= gamedata.shipBayCapacity) {
      if (confirm("Ship is not fully loaded.\nDo you want to proceed?")) {
        x = 1;
      } else {
        x = 0;
      }
    } else if (gamedata.shipCapacity > 0 && x > 0 && (gamedata.drone1 + gamedata.drone2 + gamedata.drone3) > gamedata.shipBayCapacity) {
      if (confirm("Ship is not fully loaded. And the ship cannot carry all the drones.\nDo you want to proceed?")) {
        x = 1;
      } else {
        x = 0;
      }
    } else if ((gamedata.drone1 + gamedata.drone2 + gamedata.drone3) > gamedata.shipBayCapacity) {
      if (confirm("The ship cannot carry all the drones.\nDo you want to proceed?")) {
        x = 1;
      } else {
        x = 0;
      }
    } else {
      x = 1;
    }

    var d = gamedata.shipBayCapacity;
    if ((gamedata.drone1 + gamedata.drone2 + gamedata.drone3) <= gamedata.shipBayCapacity) {
      prestige.drone1 = gamedata.drone1;
      prestige.drone2 = gamedata.drone2;
      prestige.drone3 = gamedata.drone3;
      d -= (gamedata.drone1 + gamedata.drone2 + gamedata.drone3);
    } else {
      let d1 = gamedata.drone1;
      let d2 = gamedata.drone2;
      let d3 = gamedata.drone3;
      prestige.drone1 = 0;
      prestige.drone2 = 0;
      prestige.drone3 = 0;
      while (d > 0) {
        if (d3 > 0) {
          d3 -= 1;
          d -= 1;
          prestige.drone3 += 1;
        } else if (d2 > 0) {
          d2 -= 1;
          d -= 1;
          prestige.drone2 += 1;
        } else if (d1 > 0) {
          d1 -= 1;
          d -= 1;
          prestige.drone1 += 1;
        }
      }
    }


    if (x > 0) {
      document.getElementById("planetMenu").style.display = "grid";
      update("planetMenuStorageMax", format(gamedata.shipMaxCargo, "standard") + " u");
      update("planetMenuStorage", format((gamedata.shipMaxCargo - gamedata.shipCapacity), "standard") + " u");
      update("planetMenuDrone", format((gamedata.shipBayCapacity - d), "standard"));
      update("planetMenuDroneMax", format(gamedata.shipBayCapacity, "standard") + " drones");
      update("travelTime", format(gamedata.prestigeTime, "standard") + "s");
      update("travelCost", format(gamedata.prestigeCost, "currency"));

      if (gamedata.planetShop.size > 0) {
        document.getElementById("PShopoutermaterial").innerHTML = gamedata.planetShop.c1.name;
        document.getElementById("PShopinnermaterial").innerHTML = gamedata.planetShop.c2.name;
        document.getElementById("PShopcorematerial").innerHTML = gamedata.planetShop.c3.name;
        document.getElementById("PShopsize").innerHTML = gamedata.planetShop.size;
        document.getElementById("planetShop").style.display = "flex";
      } else {
        document.getElementById("planetShop").style.display = "none";
      }
      if (gamedata.tech.planetAnalyzer === 0) {
        document.getElementById("P1outermaterial").innerHTML = "???";
        document.getElementById("P1innermaterial").innerHTML = "???";
        document.getElementById("P1corematerial").innerHTML = "???";
        document.getElementById("P1size").innerHTML = "???";
        document.getElementById("P2outermaterial").innerHTML = "???";
        document.getElementById("P2innermaterial").innerHTML = "???";
        document.getElementById("P2corematerial").innerHTML = "???";
        document.getElementById("P2size").innerHTML = "???";
        document.getElementById("P2outermaterial").innerHTML = "???";
        document.getElementById("P2innermaterial").innerHTML = "???";
        document.getElementById("P2corematerial").innerHTML = "???";
        document.getElementById("P2size").innerHTML = "???";
        document.getElementById("P4outermaterial").innerHTML = "???";
        document.getElementById("P4innermaterial").innerHTML = "???";
        document.getElementById("P4corematerial").innerHTML = "???";
        document.getElementById("P4size").innerHTML = "???";
        document.getElementById("P5outermaterial").innerHTML = "???";
        document.getElementById("P5innermaterial").innerHTML = "???";
        document.getElementById("P5corematerial").innerHTML = "???";
        document.getElementById("P5size").innerHTML = "???";
      } else {
        document.getElementById("P1outermaterial").innerHTML = gamedata.planet1.c1.name;
        document.getElementById("P1innermaterial").innerHTML = gamedata.planet1.c2.name;
        document.getElementById("P1corematerial").innerHTML = gamedata.planet1.c3.name;
        document.getElementById("P1size").innerHTML = gamedata.planet1.size;
        document.getElementById("P2outermaterial").innerHTML = gamedata.planet2.c1.name;
        document.getElementById("P2innermaterial").innerHTML = gamedata.planet2.c2.name;
        document.getElementById("P2corematerial").innerHTML = gamedata.planet2.c3.name;
        document.getElementById("P2size").innerHTML = gamedata.planet2.size;
        document.getElementById("P3outermaterial").innerHTML = gamedata.planet3.c1.name;
        document.getElementById("P3innermaterial").innerHTML = gamedata.planet3.c2.name;
        document.getElementById("P3corematerial").innerHTML = gamedata.planet3.c3.name;
        document.getElementById("P3size").innerHTML = gamedata.planet3.size;
        document.getElementById("P4outermaterial").innerHTML = gamedata.planet4.c1.name;
        document.getElementById("P4innermaterial").innerHTML = gamedata.planet4.c2.name;
        document.getElementById("P4corematerial").innerHTML = gamedata.planet4.c3.name;
        document.getElementById("P4size").innerHTML = gamedata.planet4.size;
        document.getElementById("P5outermaterial").innerHTML = gamedata.planet5.c1.name;
        document.getElementById("P5innermaterial").innerHTML = gamedata.planet5.c2.name;
        document.getElementById("P5corematerial").innerHTML = gamedata.planet5.c3.name;
        document.getElementById("P5size").innerHTML = gamedata.planet5.size;
      }

      if (gamedata.tech.antennaMk3 === 1) {
        document.getElementById("Planet1").style.display = "flex";
        document.getElementById("Planet2").style.display = "flex";
        document.getElementById("Planet3").style.display = "flex";
        document.getElementById("Planet4").style.display = "flex";
        document.getElementById("Planet5").style.display = "flex";
      } else if (gamedata.tech.antennaMk2 === 1) {
        document.getElementById("Planet1").style.display = "flex";
        document.getElementById("Planet2").style.display = "flex";
        document.getElementById("Planet3").style.display = "none";
        document.getElementById("Planet4").style.display = "none";
        document.getElementById("Planet5").style.display = "none";
      } else {
        document.getElementById("Planet1").style.display = "flex";
        document.getElementById("Planet2").style.display = "none";
        document.getElementById("Planet3").style.display = "none";
        document.getElementById("Planet4").style.display = "none";
        document.getElementById("Planet5").style.display = "none";
      }
    }
  } else {
    log("Not enough money.", true)
    // document.getElementById("logs").value = document.getElementById("logs").value + "\n> Not enough money.";
    // glow(document.getElementById("logs"));
  }
}

function prestige1(n) {
  if (confirm("Are you sure you want to travel to this planet?")) {
    save();
    clearInterval(saveGameLoop);
    gamedata.money -= gamedata.prestigeCost;
    Object.entries(gamedata.shipStock).forEach(([key, value]) => {
      prestige.res[key] = gamedata.shipStock[key];
    });
    gamedata.prestigeNb += 1;
    prestige.tech = gamedata.tech;
    prestige.BP = gamedata.BP;
    prestige.RP = gamedata.RP;
    prestige.shipCargoLvl = gamedata.shipCargoLvl,
    prestige.shipMaxCargo = gamedata.shipMaxCargo,
    //prestige.shipCapacity = gamedata.shipCapacity,
    //prestige.shipBayCapacity = gamedata.shipBayCapacity,    
    prestige.minePower = gamedata.minePower;
    prestige.rare = gamedata.rare;
    prestige.outermaterial = gamedata["planet" + n].c1;
    prestige.innermaterial = gamedata["planet" + n].c2;
    prestige.corematerial = gamedata["planet" + n].c3;
    prestige.planetSize = gamedata["planet" + n].size;
    prestige.money = gamedata.money;
    prestige.prestigeCost = gamedata.prestigeCost;
    prestige.prestigeCreep = gamedata.prestigeCreep;
    prestige.prestigeNb = gamedata.prestigeNb;
    prestige.prestigeTime = gamedata.prestigeTime;
    prestige.coordinatesNb = gamedata.coordinatesNb;
    prestige.newgame = false;
    localStorage.clear();
    localStorage.setItem("PrestigeSave", JSON.stringify(prestige));
    chooseRegion('map', 'map');
    document.location.reload(true);
  }
}

function glow(el) {
  el.classList.remove("glow");
  void el.offsetWidth;
  el.classList.add("glow");
}

function blink(el) {
  el.classList.remove("blink");
  void el.offsetWidth;
  el.classList.add("blink");
}

App = {};
App.view = {};
App.control = {};
App.model = {};

App.model.nbStars = 200;

App.view.init = function() {
  App.view.zone = function() {
    App.view.zone = document.createElement("div");
    document.body.appendChild(App.view.zone);
    App.view.zone.id = "zone";
  }
  App.view.createStar = function() {
    App.view.star = document.createElement("div");
    App.view.zone.appendChild(App.view.star);
    App.view.star.className = "stars";
    // App.view.star.style.top = Math.floor(Math.random() * parseInt(App.view.zone.style.height)) + "vh";
    // App.view.star.style.left = Math.floor(Math.random() * parseInt(App.view.zone.style.width)) + "vw";
    App.view.star.style.top = Math.floor(Math.random() * 100) + "vh";
    App.view.star.style.left = Math.floor(Math.random() * 200) + "vw";

    var tmp = Math.random() * 0.5;
    App.view.star.style.width = tmp + "rem";
    App.view.star.style.height = tmp + "rem";
  }

  App.view.multiStars = function() {
    for (var i = 0; i < App.model.nbStars; i++) {
      App.view.createStar();
    }
  }
  App.view.zone();
  App.view.multiStars();
}

App.start = function() {
  App.view.init();
}
App.start();


function cheat(){
  Object.entries(gamedata.res).forEach(([key, value]) => {
    gamedata.res[key] += 10000;
  });
  gamedata.money += 10000;
  gamedata.RP += 10000;
}

function shipCheat(){
  document.getElementById("ship").style.display = "block";
  document.getElementById("timer").style.display = "none";
}