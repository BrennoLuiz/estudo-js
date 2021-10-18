// 1. Declare uma variável de nome weight

    let weight;

// 2. Que tipo de dado é a variável acima

    console.log(typeof weight)

/* 3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/
        let name = 'Kel'
        let age = 13
        let stars = 5.5
        let isSubscribed = true

/* 4. A variável student abaixo é de que tipo de dado?

   4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

   4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> pelos valores de cada propriedade do objeto
*/

let student = {
    name: 'Kel',
    age: 13,
    weight: 38,
    stars: 5.5,
    isSubscribed: true
};

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/* 
   5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

   // let students = []

/* 
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array0)
*/

    let students = [
        student
    ]

    console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima
*/

    console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do array students
*/

    const hero = {
        name: 'Hero',
        age: 15,
        weight: 50.4,
        isSubscribed: true
    }

    students[1] = hero

    console.log(students)