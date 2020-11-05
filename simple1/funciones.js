document.getElementById("modo-oscuro").onclick = ()=>{
	document.body.classList.add("modo-oscuro");
	document.getElementById("seccion-secundaria").style.backgroundColor="#696969";
}

document.getElementById("modo-claro").onclick=()=>{
	document.body.classList.remove("modo-oscuro");
	document.getElementById("seccion-secundaria").style.backgroundColor="#DCDCDC";
}