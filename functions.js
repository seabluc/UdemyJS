// External JS file containing all functions that section19html.html will use

function hello(name) {
    var name = prompt("Enter your name");
    var confirmation = confirm("Are you sure this is your name?"); // Built-in function that displays a popup dialog box w/ OK and Cancel buttons. OK returns true, cancel returns false.
    if (confirmation) {
      alert("hello " + name); // Built-in function that displays a popup dialog box w/ a msg and an OK button. Primarily used for debugging. 
    } else {
      alert("ABORT");
    }
  }
  
  
  function ooga() {
    document.write("ooga booga");
  }


  /*
  <script>
    function redirect() { // function which redirects you to YouTube
      window.location="http://www.youtube.com";
    }
    document.write("you will be redirected to the main site in 5sec");
    setTimeout("redirect()", 5000); setTimeout calls the function, and 5000 is the time it will take to redirect in ms
  </script>
  */