// write a node js script to create a class name person,by assigning name and age as a argument , create a function name
//elder which return elder func object details of elder person should be printed in console as well as  on file ..

class Person{
    constructor(name,age){
        this.age=age
        this.name=name
    }
    elder(p){
        if(this.age>p.age){
            return this
        }
        else{
            return p
        }
    }
}
var p1=new Person("xyz",25)
var p2=new Person("abc",30)
var p3=p1.elder(p2)
console.log("Elder Person is ::"+p3.name +" Age is ::"+p3.age)
fs=require("fs")
a=JSON.stringify(p3)
fs.writeFileSync("elder.txt",a);