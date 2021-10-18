// function scope

let subject

function createThink(subject) {
    subject = 'study'
}

console.log(subject)
createThink()
console.log(subject)