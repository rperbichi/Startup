const PrayerSubmitEvent = 'prayerStart'; 

//websocket below
class ThePrayers {
  //enter variables and constructor if needed here
  socket;

  constructor() {
      document.querySelectorAll('.input').forEach((el, i) => {
          if (i < btnDescriptions.length) {
              this.buttons.set(el.id, new Button(btnDescriptions[i], el));
          }
      });

      const nameEl = document.querySelector('.user-name');
      nameEl.textContent = this.getPlayerName();

      this.configureWebSocket();
  }


  async loadRequest(){
    //declaring and storing variables
    const theNameE1= document.querySelector('#theName');
    const theInfoE1= document.querySelector('#theInfo');
    localStorage.setItem('prayerName',theNameE1.value);
    localStorage.setItem('prayerInfo',theInfoE1.value);

    window.location.href = 'allprayers.html';


    // Let other players know a new game has started
    this.broadcastEvent(this.getPlayerName(), PrayerSubmitEvent, {});
  }

getPlayerName() {
  return localStorage.getItem('name') ?? 'No Name';
}


configureWebSocket() {
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  this.socket.onopen = (event) => {
    this.displayMsg('system', 'game', 'connected');
  };
  this.socket.onclose = (event) => {
    this.displayMsg('system', 'game', 'disconnected');
  };
  this.socket.onmessage = async (event) => {
    const msg = JSON.parse(await event.data.text());
    if (msg.type === GameEndEvent) {
      this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
    } else if (msg.type === PrayerSubmitEvent) {
      this.displayMsg('player', msg.from, `submitted a prayer request.`);
    }
  };
}

displayMsg(cls, from, msg) {
  const chatText = document.querySelector('#player-messages');
  chatText.innerHTML =
    `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
}

broadcastEvent(from, type, value) {
  const event = {
    from: from,
    type: type,
    value: value,
  };
  this.socket.send(JSON.stringify(event));
}
}
//end websocket

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
