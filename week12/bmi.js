function bmi() {
	
	const hgt_element = document.getElementById("hgt");
	const hgt_val = hgt_element.value;
	
	const wgt_element = document.getElementById("wgt");
	const wgt_val = wgt_element.value;
	
	var BMI = null; //parseInt( wgt_val / Math.pow(hgt_val, 2) );
	
	
	if( hgt_val >= 100 )
		{
			BMI = parseInt( wgt_val / Math.pow( (hgt_val / 100) , 2) );
				
			HGT = hgt_val;
		}
	else
		{
			BMI = parseInt( wgt_val / Math.pow(hgt_val, 2) );
						
			HGT = hgt_val*100;
		}

	if((hgt_val>0) && (wgt_val>0)){
		
		document.getElementById("BMI_disp").innerHTML = BMI;
		
	}
	else{
		
		document.getElementById("BMI_disp").innerHTML = "";
		
	}

}