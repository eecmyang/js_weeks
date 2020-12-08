function sexEval() {
	
	const hgt = document.getElementById("hgt");
	const Hgt = hgt.value;
	const wgt = document.getElementById("wgt");
	const Wgt = wgt.value;
	
	if(Hgt > 100){
		HGT = Hgt;
	}
	else{
		HGT = Hgt*100;
	}
	
	var form_ = document.getElementById("form_sex");
	var selectedSex = "";
	
	for(i=0; i<form_.length; i++){
		if(form_[i].checked){
			selectedSex = form_[i].value;
		}
	}
	
	if(selectedSex=="M"){
		wgt_sel = (HGT-80)*70/100;
	}
	else if(selectedSex=="F"){
		wgt_sel = (HGT-70)*60/100;
	}
	
	if( (Hgt>0) && (Wgt>0) ) {
		document.getElementById("eval").innerHTML=wgt_sel;
	}
	else {
		document.getElementById("eval").innerHTML="";
	}
}