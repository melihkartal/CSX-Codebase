
// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];

let lentgthArray = firstNames.length;

const bios = [];

for (let i = 0 ; i < lentgthArray ; i++){
  bios.push("My name is " +  firstNames[i] +" " +  lastNames[i] +" and I am from " + places[i]);
  console.log(bios[i])
}