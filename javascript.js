
  function myFunction() {
    var txt;
    if (confirm("Press a button!")) {
      txt = "Are you want to Connect with Google!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }
