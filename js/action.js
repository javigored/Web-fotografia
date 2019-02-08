window.onload(function(){
	document.getElementsByClassName("link").onmouseover = shadow;
})

function shadow() {
	document.getElementsByClassName("link").style.text-shadow = "1px 2px white";
}