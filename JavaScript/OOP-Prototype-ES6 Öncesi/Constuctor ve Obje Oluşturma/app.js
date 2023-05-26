function Employee(name,age,salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
this.showInfos = function(){
    console.log(this.name,this.age,this.salary);
}
}

const emp1 = new Employee("Serhat",23,4000);

const emp2 =new Employee("a",23,4500);

const emp3 = new Employee("Mehmet",29,5000);

emp1.showInfos();
emp2.showInfos();
emp3.showInfos();


