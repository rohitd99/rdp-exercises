// Arrays of objects
const employees = [
  {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    occupation: 'Software Engineer'
  },
  {
    name: 'Jane Smith',
    age: 25,
    city: 'San Francisco',
    occupation: 'Web Developer'
  },
  {
    name: 'Bob Johnson',
    age: 40,
    city: 'Los Angeles',
    occupation: 'Data Scientist'
  }
];

const updatedEmployees = employees.map((employee) => {
  employee.city = "New York";
  return employee;
});

updatedEmployees.forEach((emp) => emp.age = 20);

console.log(employees);
console.log(updatedEmployees);