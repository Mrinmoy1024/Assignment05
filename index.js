//heart count
const heartIcons = document.querySelectorAll(".add-heart");
const heartCountElement = document.getElementById("count");

let heartCount = 0;

for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function(){
        heartCount++;
        heartCountElement.textContent = heartCount;
    })

}
//coin reduce

const coinDisplay = document.querySelector(".coin-icon p");
const callHistory = document.querySelector(".card");

let coins = parseInt(coinDisplay.textContent);

const allCallButtons = document.querySelectorAll(".call-btn");

for (let i = 0; i < allCallButtons.length; i++) {
    const button = allCallButtons[i];
    button.addEventListener("click", function () {
        if (coins < 20) {
            alert("Not enough coins to make a call");
            return;
        }
        const card = button.closest(".card");
        const serviceName = card.querySelector(".card-title").textContent;
        const serviceNumber = card.querySelector(".font-bold.text-xl").textContent;
        coins -= 20;
        coinDisplay.textContent = coins;
        alert(`Calling ${serviceName} at ${serviceNumber}`);
        const newEntry = document.createElement("p");
        newEntry.innerHTML = `<strong>${serviceName}</strong>: ${serviceNumber}`;
        callHistory.appendChild(newEntry);
    })
    
}