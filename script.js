
var ul = document.getElementById("list");
var input1 = document.getElementById("input1");

function add() {
    var listitem = document.createElement("li");
    listitem.innerHTML = input1.value + " <button onclick='deleteitem(event)'>Delete</button>";
    ul.append(listitem);
}

function deleteitem(event) {
    event.target.parentElement.remove();
}
