
//console checking and make prayers list -----------------------------------------------------------------------------------------------------------
//This code creates a list of prayer requests, and is shown on the console
//this code also compiles single prayer JSON into a list of prayers
let prayers = [];
//example { name: 'George', info: 'That is surgery goes well'}
const addPrayer = (ev)=> { 
    ev.preventDefault(); //stops the form from submitting
    let prayer = {
        //id: Date.now(), //grabs the current timestamp
        name: document.getElementById('theName').value,
        info: document.getElementById('theInfo').value
    }
    prayers.push(prayer);
    document.forms[0].reset(); //clears the form for next entries

    //for displaying in the console only
    console.log('added', {prayers}); //this line was updated
    //let pre = document.querySelector('#msg pre');
    //pre.textContent = '\n' + JSON.stringify(prayers, '\t', 2);

    
    //saving to localStorage
    localStorage.setItem('prayers', JSON.stringify(prayers));
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('prayer-button').addEventListener('click', addPrayer);
});
//end console checking and prayers list ----------------------------------------------------------------------------------------------



//sendPrayer function is called upon by prayer.html. Takes info and fetches the database.js-----------
async function sendPrayer() {
  /*
  const theName = document.querySelector('#theName');
  const theInfo = document.querySelector('#theInfo');
  localStorage.setItem('name', theName.value);
  localStorage.setItem('info', theInfo.value);
  */
  const response = await fetch('/api/prayers', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name: theName.value, info: theInfo.value}),
  }).then(window.location.href = 'allprayers.html'); //take you to new tab
}
//end sendPrayer function----------------------------------------------------------------------------




//display user----------------------------------------------------------------------------
//displaying the user that logged in
const playerNameEl = document.querySelector('.user-name');
playerNameEl.textContent = this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Anonymous'; //userName has to matchup exactly with setItem in function login
  }
//end display user-------------------------------------------------------------------------
