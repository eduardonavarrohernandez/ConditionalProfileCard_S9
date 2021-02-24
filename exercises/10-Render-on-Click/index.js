let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	console.log("aca estoy este soy");
	var elem2 = document.createElement("DIV");
	elem2.innerHTML = "Hello World";
	elem2.style.background = "yellow";
	document.body.appendChild(elem2);
});
