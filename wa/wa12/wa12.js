// let Workers = '{ "employees" : [' +
// '{ "firstName":"sam" , "department":"Tech", "designation":"Manager" , "salary":"40000" , "raiseEligable":"True" },' +
// '{ "firstName":"mary" , "department":"Finance", "designation":"Trainee" , "salary":"18500" , "raiseEligable":"True" },' +
// '{ "firstName":"Bill" , "department":"HR", "designation":"Executive" , "salary":"21200" , "raiseEligable":"False" },'
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';



// Problem 1: Create JSON for each employee
const employees = [
    {
      "first_name": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raise_eligible": true
    },
    {
      "first_name": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raise_eligible": true
    },
    {
      "first_name": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raise_eligible": false
    }
  ];
  
  console.log(employees);
  
  // Problem 2: Create JSON for the company
  const company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": employees
  };
  
  console.log(company);
  
  // Problem 3: Add a new employee to the company
  const newEmployee = {
    "first_name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise_eligible": false
  };
  
  company.employees.push(newEmployee);
  console.log(company);


// Problem 4: Calculate the total salary for all company employees
let totalSalary = 0;

for (let i = 0; i < company.employees.length; i++) {
  totalSalary += company.employees[i].salary;
}

console.log("Total salary for all employees: " + totalSalary);

// Problem 5: Give a raise to eligible employees and set eligibility to false
for (let i = 0; i < company.employees.length; i++) {
  if (company.employees[i].raise_eligible) {
    company.employees[i].salary *= 1.1;
    company.employees[i].raise_eligible = false;
  }
}

console.log(company);

// Problem 6: Update company JSON with information about who's working from home
const workingFromHome = ['Anna', 'Sam'];

for (let i = 0; i < company.employees.length; i++) {
  if (workingFromHome.includes(company.employees[i].first_name)) {
    company.employees[i].wfh = true;
  } else {
    company.employees[i].wfh = false;
  }
}

console.log(company);