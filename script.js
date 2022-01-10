
const gehälter = [1980.00, 2050.00, 3045.00, 1050.00, 4678.90, 2800.00, 2699.50];
let gehälter2022 = [];
gehälter.forEach(
    (gehalt)=>{
        gehälter2022.push((gehalt* 1.04));
    }
);
console.log(gehälter)
console.log(gehälter2022)




