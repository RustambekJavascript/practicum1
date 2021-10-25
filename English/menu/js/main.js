function dropdownStart1() {
  var c = document.getElementById("dropdown-menu1").style.display;
  if (c == "block") {
    document.getElementById("dropdown-menu1").style.display = "none";
  } else {
    document.getElementById("dropdown-menu1").style.display = "block";
  }
}

function dropdownStart() {
  var b = document.getElementById("dropdown-menu").style.display;
  if (b == "block") {
    document.getElementById("dropdown-menu").style.display = "none";
  } else {
    document.getElementById("dropdown-menu").style.display = "block";
  }
}

function menu() {
  var d = document.getElementById("main-section_items");
  var a = document.getElementById("ul-menu").style.display;
  if (a == "none") {
    document.getElementById("ul-menu").style.display = "flex";
    d.style.marginTop = "240px";
  } else {
    document.getElementById("ul-menu").style.display = "none";
    d.style.marginTop = "-6px";
  }
}

var x = document.getElementById("screen-menu");
var y = document.getElementById("body1");
var m = document.getElementById("modal");
var b = document.getElementById("backet");

function button(params) {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function chaqir(params) {
  m.style.display = "flex";
}
function yop(params) {
  m.style.display = "none";
  b.style.display = "none";
}
function backetOpen(params) {
  b.style.display = "flex";
}
