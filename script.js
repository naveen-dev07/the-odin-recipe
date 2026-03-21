const heroes = [
  { name: "Spider-Man", missions: 12 },
  { name: "Black Widow", missions: 8 },
  { name: "Captain America", missions: 20 },
  { name: "Hawkeye", missions: 5 },
];
const eliteHeroes = heroes.filter(hero => hero.missions >= 10)
console.log(eliteHeroes);

const filteredList = eliteHeroes.map(hero => hero.name + " upgraded");
console.log(filteredList);

const totalMisson = heroes.reduce((total , hero) => total + hero.missions , 0)
console.log(totalMisson);

