const allLinks = document.querySelectorAll("a");

// innerText - możemy zmienić wyświetlany tekst
// for (let link of allLinks) {
//   link.innerText = "i am a link!";
// }

// innerHTML - możemy dodawać elementy <i> <div> itd
document.querySelector("h1").innerHTML += "<i> BABLOCZEK</i>";

// exercise
document.querySelector("#In_cuisine").innerHTML = "In brother";
