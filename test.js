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
