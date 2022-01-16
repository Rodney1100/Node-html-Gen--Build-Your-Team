const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
// get the employee and filter based on job
const generateEmployee = (employeeArr) => {
  return ` 
    ${employeeArr
      .filter(({ office }) => office)
      .map(({ name, email, id, office }) => {
        return `
        <div class="card flexIt space border-primary" style="width: 18rem;">
            <h5 class="card-title card-header">Manager</h5>
            <ul class="pt">
                <li class="list-group-item">Name: ${name}</li>
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a class="underline" href = "mailto: ${email}"> ${email}</a></li>
                <li class="list-group-item">Office Number: ${office}</li>
            </ul>
        </div>
       ` 
      })}
    ${employeeArr
      .filter(({ github }) => github)
      .map(({ name, email, id, github }) => {
        return `
        <div class="card flexIt space border-success" style="width: 18rem;">
        <h5 class="card-title card-header">Engineer</h5>
         <ul class="pt">
            <li class="list-group-item">Name: ${name}</li>
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a class="underline" href = "mailto: ${email}"> ${email}</a></li>
            <li class="list-group-item">Github: <a class="underline" href="https://github.com/${github}" target="_blank">${github}</a></li>
         </ul>
        </div>
        `
      })}
    ${employeeArr
      .filter(({ school }) => school)
      .map(({ name, email, id, school }) => {
        return `
        <div class="card flexIt space border-info" style="width: 18rem;">
        <h5 class="card-title card-header">Intern</h5>
        <ul class="pt">
            <li class="list-group-item">Name: ${name}</li>
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a class="underline" href = "mailto: ${email}"> ${email}</a></li>
            <li class="list-group-item">School: ${school}</li>
        </ul>
        </div>
          `
      })}
`;
};

// export function to generate entire page
module.exports = (templateData) => {
  console.log(templateData);

  return ` 
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http - equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> My Team
    </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../src/style.css">
</head>

<body>
    <header>
        <div class="container py-3">
            <h1 class="text-secondary py-2 px-3"> My Team</h1>
            <nav class="flex-row">
            </nav>
        </div>
    </header>
    <main class="container flexIt my-5">
        ${generateEmployee(templateData)}
    </main>
    <footer class="container text-center py-3">
        <h3 class="text-dark"> &copy; ${new Date().getFullYear()}
        </h3>
    </footer>
</body>
</html>
        `;
};
