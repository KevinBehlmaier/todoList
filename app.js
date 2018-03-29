var header = document.getElementById('header')
var input = document.getElementById('input1')
var btn = document.getElementById('btn')
var ul = document.getElementById('myList')


function updateText() {
  var newLi = document.createElement("li");
  newLi.innerHTML = input.value;
  if (input.value === '') {
    alert("Your entry is blank.")
  } else {
    ul.appendChild(newLi);
  }
};

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

/*document.getElementsByName('li').addEventListener("click", function () {})*/


/* input.value?

ul. appendChild(li)
createElement("LI")
*/
