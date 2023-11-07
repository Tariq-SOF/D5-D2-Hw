window.addEventListener("scroll", function() {

  var navbar = document.getElementById("navbar");

  if (window.pageYOffset > 0) {

    navbar.style.backgroundColor = "rgb(255, 255, 255)"; 

  } else {
    navbar.style.backgroundColor = "rgb(255, 255, 255, 0.418)"; 
  }
});

    function callAll(newWord) {

    var elements = document.getElementsById('text');

    for (var i = 0; i < elements.length; i++) {

    elements[i].addEventListener('click', function() {

    for (var j = 0; j < elements.length; j++) {

    elements[j].textContent = newWord;
}
});

}}
