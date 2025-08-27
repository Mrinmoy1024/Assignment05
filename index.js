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