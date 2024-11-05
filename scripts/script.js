
/************************************/
/* menu openen met de open menu button */
/************************************/

var openButton = document.querySelector("header > button");

openButton.onclick = openMenu; 

function openMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}



/************************************/
/* menu sluiten met de sluit button */
/************************************/

var sluitButton = document.querySelector("nav button");

sluitButton.onclick = sluitMenu;


function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}


/*hamburger menu - https://codepen.io/shooft/pen/VwJXNEg */













