const h2 = document.createElement('h2');
document.body.appendChild(h2);
h2.innerText = "To do List";
var par = document.createElement('p');
document.body.appendChild(par);
par.innerText = "What is on your list?";

const list = document.createElement('input');
document.body.appendChild(list);
const button = document.createElement('button');
document.body.appendChild(button);

const ul = document.createElement('ul')
document.body.appendChild(ul);

button.innerText = "Submit";
button.addEventListener('click', addToList);

function addToList(){
    const li = document.createElement('li');
    ul.appendChild(li);

    li.innerText = list.value;
    list.value = "";
}