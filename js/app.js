"use strict";

let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "Total",
];
let tableid = document.getElementById("tableId");
let arrayOfTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let totalOfTotal = 0;
let tfooting = document.createElement("tfoot");

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function Cities(location, minCust, maxCust, avgCookieSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.custPerHour = [];
  this.cookie = [];
  this.total = 0;
}
Cities.prototype.updatecustPerHour = function () {
  for (let i = 0; i < hours.length - 1; i++) {
    this.custPerHour.push(randomValue(this.minCust, this.maxCust));
    //console.log(this.custPerHour[i]);
  }
};
Cities.prototype.updatecookiesPerhour = function () {
  for (let i = 0; i < hours.length - 1; i++) {
    this.cookie.push(this.custPerHour[i] * Math.floor(this.avgCookieSale));
    this.total = this.total + this.cookie[i];
   // arrayOfTotal[i] = arrayOfTotal[i] + this.cookie[i];
    // console.log(this.cookie[i]);
    // console.log("the total"+this.total);
  }

  this.cookie[this.cookie.length] = this.total;
  totalOfTotal += this.total;
  //console.log(arrayOfTotal);
  //console.log(this.cookie[this.cookie.length-1]);
};

Cities.prototype.createElement = function () {
  let trEl = document.createElement("tr");
  tableid.appendChild(trEl);
  let tdEl1 = document.createElement("td");
  trEl.appendChild(tdEl1);
  tdEl1.textContent = this.location;
  let tdEl;
  for (let i = 0; i < this.cookie.length; i++) {
    tdEl = document.createElement("td");
    trEl.appendChild(tdEl);
    tdEl.textContent = this.cookie[i];
  }
};
Cities.prototype.updateFooters = function () {
  for (let i = 0; i < this.cookie.length; i++) {
    arrayOfTotal[i] += this.cookie[i];
  }
};

function heading() {
  let theading = document.createElement("thead");
  tableid.appendChild(theading);
  let trEl = document.createElement("tr");
  theading.appendChild(trEl);
  let tdEl1 = document.createElement("td");
  trEl.appendChild(tdEl1);
  tdEl1.textContent = "cities";
  let thEl;
  for (let i = 0; i < hours.length; i++) {
    thEl = document.createElement("th");
    trEl.appendChild(thEl);
    thEl.textContent = hours[i];
  }
}

function footers() {
  tableid.appendChild(tfooting);
  let trEl = document.createElement("tr");
  tfooting.appendChild(trEl);
  let tdEl1 = document.createElement("td");
  trEl.appendChild(tdEl1);
  tdEl1.textContent = "Total";
  let tdEl;
  for (let i = 0; i < hours.length - 1; i++) {
    tdEl = document.createElement("td");
    trEl.appendChild(tdEl);
    tdEl.textContent = `${arrayOfTotal[i]}`;
  }
  tdEl = document.createElement("td");
  trEl.appendChild(tdEl);
  tdEl.textContent = `${totalOfTotal}`;
}


const form = document.getElementById("citiesform");
form.addEventListener("submit", citiesCreator);

function citiesCreator(event) {
  event.preventDefault();

  let locationName = event.target.locationName.value;
  console.log(typeof locationName + locationName);

  let mincust = parseInt(event.target.mincust.value);
  console.log(typeof mincust + mincust);

  let maxcust = parseInt(event.target.maxcust.value);
  console.log(typeof maxcust + maxcust);

  let avgCookieSale = parseFloat(event.target.avgCookieSale.value);
  console.log(typeof avgCookieSale + avgCookieSale);

  let newCity = new Cities(locationName, mincust, maxcust, avgCookieSale);
  console.log(newCity);
  newCity.updatecustPerHour();
  newCity.updatecookiesPerhour();
  newCity.createElement();
  newCity.updateFooters();
}

heading();

let seattle = new Cities("Seattle", 23, 65, 6.3);
seattle.updatecustPerHour();
//console.log(seattle);
seattle.updatecookiesPerhour();
seattle.createElement();
seattle.updateFooters();

let tokyo = new Cities("Tokyo", 3, 24, 1.2);
tokyo.updatecustPerHour();
tokyo.updatecookiesPerhour();
tokyo.createElement();
tokyo.updateFooters();

let dubai = new Cities("Dubai", 11, 38, 3.7);
dubai.updatecustPerHour();
dubai.updatecookiesPerhour();
dubai.createElement();
dubai.updateFooters();

let paris = new Cities("Paris", 20, 38, 2.3);
paris.updatecustPerHour();
paris.updatecookiesPerhour();
paris.createElement();
paris.updateFooters();

let lima = new Cities("Lima", 2, 16, 4.6);
lima.updatecustPerHour();
lima.updatecookiesPerhour();
lima.createElement();
lima.updateFooters();

if(form)
{
  tfooting.remove();
  footers();
}else{footers();}

