const gehalten = [1980.00, 2050.00, 3045.50, 1050.00, 4678.90, 2800.00, 2699.50, 
    ];

const gehalt2022 = [];


gehalten.forEach(
    (gehalt)=>{
        gehalt2022.push((gehalt * 1.04).toFixed(2));
        console.log(gehalt2022);
    }
);
