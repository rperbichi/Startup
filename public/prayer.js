
const playerNameEl = document.querySelector('.user-name');
playerNameEl.textContent = this.getPlayerName();



function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Anonymous'; //userName has to matchup exactly with setItem in function login
  }




  function loadRequest(){
    //declaring and storing variables
    const theNameE1= document.querySelector('#theName');
    const theInfoE1= document.querySelector('#theInfo');
    localStorage.setItem('prayerName',theNameE1.value);
    localStorage.setItem('prayerInfo',theInfoE1.value);

    window.location.href = 'allprayers.html';

}



//couldn't get this to work. Displayed some tables with my name in it, lol.
/*
function saveScore(score) {
  // this code stores info into string
  const prayForName = document.querySelector('.pray-for');
  const prayForWhy = document.querySelector('.pray-why');
  prayForName.textContent = this.getPrayName();
  prayForWhy.textContent = this.getPrayWhy();

  let scores = [];
  const scoresText = localStorage.getItem('prayerInfo');
  const scoresName = localStorage.getItem('prayerName');
  scores = JSON.parse(scoresText)
  scores = this.updateScores(prayForName, prayForWhy);

  localStorage.setItem('scores', JSON.stringify(scores));
  //code above stores info into string
}
*/
