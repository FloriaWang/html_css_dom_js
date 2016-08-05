function Person(name,age){
	this.name=name;
	this.age=age;
	Person.prototype.introduce=function(){
		return "I am "+this.name+", I am "+this.age+" years old!";
	}
}
var jerry = new Person("Jerry", 2);
console.log(jerry.introduce());
var tom = new Person("Tom", 12);
console.log(tom.introduce());