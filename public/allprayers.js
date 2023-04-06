//loadPrayers function will call the database for information and display it
 async function loadPrayers() {
  let prayers = [];
  try {
    const response = await fetch('/api/prayers'); //calling the database under prayers
    prayers = await response.json();

    //backup storage
    localStorage.setItem('prayers', JSON.stringify(prayers));
  } catch {
    //detecting the error
    const prayersText = localStorage.getItem('prayers');
    if (prayersText) {
      prayers = JSON.parse(prayersText);
    }
  }
  displayPrayers(prayers); //calls the function displayPrayers

 }


 function displayPrayers(prayers) {
  const populateTable = document.querySelector('#prayers');

  if(prayers.length) {
    //updating DOM with prayers   //FIXME why is this only calling localhost rather than from the database?
    for (const [i, prayer] of prayers.entries()) {
      console.log(prayer) //for testing
      //adding the html
      //const positionTable = document.createElement('td'); //add numbers when ready
      const nameTable = document.createElement('td');
      const infoTable = document.createElement('td');

      //populating from database
      //positionTable.textContent = i + 1; //increments position. add when ready
      nameTable.textContent = prayer.name;
      infoTable.textContent = prayer.info;

      //the next row
      const rowNext = document.createElement('tr');
      //rowNext.appendChild(positionTable); //add this when ready
      rowNext.appendChild(nameTable);
      rowNext.appendChild(infoTable);


      populateTable.appendChild(rowNext);
      //second row? ---------------------------------------------------------------------------------
      // rowNext.appendChild(nameTable);
      // rowNext.appendChild(infoTable);


      // populateTable.appendChild(rowNext);

    }
  } else { //if there are no prayer requests
    populateTable.innerHTML = '<tr><td colSpan=4> No Prayer requests yet</td></tr>';
  }
 }

 loadPrayers();








// This code below displays only one prayer
/*
const prayForName = document.querySelector('.pray-for');
const prayForWhy = document.querySelector('.pray-why');
prayForName.textContent = this.getPrayName();
prayForWhy.textContent = this.getPrayWhy();


function getPrayName() {
    return localStorage.getItem('prayerName'); //userName has to matchup exactly with setItem in function login
  }

function getPrayWhy() {
    return localStorage.getItem('prayerInfo'); //userName has to matchup exactly with setItem in function login
}
*/


