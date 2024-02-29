export { };

// EXAMPLE 1 - Exclamation Mark (non-null assertion) operator in TypeScript

type Employee = {
  id: number;
  name: string;
};

function getEmployeeName(emp?: Employee) {
  return emp!.name; // 👈️ use non-null assertion
}

// 👇️ "Bobby Hadz"
console.log(getEmployeeName({ id: 1, name: 'Bobby Hadz' }));

// ---------------------------------------------------

// // EXAMPLE 2 - Using a type assertion

// type Employee = {
//   id: number;
//   name: string;
// };

// function getEmployeeName(emp?: Employee) {
//   return (emp as Employee).name; // 👈️ type assertion
// }

// // 👇️ "Bobby Hadz"
// console.log(getEmployeeName({ id: 1, name: 'Bobby Hadz' }));

// ---------------------------------------------------

// // EXAMPLE 3 - Using optional chaining operator

// type Employee = {
//   id: number;
//   name: string;
// };

// function getEmployeeName(emp?: Employee) {
//   return emp?.name; // 👈️ use optional chaining
// }

// // 👇️ "Bobby Hadz"
// console.log(getEmployeeName({ id: 1, name: 'Bobby Hadz' }));

// ---------------------------------------------------

// // EXAMPLE 4 - Using an `if` statement as a type guard

// type Employee = {
//   id: number;
//   name: string;
// };

// function getEmployeeName(emp?: Employee) {
//   if (emp) {
//     // 👉️ emp is type Employee here
//     return emp.name;
//   }

//   // 👉️ emp is type undefined here
//   return 'Bobby Hadz';
// }

// // 👇️ "Bobby Hadz"
// console.log(getEmployeeName({ id: 1, name: 'Bobby Hadz' }));