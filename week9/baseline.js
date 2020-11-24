function baseline(){
	const hgt_ele = document.getElementById("hgt_text");
	const hgt = hgt_ele.value;
	
	if(hgt<100){
		height = hgt*100;
	}
	else{
		height = hgt;
	}
	
	var weight =getNormalWeight(height);
	
	document.getElementById("user_weight").innerText=height;
	document.getElementById("normal_weight").innerText=weight;
	
	var evaluate =bmi_evaluate();
	
	if(evaluate!="評價：標準"){
		document.getElementById("evalRF").innerHTML="<ul style=\'list-style-type:square\'><li><font color = \"#FF0000\">異常體重</font></li></ul>";
		document.getElementById("user_weight").style.color='red';
		document.getElementById("normal_weight").style.color='red';
	}
	else{
		document.getElementById("evalRF").innerHTML="<ul style=\'list-style-type:square\'><li><font color = \"#0000FF\">正常體重</font></li></ul>";
		document.getElementById("user_weight").style.color='black';
		document.getElementById("normal_weight").style.color='black';
	}
}
