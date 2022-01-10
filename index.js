// 1 )
const salary2021 = [1980.00, 2050.00, 3045.50, 1050.00, 4678.90, 2800.00, 2699.50, 
    ];
console.log(salary2021);

// 2 )
const salary2022 = [];
console.log(salary2022);

// 3 )
salary2021.forEach(
    (prozent) => {
       salary2022.push((prozent * 1.04).toFixed(2));
    }
       )
       console.log(salary2022);





