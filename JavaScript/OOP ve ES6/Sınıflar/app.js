// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showInfos = function(){

// console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);

// }

// const emp = new Employee("Mustafa",25,4000);

// console.log(emp);

//ES6 Kullanarak aynı kodu yazmaya çalışıyoruz

class Employee{

constructor(name,age,salary){
this.name = name;
this.age = age;
this.salary = salary;
}
showInfos(){
     console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
}
}


const emp = new Employee("Serhat",23,5000);


emp.showInfos();
// console.log(emp);