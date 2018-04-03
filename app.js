var header = document.getElementById('header')
var input = document.getElementById('input1')
var btn = document.getElementById('btn')
var ul = document.getElementById('myList')




// check mark section
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// creates delete button
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode(" \u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// clicking closed, deletes current item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// man oh man

function updateText() {
  var li = document.createElement("li");
  var inputValue = input.value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (input.value === '') {
    alert("Your entry is blank.")
  } else {
    ul.appendChild(li);
  }
inputValue = "";
// iffy part
  var span = document.createElement("SPAN");
  var txt = document.createTextNode(" \u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
   close[i].onclick = function() {
     var div = this.parentElement;
     div.style.display = "none";
   }
 }
}
