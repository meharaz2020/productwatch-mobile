

function setActiveStyle(colorName){
	$(".alternative-style").attr("disabled","true");
	$(".alternative-style[title="+colorName+"]").removeAttr("disabled");
}


$(".toggler-style-switcher").click(function(){
	$(".style-switcher").toggleClass("open");
})

