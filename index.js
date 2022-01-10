const salary2021=[1980.00,2050.00,3045.00,1050.00,4678.00,2800.00,2699.00]
let   salary2022=[]
salary2021.forEach(
    (gehalt) => {
        salary2022.push(gehalt*1.04);
    }
);
console.log(salary2021)
console.log(salary2022);