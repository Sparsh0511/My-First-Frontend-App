// document.getElementById("count-el").innerText = 5
// let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count++
    countEl.textContent = count    
}

function save() {
    let message = count + " - "
    document.getElementById("save-el").textContent += message
    count = 0
    countEl.textContent = count            
}