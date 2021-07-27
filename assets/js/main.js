Reveal.initialize({
    hash: true,
    plugins: [ RevealMarkdown]
});

// MODAL IMAGES
var img = document.getElementsByClassName("diff_img");
img.forEach(element => {
  element.onclick = function() {
    var modal = document.getElementById(this.dataset.target);

    modal.style.display = "flex";

    for (var i = 0; i < modal.childNodes.length; i++) {
      if (modal.childNodes[i].className == "modal-content") {
        modal.childNodes[i].src = this.src;
        console.log(this.src)
      }        
  }
  }
});

var span = document.getElementsByClassName("close");
span.forEach(element => {
  element.onclick = function() {
    console.log(this.parentElement)
    this.parentElement.style.display = "none";
  }
})