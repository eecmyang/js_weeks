function baseline(){
	const hgt_ele = document.getElementById("hgt");
	const hgt = hgt_ele.value;
	var wgt = 0;
	
	if(hgt<100){
		var height = hgt*100;
	}
	else{
		var height = hgt;
	}
	
	var high_wgt = Math.floor(Math.pow((height/100),2)*24*10)/10;
	var low_wgt  = Math.round(Math.pow((height/100),2)*18.5*10)/10;
	
	if((height<144) || (height>190) || (height%1!=0)) {
		
		wgt = low_wgt + "~" + high_wgt;
		
	}
	else {
		
		wgt = getNormalWeight(height);
		
	}
	
	
	var evaluate =bmi_evaluate();
	
	if(evaluate!="評價：標準"){
		//document.getElementById("eval").innerHTML="<div class=\"Red_color\">異常體重</div>";
		document.getElementById("user_weight").innerHTML="<div class=\"Red_color\">"+height+"</div>";;
		document.getElementById("normal_weight").innerHTML="<div class=\"Red_color\">"+wgt+"</div>";
	}
	else{
		//document.getElementById("eval").innerHTML="<div class=\"Black_color\">正常體重</div>";
		document.getElementById("user_weight").innerHTML="<div class=\"Black_color\">"+height+"</div>";;
		document.getElementById("normal_weight").innerHTML="<div class=\"Black_color\">"+wgt+"</div>";
	}
}