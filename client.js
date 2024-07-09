// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
let employeeBonuses = [];

let testEmployee = {
  name: 'Atticus',
  employeeNumber: '2405',
  annualSalary: '47000',
  reviewRating: 3
}

function calculateAllEmployeeBonus(listOfEmployees) {
for (let i=0; i<listOfEmployees.length; i++) {
console.log(calculateIndividualEmployeeBonus(listOfEmployees[i]))
employeeBonuses = [];
}
}

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  

let ratingBonus = 0;
let yearBonus = 0;

if (employee.reviewRating <= 2) {
  ratingBonus = 0;
} else if (employee.reviewRating === 3) {
  ratingBonus = 4;
} else if (employee.reviewRating === 4) {
  ratingBonus = 6;
} else if (employee.reviewRating === 5) {
  ratingBonus = 10;
}

if (employee.employeeNumber.length === 4) {
    yearBonus = 5
}

let fullBonus = ratingBonus + yearBonus;

let annualIncome = Number(employee.annualSalary)

if (annualIncome > 65000) {
 fullBonus = fullBonus - 1;
}

if (fullBonus > 13) {
  fullBonus = 13;
} else if (fullBonus < 0) {
  fullBonus = 0;
}
let totalPercentage = fullBonus/100;

let totalBonusValue = Math.round(annualIncome * totalPercentage);

let fullCompensation = annualIncome + totalBonusValue;

employeeBonuses.push(
  {
    name: `${employee.name}`,
    bonusPercentage: `${fullBonus}`,
    totalCompensation: `${fullCompensation}`,
    totalBonus: `${totalBonusValue}`,
  }
)

return employeeBonuses;
}

calculateAllEmployeeBonus(employees);
console.log(employeeBonuses);