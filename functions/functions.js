/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

 function Person (name) {
    this.name = name
    this.walk = function () {
        return this.name + ' está andando'
    }
}

const brenno = new Person('Brenno')
const lucas = new Person('Lucas')
console.log(brenno.walk())
console.log(lucas.walk())