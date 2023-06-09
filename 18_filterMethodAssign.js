class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("...Get the list of wipro employee names :");
const arrayWiproEmployees = array_employees.filter( (employee) => {
    return employee.emp_company == "Wipro";
} );
const arrayWiproEmployeeNames = arrayWiproEmployees.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayWiproEmployeeNames);

console.log("...Find all the employees for 'IT' or 'HR': ");
const arrayEmpDept=array_employees.filter((employee)=>{
    return employee.emp_dept==  "IT" || employee.emp_dept=="HR";
});

const arrayDeptEmployeesNames=arrayEmpDept.map((employee)=>{
    return employee.emp_name;
})
console.log(arrayDeptEmployeesNames);

console.log("...Get the list of employee  whose age is greater than equal 50 :");
const arrayAge = array_employees.filter( (employee)=> {
    return employee.emp_id>=50;
});
const arrayIds =arrayAge.map( (employee)=> {
    return employee.emp_name;
});
console.log(arrayIds);

console.log("...Find all the employees whose names start with letter'A'or 'V' or 'M' : ");





console.log("...Find out the average salary of all employees :");
const empSalaries = array_employees.map( (employee) => {
    return employee.emp_salary;
});
const sulSalary =empSalaries.reduce( (runningTotal, value) => {
    return runningTotal+value;
   
});
console.log(sulSalary);

console.log("...Find all the average salary for IT department :");
const itSalary=array_employees.filter((employee)=>{
    return employee.emp_dept ==  "IT";
});
let sumSalary=0;
itSalary.forEach ((employee)=>{
    sumSalary=sumSalary+employee.emp_salary;
});
const average=sumSalary/itSalary.length;
console.log(average);

console.log(".............................Map().............................");
console.log("...Get the list of all employee names :");
const empNames = array_employees.map( (employee)=> {
    return employee.emp_name;

} );

console.log(empNames);

console.log("...Get the list of all employee department :");
const empDepartmentMap= array_employees.map((employee)=>{
    return employee.emp_dept;
});
console.log(empDepartmentMap);

console.log("...Get the list of all employee ID : ");
const empId=array_employees.map((employee)=>{
return employee.emp_id;
});
console.log(empId);

