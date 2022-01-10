/*
javaScript-forEach-salaries

Eine Firma schreibt alle Gehälter ihrer Mitarbeiter in eine Liste. Die Gehälter sollen jetzt zum Jahreswechsel pauschal für alle um 4 Prozent erhöht werden.
*/

console.log("-----------Aufgabenstellung - Teil 1");
let salary2021 = [1980.00 , 2050.00 , 3045.50 , 1050.00 , 4678.90 , 2800.00 , 2699.50];
console.log(salary2021);
    
console.log("-----------Aufgabenstellung - Teil 2");
let salary2022 = [];
console.log(salary2022);

console.log("-----------Aufgabenstellung - Teil 3");

salary2021.forEach(
    (salary) => {
       salary2022.push((salary * 1.04).toFixed(2));
      
       console.log(salary2022);
    }
);

console.log("-----------Aufgabenstellung - Teil 4");

console.log(salary2021);
console.log(salary2022);