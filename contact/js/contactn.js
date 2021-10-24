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
    var a = document.getElementById("ul-menu").style.display;
    if (a == "none") {
      document.getElementById("ul-menu").style.display = "flex";
    } else {
      document.getElementById("ul-menu").style.display = "none";
    }
  }
  