function login() {
    const nameEl = document.querySelector('#name');
    localStorage.setItem('userName', nameEl.value);
    window.location.href = 'prayer.html'; //takes you to the next html
} 



// function login() {
//     const nameEl = document.querySelector('#name');
//     localStorage.setItem('userName', nameEl.value);
//     window.location.href = 'prayer.html';
// } 

// function loadPrayer(){
//     //declaring and storing variables
//     let prayers = [];
//     const theNameE1= document.querySelector('#theName');
//     const theInfoE1= document.querySelector('#theInfo');
//     localStorage.setItem('prayerName',theNameE1.value);
//     localStorage.setItem('prayerInfo',theInfoE1.value);

//     window.location.href = 'prayer-request.html';
// }
