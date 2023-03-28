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



//couldn't figure out how to get this to work
/*
function displayHeart() {
        let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
    
    const tableBodyEl = document.querySelector('#scores');


    for (const [i, score] of scores.entries()) {
        const prayForName = document.createElement('td');
        const prayForWhy = document.createElement('td');
       
    
        prayForName.textContent = score.name;
        prayForWhy.textContent = score.reason;
    
        const rowEl = document.createElement('tr');
        rowEl.appendChild(prayForName);
        rowEl.appendChild(prayForWhy);
    
        tableBodyEl.appendChild(rowEl);
      }
}
displayHeart();
*/
