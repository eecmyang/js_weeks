function borderStyle() {
	
	const bordStyles = document.getElementById("borderStyle1");
	const bordStyle = bordStyles.value;
	
	if(bordStyle == 1){
		return "solid";
	}
	else if(bordStyle == 2){
		return "dashed";
	}
	else if(bordStyle == 3){
		return "double";
	}
	else if(bordStyle == 4){
		return "dotted";
	}
	else if(bordStyle == 5){
		return "groove";
	}
	else if(bordStyle == 6){
		return "ridge";
	}
	else if(bordStyle == 7){
		return "inset";
	}
	else {
		return "outset";
	}
	
	
	
}