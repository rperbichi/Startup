(async () => {
    let authenticated = false;
    const userName = localStorage.getItem('userName');
    if (userName) {
      const nameEl = document.querySelector('#userName');
      nameEl.value = userName;
      const user = await getUser(nameEl.value);
      authenticated = user?.authenticated;
    }
    if (authenticated) {
        document.querySelector('#playerName').textContent = userName;
        setDisplay('loginControls', 'none');
        setDisplay('playControls', 'block');
      } else {
        setDisplay('loginControls', 'block');
        setDisplay('playControls', 'none');
      }
})();


async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

async function createUser() {
    loginOrCreate(`/api/auth/create`);
}


async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#userName')?.value;
    const password = document.querySelector('#userPassword')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const body = await response.json();

    if (response?.status === 200) {
        localStorage.setItem('userName', userName);
        window.location.href = 'prayer.html';
    } else {
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
    }
}

//go to the submit prayer window
function play() {
    window.location.href = 'allprayers.html'; //takes you to the next html
}


function logout() {
    fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));
}


async function getUser(email) {
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
  }


  function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
      playControlEl.style.display = display;
    }
  }










/* old working version. Only does login.
async function login() {
    const nameEl = document.querySelector('#userName');
    localStorage.setItem('userName', nameEl.value);

    const response = await fetch('/api/auth/create', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },    
        body: JSON.stringify({username:nameEl.value, password:'password'}),    
    });
    window.location.href = 'prayer.html'; //takes you to the next html
} 
*/

