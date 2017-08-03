let createPage = () => {
  let setHtml = document.querySelector("html");
  setHtml.setAttribute("style", "text-align: center; margin: 0px; padding: 0px; font-family: 'Roboto', sans-serif;");
  let setHeader = document.querySelector("body");
  let holder = `
  <h1>INTERNAL COMPANY DIRECTORY</h1>
  <div id="flexbox_project_holder" style="display: flex; justify-content: space-around; flex-flow: row wrap; padding: 2% 10%;"></div>
  `;
  setHeader.innerHTML = holder;
  for (let i = 0; i < customers.results.length; i++){
    let setParent = document.getElementById("flexbox_project_holder");
    let holder = `
      <div style="margin: 2% 0%;">
        <img src=${customers.results[i].picture.large} style="width: 250px; height: 250px;">
        <h2 style="text-decoration: underline; text-decoration-color: #5BFFC0; font-size: 20px;">${customers.results[i].name.first.toUpperCase()} ${customers.results[i].name.last.toUpperCase()}</h2>
        <p id="email_holder" style="font-size: 13px;">${customers.results[i].email.toUpperCase()}</p>
        <p>${customers.results[i].location.street}<br>${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}<br>${customers.results[i].cell}<br></p>
        <span>${customers.results[i].id.value}</span>
      </div>
    `;
    setParent.innerHTML += holder;
  }
}
createPage();
/*
let customerResults = customers.results;
function createProfile() {
    return `
    <h1>INTERNAL COMPANY DIRECTORY</h1>
    <div id="flexbox_project_holder" style="display: flex; justify-content: space-around; flex-flow: row wrap; padding: 2% 10%;">
        ${customerResults.map(customerProfile =>
        `
        <div style="margin: 2% 0%;">
          <img src=${customerProfile.picture.large} style="width: 250px; height: 250px;">
          <h2 style="text-decoration: underline; text-decoration-color: #5BFFC0; font-size: 20px;">${customerProfile.name.first.toUpperCase()} ${customerProfile.name.last.toUpperCase()}</h2>
          <p id="email_holder" style="font-size: 13px;">${customerProfile.email.toUpperCase()}</p>
          <li>${customerProfile.location.street}</li>
          <p>${customerProfile.location.street}<br>${customerProfile.location.city}, ${customerProfile.location.state} ${customerProfile.location.postcode}<br>${customerProfile.cell}<br></p>
          <span>${customerProfile.id.value}</span>
        </div>
        `
        )}
    </div>
    `;
}
let pageContent = `<header>Internal Company Directory</header> ${createProfile(customerResults)}`
document.body.innerHTML = pageContent;
*/
