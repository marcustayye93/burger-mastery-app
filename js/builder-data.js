
export const builderCatalogue = {
  meats: [
    {id:"beef80", label:"80/20 beef", kcal100:254, protein100:17.2, fat100:20, carbs100:0,
      scores:{juiciness:94,tenderness:88,beefiness:96,richness:90,crust:91,structure:79},
      note:"The classic balance: rich, forgiving and strongly beef-forward."},
    {id:"beef85", label:"85/15 beef", kcal100:215, protein100:19, fat100:15, carbs100:0,
      scores:{juiciness:84,tenderness:84,beefiness:94,richness:80,crust:92,structure:85},
      note:"A balanced everyday patty with good crust and slightly fewer calories."},
    {id:"beef90", label:"90/10 lean beef", kcal100:176, protein100:20.5, fat100:10, carbs100:0,
      scores:{juiciness:70,tenderness:75,beefiness:91,richness:66,crust:94,structure:90},
      note:"Protein-dense and crust-friendly. Gentle handling and careful doneness protect moisture."},
    {id:"beefpork", label:"80% beef · 20% pork", kcal100:236, protein100:17.5, fat100:18, carbs100:0,
      scores:{juiciness:92,tenderness:93,beefiness:80,richness:91,crust:87,structure:81},
      note:"Softer and subtly sweeter, with a particularly tender bite."},
    {id:"beeflamb", label:"80% beef · 20% lamb", kcal100:248, protein100:17.8, fat100:19, carbs100:0,
      scores:{juiciness:91,tenderness:87,beefiness:76,richness:95,crust:88,structure:82},
      note:"Deep, aromatic and savoury. Excellent with sharp or acidic condiments."}
  ],
  cheeses: [
    {id:"none",label:"No cheese",grams:0,kcal:0,protein:0,fat:0,carbs:0,sodium:0,richness:0,structure:0},
    {id:"american",label:"American-style",grams:20,kcal:62,protein:3.2,fat:5.0,carbs:1.5,sodium:270,richness:9,structure:8},
    {id:"cheddar",label:"Cheddar",grams:22,kcal:89,protein:5.5,fat:7.3,carbs:0.3,sodium:137,richness:12,structure:5},
    {id:"swiss",label:"Swiss",grams:22,kcal:84,protein:6.0,fat:6.4,carbs:0.4,sodium:42,richness:9,structure:6},
    {id:"provolone",label:"Provolone",grams:22,kcal:77,protein:5.7,fat:5.8,carbs:0.5,sodium:193,richness:8,structure:7},
    {id:"lightcheddar",label:"Reduced-fat cheddar",grams:22,kcal:62,protein:7.0,fat:3.5,carbs:0.6,sodium:170,richness:5,structure:5}
  ],
  buns: [
    {id:"brioche",label:"Brioche bun",kcal:220,protein:7,fat:7,carbs:33,sodium:340,structure:7},
    {id:"potato",label:"Potato bun",kcal:170,protein:6,fat:3,carbs:31,sodium:280,structure:9},
    {id:"sesame",label:"Sesame bun",kcal:190,protein:6.5,fat:4,carbs:34,sodium:300,structure:8},
    {id:"thin",label:"Thin wholemeal bun",kcal:120,protein:6,fat:2,carbs:22,sodium:230,structure:7},
    {id:"lettuce",label:"Lettuce wrap",kcal:15,protein:1,fat:0.2,carbs:3,sodium:20,structure:4}
  ],
  sauces: [
    {id:"classic",label:"Classic burger sauce",kcal:92,protein:0.4,fat:9,carbs:3,sodium:190,moisture:9},
    {id:"mayo",label:"Mayonnaise",kcal:100,protein:0.1,fat:11,carbs:0.2,sodium:90,moisture:10},
    {id:"mustard",label:"Yellow mustard",kcal:9,protein:0.5,fat:0.5,carbs:0.8,sodium:180,moisture:3},
    {id:"ketchup",label:"Ketchup",kcal:20,protein:0.2,fat:0,carbs:5,sodium:160,moisture:4},
    {id:"yoghurt",label:"Greek-yoghurt sauce",kcal:28,protein:3.0,fat:0.8,carbs:2.1,sodium:75,moisture:8},
    {id:"none",label:"No sauce",kcal:0,protein:0,fat:0,carbs:0,sodium:0,moisture:0}
  ],
  toppings: {
    standard:{label:"Lettuce, tomato, onion & pickles",kcal:28,protein:1.2,fat:0.2,carbs:6.2,sodium:180,structure:5},
    minimal:{label:"Pickles & onion",kcal:12,protein:0.4,fat:0.1,carbs:2.7,sodium:170,structure:3}
  }
};

export const defaultBuild = {
  name:"My Burger",
  meat:"beef85",
  weight:150,
  thickness:16,
  cheese:"american",
  bun:"potato",
  sauce:"classic",
  toppings:"standard"
};
