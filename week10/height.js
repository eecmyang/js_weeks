function hght(){
	
	const hgt = document.getElementById("hgt_text");
	const Hgt = hgt.value;
	
	if(Hgt>=100){
		HGT = Hgt;
	}
	else{
		HGT = Hgt*100;
	}
	document.getElementById("hgt_id").innerHTML = "Height:" + HGT + "cm";
}