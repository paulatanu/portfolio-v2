const roles = [
  "GIS Expert",
  "Data Analyst",
  "Simulation Test Engineer"
];

let i = 0;
const roleElement = document.getElementById("role");

function changeRole() {
  roleElement.innerText = roles[i];
  i = (i + 1) % roles.length;
}

setInterval(changeRole, 2000);
changeRole();
