function loadPrayers() {
    let prayers = [];
    const prayerText = localStorage.getItem('prayerInfo');
    const textPrayer = localStorage.getItem('prayerInfo');
    const p = (prayerText, textPrayer);
    prayers.push(p);

    // if (textPrayer) {
    //   prayers = JSON.parse(textPrayer);
    // }
  
    // const tableBodyEl = document.querySelector('#name');
    // const messageE1 = document.querySelector('#info');
  
    if (prayers.length) {
      for (const [i, score] of prayers) {
        const positionTdEl = document.createElement('td');
        const nameTdEl = document.createElement('td');
        const dateTdEl = document.createElement('td');
  
        positionTdEl.textContent = i + 1;
        nameTdEl.textContent = prayers.name;
        dateTdEl.textContent = prayers.date;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(positionTdEl);
        rowEl.appendChild(nameTdEl);
        rowEl.appendChild(dateTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
    }
  }
  
  loadPrayers();
