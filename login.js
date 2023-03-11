function login() {
    const nameEl = document.querySelector('#name');
    localStorage.setItem('userName', nameEl.value);
    window.location.href = 'prayer.html';
} 

function loadPrayers(){
    window.location.href = 'prayer-request.html';
}