let counter = 0

function addListItem() {
    counter++
    let listItem = document.createElement("p")
    let listItemText = document.createTextNode(`This is list item ${counter}`)
    listItem.appendChild(listItemText)
    listItem.addEventListener('click', function() {
        listItem.style.color = colors[Math.floor(Math.random()*colors.length)];
    });
    listItem.addEventListener('dblclick', function() {
        listItem.removeChild(listItemText)
    });
    document.body.appendChild(listItem)
}

let colors = ["red", "orange", "yellow", "green", "blue", "purple", "orangered", "cyan"]

let headerContainer = document.createElement("div")
headerContainer.className = "header-container"
for (let i = 1; i < 7; i++) {
    let header = document.createElement(`h${i}`)
    let headerText = document.createTextNode(`This is an h${i}`)
    header.appendChild(headerText)
    header.className = `h${i}`
    header.addEventListener("mouseover", function() {
        header.style.cursor = "pointer"
    });
    header.addEventListener('dblclick', function() {
        header.style.color = colors[Math.floor(Math.random()*colors.length)];
    });
    headerContainer.appendChild(header)    
}

window.addEventListener('DOMContentLoaded', function() {
    document.body.appendChild(headerContainer)
    let button = document.getElementsByClassName("addBtn")[0]
    button.addEventListener('click', addListItem)
});