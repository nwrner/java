#JAVA TESTING GROUNDS
var user = new Object();
user.name = "Gav";
user.pass = "pass";

user.newPass = function(newPass) {
    this.pass=newPass; 
};


user.newPass("pass2")
console.log(user.pass)
