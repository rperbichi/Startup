// share button -> copies the link to the facebook group

// const el = document.querySelector(".myclass");

//document.querySelector('div[class="contact-logo"]').click(prompt("Enter email address"));
//let ageQuestion = prompt("Enter email address");


//asking user for an email address on contact.html
function promptMe(){
    let userAdjective = prompt("Enter email address:");
    alert (userAdjective);
    console.log("Email address entered:\n")
    console.log(userAdjective)
}


//user submitting a prayer request on contact.html
function prayerRequest(){
    let personName = prompt("Who are we praying for?")  //question 1
    alert(personName);
    let message = prompt("Tell us about what we are praying for:"); //question 2
    alert(message);
    // FIXME
    console.log("Praying for:\n")
    console.log(personName)
    console.log("Prayer Reason:\n")
    console.log(message)
}


//When clicking on the share icon, it copies a link of the website to the user's clipboard
// function copyMe() {
    
// }

var copyShareButton = document.querySelector("#foo\\:bar");

copyShareButton.addEventListener('click', function(event) {
  copyTextToClipboard("https://startup.worldwideunified.org/");
});


function coopyURL(){

    // we need to allow the link to be copied when the user clicks on it
}
