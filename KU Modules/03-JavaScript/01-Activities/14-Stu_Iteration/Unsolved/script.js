// WRITE YOUR CODE BELOW
const students = ['Daniel','Brett', 'Kinnedy', 'John', 'Jacob']
console.log(students.length)
for (let i=0; i<5; i++){
    console.log(`Great to see you, ${students[i]}!`)
}

for (const name of students){
    console.log(`Great to see you, ${name}!`)
}