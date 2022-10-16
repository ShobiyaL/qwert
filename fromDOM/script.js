const fnameElm = document.getElementById("First-name");
const lnameElm = document.getElementById("Last-name");
const addressElm = document.getElementById("Address");
const genderRadioElm = document.getElementsByName("Gender");
const pincodeElm = document.getElementById("Pincode");
const countryElm = document.getElementById("Country");
const stateElm = document.getElementById("State");
const FoodElm = document.getElementById("Food");

const pincodeAlert = document.getElementById("pincode-alert");
const submitbtn = document.getElementById("submit");

const pincodePattern = /^\d{6}$/;
let user = [];
let userObj = {};
let pincode = "";
let isOldData = null;

pincodeElm.addEventListener("keyup", () => {
  if (pincodeElm.value.split("").length < 6) {
    return;
  } else {
    //   Pincode validation
    if (pincodePattern.test(pincodeElm.value)) {
      pincode = pincodeElm.value;
      pincodeAlert.textContent = "Accepted";
      pincodeAlert.setAttribute("class", "text-success");
      submitbtn.removeAttribute("disabled");
    } else {
      pincodeAlert.textContent = "Rejected";
      pincodeAlert.setAttribute("class", "text-danger");
      submitbtn.setAttribute("disabled", "true");
    }
    console.log(pincode);
  }
});

function getData() {
  let firstName = fnameElm.value;
  let lastName = lnameElm.value;
  let address = addressElm.value;
  let country = countryElm.value;
  let state = stateElm.value;
  let male = genderRadioElm[0];
  let female = genderRadioElm[1];
  let gender = "";
  let foods = [];

  //radio
  if (male.checked) {
    gender = male.value;
  } else if (female.checked) {
    gender = female.value;
  }
  console.log("gender", gender);

  
  if (FoodElm.options.selectedIndex > -1) {
    [...FoodElm.options].forEach((el) => {
      if (el.selected) {
        foods.push(el.value);
      }
    });
  }
  console.log(foods, "Food");

  userObj = {
    FirstName: firstName,
    LastName: lastName,
    Address: address,
    Gender: gender,
    Foods: foods,
    Pincode: pincode,
    Country: country,
    State: state,
  };
  return userObj;
}

function formSubmit() {
  let userObject = getData();
  console.log("isolddata value", isOldData);
  if (isOldData !== null) {
    user[isOldData] = { ...userObject };
    console.log("OldData", isOldData, user[isOldData], userObject);
  } else {
    user.push(userObject);
    console.log("newData", user);
  }

  generateTable(user);
  clearInput();
}

function editValues(id) {
  let obj = user[id];
  clearInput();
  console.log(obj, "From editVAlues func");
  fnameElm.value = obj.FirstName;
  lnameElm.value = obj.LastName;
  addressElm.value = obj.Address;

  if (obj.Gender === "Male") {
    genderRadioElm[0].checked = true;
  } else {
    genderRadioElm[1].checked = true;
  }

  pincodeElm.value = obj.Pincode;
  countryElm.value = obj.Country;
  stateElm.value = obj.State;

  document.getElementById(
    "Food-selector"
  ).textContent = `Selected ${obj.Foods[0]} and ${obj.Foods[1]}`;
  document.getElementById(`${obj.Foods[1]}`).selected = true;
  document.getElementById(`${obj.Foods[0]}`).selected = true;
 

  isOldData = id;
  console.log("isolddata value", isOldData);
  
}


function clearInput() {
  fnameElm.value = "";
  lnameElm.value = "";
  addressElm.value = "";
  genderRadioElm[0].checked = false;
  genderRadioElm[1].checked = false;
  pincodeElm.value = "";
  countryElm.value = "";
  stateElm.value = "";
  FoodElm.options.selectedIndex = -1;
  
  isOldData = null; 
}

const tbody = document.getElementById("table-body");
const tr = document.createElement("tr");
const td = document.createElement("td");

function generateTable(users) {
  tbody.textContent = "";
  users.map((userdata, i) => {
    console.log(users, "Data", userdata);
    return (tbody.innerHTML += `
      <tr id=${i} onclick="editValues(${i})" class="text-center">
      <td>${userdata.FirstName}</td>
      <td>${userdata.LastName}</td>
      <td>${userdata.Address}</td>
      <td>${userdata.Pincode}</td>
      <td>${userdata.Gender}</td>
      <td>
      <li>${userdata.Foods[0]}</li>
      <li>${userdata.Foods[1]}</li>
      </td>
      <td>${userdata.State}</td>
      <td>${userdata.Country}</td>
      </tr>
      `);
  });
}