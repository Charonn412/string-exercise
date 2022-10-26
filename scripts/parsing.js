function parseAndDisplayName(name) {
    let space = name.indexOf(' ');
    let firstName = name.substring(0,space);
    let lastName = name.substring(space + 1);
    console.log(firstName, lastName, name);
    let spanLast = document.getElementById('last')
    spanLast.innerText = lastName
    let spanFirst = document.getElementById('first')
    spanFirst.innerText = firstName
    let spanFullName = document.getElementById('full')
    spanFullName.innerText = name
}

parseAndDisplayName('Tom Cruz')






/* console.log('the script tag works');

let fullName = "Charonn Edwards";
console.log(`the variable fullName is: ${fullName}`);
let space = fullName.indexOf(' ');
console.log(space);
let fName = fullName.substring(0,space);
console.log(fName);
let lName = fullName.substring(space + 1);
console.log(lName); */