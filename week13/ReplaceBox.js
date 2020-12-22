function replaceBox() {
	
	const marTops = document.getElementById("marginTop");
	const MarTop = marTops.value;
	
	const marRight = document.getElementById("marginRight");
	const MarRight = marRight.value;
	
	const marBottom = document.getElementById("marginBottom");
	const MarBottom = marBottom.value;
	
	const marLeft = document.getElementById("marginLeft");
	const MarLeft = marLeft.value;
	
	
	const marPadTop = document.getElementById("paddingTop");
	const MarPadTop = marPadTop.value;
	
	const marPadRight = document.getElementById("paddingRight");
	const MarPadRight = marPadRight.value;
	
	const marPadBottom = document.getElementById("paddingBottom");
	const MarPadBottom = marPadBottom.value;
	
	const marPadLeft = document.getElementById("paddingLeft");
	const MarPadLeft = marPadLeft.value;
	
	
	const marBor = document.getElementById("border");
	const MarBor = marBor.value;
	
	document.getElementById("boxArea").innerHTML =
			"<div style=\"margin: " + MarTop + "px " +
			MarRight + "px " + 
			MarBottom + "px " +
			MarLeft + "px; padding: " + 
			
			MarPadTop + "px " + 
			MarPadRight + "px " +
			MarPadBottom + "px " +
			MarPadLeft + "px;" +
			
			
			"border: " +
			MarBor + "px " + borderStyle() + " blue; \"> 這是邊界的測試 </div>";
	
}