createHeader();
function createHeader(){
  let setHtml = document.querySelector("html");
  setHtml.setAttribute("style", "text-align: center; margin: 0; padding: 0;");
  let setHeader = document.querySelector("body");
  let holder = `
  <h1>INTERNAL COMPANY DIRECTORY</h1>
  <div id="flexbox_project_holder" style="display: flex; justify-content: center; flex-flow: row wrap; padding: 5%;"></div>
  `;
  setHeader.innerHTML = holder;
}
let setParent = document.getElementById("flexbox_project_holder");
for (let i = 0; i < customers.results.length; i++){
  let newDiv = document.createElement("div");
  setParent.appendChild(newDiv);
  console.log(customers.results[i]);
  let holder = `
    <div>
      <img src=${customers.results[i].picture.large} style="width: 90%;">
      <h2>${customers.results[i].name.first.toUpperCase()}</h2>
      <p>${customers.results[i].email.toUpperCase()}</p>
      <p>${customers.results[i].location.street}<br>${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}<br>${customers.results[i].cell}<br></p>
      <span>${customers.results[i].id.value}</span>
    </div>
  `;
  setParent.innerHTML += holder;
}
