'use srtict ';

let time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const section = document.getElementById('place');
const articleElement = document.createElement('article');
section.appendChild(articleElement);
const tabelElement = document.createElement('table');
articleElement.appendChild(tabelElement);
let footerCells = [];
let myForm = document.getElementById('stores');
// let newOnes = document.getElementById('place');
function Lacations(location, minHourlyCustomers, maxHourlyCustomers, avgcookiesperCustomer) {
  this.location = location;
  this.total = 0;
  this.totalCulomn = 0;
  this.totalOfTotal = 0;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgcookiesperCustomer = avgcookiesperCustomer;
  this.custPerHoursArray = [];
  this.cookiesPerHours = [];
  this.custPerHours = function () {
    for (let i = 0; i < time.length; i++) {
      let custPerHours = Math.trunc(getRandomNumber(this.minHourlyCustomers, this.maxHourlyCustomers));
      this.custPerHoursArray.push(custPerHours);
    }
  };
  this.calCookiesPerHour = function () {
    this.custPerHours();
    for (let i = 0; i < time.length; i++) {
      let cookies = this.custPerHoursArray[i] * this.avgcookiesperCustomer;
      this.cookiesPerHours.push(Math.floor(cookies));
    }
  };
  this.tableHead = function () {
    const tableHeaderRow1 = document.createElement('tr');
    tabelElement.appendChild(tableHeaderRow1);
    const tableHeader = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader);
    tableHeader.textContent = 'City/Time';
    for (let i = 0; i < time.length; i++) {
      const tableHeader = document.createElement('th');
      tableHeaderRow1.appendChild(tableHeader);
      tableHeader.textContent = time[i];
    }
    const tableHeader16 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader16);
    tableHeader16.textContent = 'Daily Location Total';
  };
  this.sumOfcolumns = function () {
    let city = [seattle, Tokyo, Dubai, Paris, Lima];
    for (let i = 0; i < time.length; i++) {
      for (let x = 0; x < city.length; x++) {
        this.totalCulomn += city[x].cookiesPerHours[i];
      }
      footerCells.push(this.totalCulomn);
      this.totalOfTotal = this.totalOfTotal + this.totalCulomn;
      this.totalCulomn = 0;
    }
  };
}
Lacations.prototype.render = function () {
  this.calCookiesPerHour();
  const tableRow2 = document.createElement('tr');
  tabelElement.appendChild(tableRow2);
  const tableData = document.createElement('td');
  tableRow2.appendChild(tableData);
  tableData.textContent = this.location;
  for (let i = 0; i < time.length; i++) {
    const tableData1 = document.createElement('td');
    tableRow2.appendChild(tableData1);
    tableData1.textContent = this.cookiesPerHours[i];
    this.total = this.cookiesPerHours[i] + this.total;

  }
  const tableData2 = document.createElement('td');
  tableRow2.appendChild(tableData2);
  tableData2.textContent = this.total;
};
Lacations.prototype.tableFooter = function () {
  this.sumOfcolumns();
  const tableHeaderRow1 = document.createElement('tr');
  tabelElement.appendChild(tableHeaderRow1);

  const tableHeader = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader);
  tableHeader.textContent = 'Total';

  for (let i = 0; i < time.length; i++) {
    const tableHeader1 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader1);
    tableHeader1.textContent = footerCells[i];
  }
  const tableHeader1 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader1);
  tableHeader1.textContent = this.totalOfTotal;
};
const seattle = new Lacations('seattle', 23, 65, 6.3);
seattle.tableHead();
seattle.render();
const Tokyo = new Lacations('Tokyo', 3, 24, 1.2);
Tokyo.render();
const Dubai = new Lacations('Dubai', 11, 38, 3.7);
Dubai.render();
const Paris = new Lacations('Paris', 20, 38, 2.3);
Paris.render();
const Lima = new Lacations('Lima', 2, 16, 4.6);
Lima.render();
seattle.tableFooter();



myForm.addEventListener('submit', addNewCity);

function addNewCity(event) {

  event.preventDefault();
  console.log(event);

  let rowtodelet = tabelElement.rows.length;
  tabelElement.deleteRow(rowtodelet - 1);


  let cityName = event.target.site.value;
  console.log(cityName);
  let minNum = Number(event.target.minimum.value);
  console.log(minNum);
  let maxNum = Number(event.target.maximum.value);
  console.log(maxNum);
  let cookieAvg = Number(event.target.average.value);
  console.log(cookieAvg);

  let newSite = new Lacations(cityName, minNum, maxNum, cookieAvg);


  newSite.render();

  let city = [seattle, Tokyo, Dubai, Paris, Lima];
  for (let i = 0; i < time.length; i++) {
    for (let x = 0; x < city.length; x++) {
      this.totalCulomn += city[x].cookiesPerHours[i];
    }
    footerCells.push(this.totalCulomn);
    this.totalOfTotal = this.totalOfTotal + this.totalCulomn;
    this.totalCulomn = 0;
  }
  const btnRow = document.createElement('tr');
  tabelElement.appendChild(btnRow);

  const btnCell = document.createElement('th');
  btnRow.appendChild(btnCell);
  btnCell.textContent = 'Total';

  for (let i = 0; i < time.length; i++) {
    const btnCell1 = document.createElement('th');
    btnRow.appendChild(btnCell1);
    btnCell1.textContent = footerCells[i];
  }
  const btnCell2 = document.createElement('th');
  btnRow.appendChild(btnCell2);
  btnCell2.textContent = this.totalOfTotal;
}
