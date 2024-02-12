//process.argv
// console.log(process.argv[0]);
// console.log(process.argv[1]);
// console.log(process.argv[2]);
// console.log(process.argv[3]);
// const name = process.argv[2] || "World";
// console.log(`Hello ${name}`);

const name =capitial (process.argv[2] || "World");
console.log(`Hello ${name}`);

function capitial(str){
   return str
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word =>word.charAt(0).toUpperCase()+ word.slice(1)))
    .join(" ")
    
}