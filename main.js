createHeader();
function createHeader(){
  let setHtml = document.querySelector("html");
  setHtml.setAttribute("style", "text-align: center; margin: 0px; padding: 0px; font-family: 'Roboto', sans-serif;");
  let setHeader = document.querySelector("body");
  let holder = `
  <h1>INTERNAL COMPANY DIRECTORY</h1>
  <div id="flexbox_project_holder" style="display: flex; justify-content: space-around; flex-flow: row wrap; padding: 2% 10%;"></div>
  `;
  setHeader.innerHTML = holder;
}
let setParent = document.getElementById("flexbox_project_holder");
for (let i = 0; i < customers.results.length; i++){
  console.log(customers.results[i]);
  // <div style="width: 100%; height: 100%; background-size: cover; background-image: url('${customers.results[i].picture.large}');"></div>
  // <img src=${customers.results[i].picture.large} style="width: 90%;">
  let holder = `
    <div style="margin: 2% 0%;">
      <img src=${customers.results[i].picture.large} style="width: 250px; height: 250px;">
      <h2 style="text-decoration: underline; text-decoration-color: #5BFFC0;">${customers.results[i].name.first.toUpperCase()} ${customers.results[i].name.last.toUpperCase()}</h2>
      <p style="font-size: 13px; opacity: 0.5;">${customers.results[i].email.toUpperCase()}</p>
      <p>${customers.results[i].location.street}<br>${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}<br>${customers.results[i].cell}<br></p>
      <span>${customers.results[i].id.value}</span>
    </div>
  `;
  setParent.innerHTML += holder;
}
