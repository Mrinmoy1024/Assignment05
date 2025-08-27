
//heart count
const heartIcons = document.querySelectorAll(".add-heart");
const heartCountElement = document.getElementById("count");

let heartCount = 0;

for (let i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener("click", function () {
    heartCount++;
    heartCountElement.textContent = heartCount;
  });
}
//time section
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes}:${seconds} ${ampm}`;
}

//coin reduce and call history
const coinDisplay = document.querySelector(".coin-icon p");
const callHistory = document.getElementById("call-history");
const allCallButtons = document.querySelectorAll(".call-btn");
const callLogContainer = document.querySelector(".call-log-container");

let coins = parseInt(coinDisplay.textContent);

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

       const logEntry = document.createElement("div");
        logEntry.classList.add("log-entry");
        logEntry.innerHTML = `
            <div style="background-color: #d0d0d6; border-radius: 25px; text-align: center; margin-bottom: 10px">
                <p class="service-name">${serviceName}</p>
                <p class="service-number">${serviceNumber}</p>
            </div>
            <p class="timestamp" style="background-color: #9e9ea3; border-radius: 25px; text-align: center; margin-bottom: 10px">${getCurrentTime()}</p>
        `;
         callLogContainer.appendChild(logEntry);
    
  });
}


// clear button

const clearHistoryButton = document.querySelector(".clear-btn");


if (clearHistoryButton) {
    clearHistoryButton.addEventListener("click", function() {
        
        callLogContainer.innerHTML = '';
        
    });
}