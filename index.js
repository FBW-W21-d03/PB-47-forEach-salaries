const salary2021 = [
  1980.0,

  2050.0,

  3045.5,

  1050.0,

  4678.9,

  2800.0,

  2699.5,
];

const salary2022 = [];

salary2021.forEach (
    (gehältern) => {
        
        salary2022.push((gehältern * 1.04).toFixed(2));
        console.log(salary2022)

    }
    );
    console.log(salary2021);
    console.log(salary2022);
