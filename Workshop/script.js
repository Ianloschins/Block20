const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
//   Inside your main() function, grab the "root" element. 
  const rootElement = document.getElementById('root');

// add an h1 element, give it text of "FREELANCERS", and append the HTML document.
  const h1 = document.createElement('h1');
  h1.innerHTML = 'FREELANCER';
  rootElement.appendChild(h1);
// Continue working inside your main() function to create an unordered list element.
const unorderedList = document.createElement('ul');
// Loop through the users array creating li elements.  
for (let i = 0; i < users.length; i++) {
  const user = users [i];
  user.innerHTML = user.name
  unorderedList.appendChild(user);
} 
// Append those elements to your HTML document.
rootElement.appendChild(unorderedList)
}
//call the main function
main();
