console.log(document.body);

// Access element using id
var articlesDiv = document.getElementById("articles");
var headerDiv = document.getElementById("header");

// Change style by accessing style object's properties
headerDiv.style.color = "red";
articlesDiv.children[0].style.fontSize = "50px";
