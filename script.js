// function showMessage() {
//     const icon = document.getElementById("heart-icon");
//     let popup = document.createElement("div");
//     popup.className = "popup";
//     popup.innerHTML = "have a good day!";
//     document.body.appendChild(popup);
//     popup.style.display = "block";
//     icon.removeEventlistener("click", showMessage);
// }

// let icon = document.getElementById("heart-icon");
// icon.addEventListener("click", showMessage);


const icon = document.getElementById("heart-icon")
icon.addEventListener("click", function () {
    const popup = document.createElement("div")
    popup.className = "popup"
    popup.innerHTML = "hey you"
    document.body.appendChild(popup)
    popup.style.display = "blcok"
})