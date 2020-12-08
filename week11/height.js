function hght(){
	
	const hgt = document.getElementById("hgt");
	const Hgt = hgt.value;
	
	if(Hgt>=100){
		HGT = Hgt;
	}
	else{
		HGT = Hgt*100;
	}
	document.getElementById("hgt_id").innerHTML = HGT + "cm";
}