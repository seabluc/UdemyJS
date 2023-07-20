// --------------------------------- FUNCTIONS ---------------------------------
// External JS file containing functions for section19html.html
function hello(name) {
    var name = prompt("Enter your name");
    /* Confirm method:
       Built-in function that displays a pop-up dialog box w/ OK & Cancel buttons
       OK returns true, while cancel returns false */
    var confirmation = confirm("Are you sure this is your name?"); 
    if (confirmation) {
      /* Alert method: 
         Built-in function that displays a pop-up dialog box w/ an OK button
         Primarily used for debugging
      */
      alert("hello " + name);
    } else {
      alert("ABORT");
    }
  }
  

  // Spooky function
  function ooga() {
    document.write("ooga booga<br>"); 
    document.write(
      "DOCUMENT OVERWRITTEN; document.write() called after webpage loaded");
    // document.write() will replaces the current webpage since method is called
    // after the document finished loading.
    // I want dieded.png to take up the entire background... oh well
    var imageURL = "dieded.png";
    body.style.backgroundImage = "url('dieded.png')";
  }

  // haha web ball
  function spoderman() {
    this.name="Peter Parker"
    this.age="20" 
  }


  /*
  // Function that redirects to YouTube.com to ruin your productivity
  function redirect() { 
    // Property that represents the current URL of the web page being displayed
    window.location="http://www.youtube.com"; 
  }
  document.write("You will be redirected to YouTube in 5000ms/5sec");
  // Method that executes a function or code block after a specified delay
  // 1st parameter is the function to be executed, 
     and the 2nd parameter schedules the function's execution in milliseconds
  setTimeout("redirect()", 5000);
  */

