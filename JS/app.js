'use strict';
// Within your javascript file (example: app.js), create separate JS object literals for each shop location that outputs the following to the sales.html file:

// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:

// Seattle

// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// Total: 875 cookies
// Display the lists on sales.html. We will be adding features to this application and working with its layout in the upcoming labs.

let time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


// For Seatlle.
const location1 = {

  location: 'seatlle',

  minHourlyCustomers:[],
  maxHourlyCustomers:[],
  avgcookiesperCustomer:6.3,

  getNum:  function(min,max){

    this.minHourlyCustomers =getRandomNumber(min,max);
    this.maxHourlyCustomers= getRandomNumber(min,max);
  },

  render: function(){
    const section = document.getElementById('seatlle');

    const articleEl = document.createElement('article');
    section.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.location;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for(let i=0; i< time.length; i++)
    {
      let x = Math.trunc(getRandomNumber(23,65)*this.avgcookiesperCustomer);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [`${time[i]}:  ${x} cookies`];
    }
  }

};

function getRandomNumber(min,max){
  return(Math.floor(Math.random() * (max - min + 1) + min));
}

location1.getNum(23,65);
console.log(location1);
location1.render();





// For Tokyo.
const location2 = {

  location: 'Tokyo',

  minHourlyCustomers:[],
  maxHourlyCustomers:[],
  avgcookiesperCustomer:1.2,

  getNum:  function(min,max){

    this.minHourlyCustomers =getRandomNumber1(min,max);
    this.maxHourlyCustomers= getRandomNumber1(min,max);
  },

  render: function(){
    const section = document.getElementById('tokyo');

    const articleEl = document.createElement('article');
    section.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.location;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for(let i=0; i< time.length; i++)
    {
      let x = Math.trunc(getRandomNumber1(3,24)*this.avgcookiesperCustomer);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [`${time[i]}:  ${x} cookies`];
    }
  }

};

function getRandomNumber1(min,max){
  return(Math.floor(Math.random() * (max - min + 1) + min));
}

location2.getNum(3,24);
console.log(location2);
location2.render();



// For Dubai.
const location3 = {

  location: 'Dubai',

  minHourlyCustomers:[],
  maxHourlyCustomers:[],
  avgcookiesperCustomer:3.7,

  getNum:  function(min,max){

    this.minHourlyCustomers =getRandomNumber2(min,max);
    this.maxHourlyCustomers= getRandomNumber2(min,max);
  },

  render: function(){
    const section = document.getElementById('dubai');

    const articleEl = document.createElement('article');
    section.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.location;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for(let i=0; i< time.length; i++)
    {
      let x = Math.trunc(getRandomNumber2(11,38)*this.avgcookiesperCustomer);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [`${time[i]}:  ${x} cookies`];
    }
  }

};

function getRandomNumber2(min,max){
  return(Math.floor(Math.random() * (max - min + 1) + min));
}

location3.getNum(11,38);
console.log(location2);
location3.render();




// For Paris.
const location4 = {

  location: 'Paris',

  minHourlyCustomers:[],
  maxHourlyCustomers:[],
  avgcookiesperCustomer:2.3,

  getNum:  function(min,max){

    this.minHourlyCustomers =getRandomNumber3(min,max);
    this.maxHourlyCustomers= getRandomNumber3(min,max);
  },

  render: function(){
    const section = document.getElementById('paris');

    const articleEl = document.createElement('article');
    section.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.location;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for(let i=0; i< time.length; i++)
    {
      let x = Math.trunc(getRandomNumber3(20,38)*this.avgcookiesperCustomer);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [`${time[i]}:  ${x} cookies`];
    }
  }

};

function getRandomNumber3(min,max){
  return(Math.floor(Math.random() * (max - min + 1) + min));
}

location4.getNum(20,38);
console.log(location2);
location4.render();


// For Lima.
const location5 = {

  location: 'Lima',

  minHourlyCustomers:[],
  maxHourlyCustomers:[],
  avgcookiesperCustomer:4.6,

  getNum:  function(min,max){

    this.minHourlyCustomers =getRandomNumber4(min,max);
    this.maxHourlyCustomers= getRandomNumber4(min,max);
  },

  render: function(){
    const section = document.getElementById('lima');

    const articleEl = document.createElement('article');
    section.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent=this.location;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for(let i=0; i< time.length; i++)
    {
      let x = Math.trunc(getRandomNumber4(2,16)*this.avgcookiesperCustomer);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [`${time[i]}:  ${x} cookies`];
    }
  }

};

function getRandomNumber4(min,max){
  return(Math.floor(Math.random() * (max - min + 1) + min));
}

location5.getNum(2,16);
console.log(location2);
location5.render();
