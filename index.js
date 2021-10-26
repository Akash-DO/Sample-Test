const express  = require("express")

const app = express()


function Calculate(v1){
    
    this.a = v1
    this.c = v1*v1
    this.d = v1 +v1

    this.zz = {x:0, y: 6}

}


class test1 {
    constructor (a, b){
this.a1 = a
this.b1 = b
    }

  hello(){
      
    console.log(this.a1 ?? "Missing",  "classTest")
  }


}

let testIns = new test1("")

testIns.hello()

 let c = new Calculate(5)

console.log(c, "ccc")

// person = {
// name: "akash",
// run(){
//     console.log(this.name)
// }
// }

//  export class student{

//     constructor(num1, num2){
// this.num1 = num1,
// this.num2 = num2
//     }

//     mutiply(){
//         console.log(this.num1*this.num2)
//     }
// }

//  export class Teacher extends student{

//     constructor(num1, num2){
//      super(num1, num2)
//     }

// add(){
//     console.log(this.num1 + this.num2)
// }
// }

// let teacher1 = new Teacher(5,4)

// teacher1.mutiply()

// teacher1.add()


// person.run()

// let runn = person.run.bind(person)

// runn()

app.listen(3000, ()=>{
    console.log("server RUNNING")
})

