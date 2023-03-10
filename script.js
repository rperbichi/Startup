// //asking user for an email address on contact.html
// function promptMe(){
//     let userAdjective = prompt("Enter email address:");
//     alert (userAdjective);
//     console.log("Email address entered:\n")
//     console.log(userAdjective)
// }


// //user submitting a prayer request on contact.html
// function prayerRequest(){
//     let personName = prompt("Who are we praying for?")  //question 1
//     alert(personName);
//     let message = prompt("Tell us about what we are praying for:"); //question 2
//     alert(message);
//     // FIXME
//     console.log("Praying for:\n")
//     console.log(personName)
//     console.log("Prayer Reason:\n")
//     console.log(message)
// }

function login() {
    const nameEl = document.querySelector('#name');
    localStorage.setItem('userName', nameEl.value);
    window.location.href = 'prayer.html';
}
