#JAVA TESTING GROUNDS

#Iteration 1
var user = new Object();
user.name = "Gav";
user.pass = "pass";

user.newPass = function(newPass) {
    this.pass=newPass; 
};


user.newPass("pass2")
console.log(user.pass)

#iteration 2
function entry(name, age, sex) {
    this.name = name; 
    this.age = age;
    this.sex = sex;
    this.getInfo = function() {
        console.log("Name: " + this.name + " Age: " + this.age + " Sex: " + this.sex);
    };
}

var nick = new entry("Michael", 22, "Male");
nick.getInfo()

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */
var myBalance = john.askTeller(1234)
console.log(myBalance)
