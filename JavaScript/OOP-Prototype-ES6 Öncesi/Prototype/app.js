function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    // this.showInfos = function(){
    //     // console.log("İsim: " + this.name + "Yaş: " + this.age );
    // }
}

Employee.prototype.showInfos = function () {
    console.log("İsim: " + this.name + " Yaş: " + this.age);
}

const emp1 = new Employee("Serhat", 23);
const emp2 = new Employee("Mehmet", 20);

console.log(emp1);
console.log(emp2);
emp2.showInfos();