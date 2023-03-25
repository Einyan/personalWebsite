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


const icon = document.getElementById("heart-icon"); // Single or nothing

icon.addEventListener("click", function () {
    const popup = document.createElement("div")
    popup.className = "popup"
    popup.innerHTML = "hey you"
    document.body.appendChild(popup)
    popup.style.display = "blcok"
})

let btn = document.getElementById("my_button");
btn.style.backgroundColor = 'white';
let click_count = 0;
btn.addEventListener("click", function (e) {
    console.log("I HAVE BEEN CLICKED");
    if (this.style.backgroundColor == 'white') {
        this.style.backgroundColor = 'blue';
    } else if (this.style.backgroundColor == 'blue') {
        this.style.backgroundColor = 'white';
    }
})

