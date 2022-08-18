const layersOrder = [
    { name: 'face', number: 1 },
    { name: 'eyes', number: 3 },
    { name: 'lips', number: 3 },
    { name: 'hair', number: 5 },
    { name: 'specs', number: 10 }
];
  
const format = {
    width: 1080,
    height: 2325
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 10;

module.exports = { layersOrder, format, rarity, defaultEdition };