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
function getRandomNumberSeattle(min,max){
  return(Math.floor(Math.random() * (max - min + 1) + min));
}
const seattle = {

  name: 'Seatlle',

  minHourlyCustomers:23,
  maxHourlyCustomers:65,
  avgcookiesperCustomer:6.3,
  total:0,


  render: function(){
    const section = document.getElementById('seatlle');

    const h2El = document.createElement('h2');
    section.appendChild(h2El);
    h2El.textContent=this.name;

    const ulEl = document.createElement('ul');
    section.appendChild(ulEl);


    for(let i=0; i< time.length; i++)
    {
      let x = Math.trunc(getRandomNumberSeattle(this.minHourlyCustomers,this.maxHourlyCustomers)*this.avgcookiesperCustomer);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [`${time[i]}:  ${x} cookies`];
      this.total=this.total+x;
    }


    const pEl= document.createElement('p');
    section.appendChild(pEl);
    pEl.textContent=`Total= ${this.total}`;



  }

};

seattle.render();





// For Tokyo.

function getRandomNumberTokyo(min,max){
  return(Math.floor(Math.random() * (max - min + 1) + min));
}

const tokyo = {

  name: 'Tokyo',

  minHourlyCustomers:3,
  maxHourlyCustomers:24,
  avgcookiesperCustomer:1.2,
  total:0,

  render: function(){
    const section = document.getElementById('tokyo');


    const h2El = document.createElement('h2');
    section.appendChild(h2El);
    h2El.textContent=this.name;

    const ulEl = document.createElement('ul');
    section.appendChild(ulEl);

    for(let i=0; i< time.length; i++)
    {
      let x = Math.trunc(getRandomNumberTokyo(3,24)*this.avgcookiesperCustomer);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [`${time[i]}:  ${x} cookies`];
      this.total=this.total+x;
    }


    const pEl= document.createElement('p');
    section.appendChild(pEl);
    pEl.textContent=`Total= ${this.total}`;
  }


};

tokyo.render();



// For Dubai.

function getRandomNumberDubai(min,max){
  return(Math.floor(Math.random() * (max - min + 1) + min));
}

const dubai = {

  name: 'Dubai',

  minHourlyCustomers:11,
  maxHourlyCustomers:38,
  avgcookiesperCustomer:3.7,
  total:0,

  render: function(){
    const section = document.getElementById('dubai');

    const h2El = document.createElement('h2');
    section.appendChild(h2El);
    h2El.textContent=this.name;

    const ulEl = document.createElement('ul');
    section.appendChild(ulEl);

    for(let i=0; i< time.length; i++)
    {
      let x = Math.trunc(getRandomNumberDubai(this.minHourlyCustomers,this.maxHourlyCustomers)*this.avgcookiesperCustomer);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [`${time[i]}:  ${x} cookies`];
      this.total=this.total+x;
    }


    const pEl= document.createElement('p');
    section.appendChild(pEl);
    pEl.textContent=`Total= ${this.total}`;
  }


};

dubai.render();




// For Paris.

function getRandomNumberParis(min,max){
  return(Math.floor(Math.random() * (max - min + 1) + min));
}
const paris = {

  name: 'Paris',

  minHourlyCustomers:20,
  maxHourlyCustomers:38,
  avgcookiesperCustomer:2.3,
  total:0,

  render: function(){
    const section = document.getElementById('paris');

    const h2El = document.createElement('h2');
    section.appendChild(h2El);
    h2El.textContent=this.name;

    const ulEl = document.createElement('ul');
    section.appendChild(ulEl);

    for(let i=0; i< time.length; i++)
    {
      let x = Math.trunc(getRandomNumberParis(this.minHourlyCustomers,this.maxHourlyCustomers)*this.avgcookiesperCustomer);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [`${time[i]}:  ${x} cookies`];
      this.total=this.total+x;
    }


    const pEl= document.createElement('p');
    section.appendChild(pEl);
    pEl.textContent=`Total= ${this.total}`;
  }


};

paris.render();



// For Lima.
function getRandomNumberLima(min,max){
  return(Math.floor(Math.random() * (max - min + 1) + min));
}
const lima = {

  name: 'Lima',
  minHourlyCustomers:2,
  maxHourlyCustomers:16,
  avgcookiesperCustomer:4.6,
  total:0,

  render: function(){
    const section = document.getElementById('lima');

    const h2El = document.createElement('h2');
    section.appendChild(h2El);
    h2El.textContent=this.name;

    const ulEl = document.createElement('ul');
    section.appendChild(ulEl);

    for(let i=0; i< time.length; i++)
    {
      let x = Math.trunc(getRandomNumberLima(this.minHourlyCustomers,this.maxHourlyCustomers)*this.avgcookiesperCustomer);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [`${time[i]}:  ${x} cookies`];
      this.total=this.total+x;
    }


    const pEl= document.createElement('p');
    section.appendChild(pEl);
    pEl.textContent=`Total= ${this.total}`;
  }

};


lima.render();
