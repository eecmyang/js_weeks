function bmi() {
	
	const hgt_element = document.getElementById("hgt_text");
	const hgt_val = hgt_element.value;
	
	const wgt_element = document.getElementById("wgt_text");
	const wgt_val = wgt_element.value;
	
	var BMI = null; //parseInt( wgt_val / Math.pow(hgt_val, 2) );
	
	var hgt_val_convert = null;
	
	var HeightUnit = "";
	
	if( hgt_val >= 100 )
		{
			BMI = parseInt( wgt_val / Math.pow( (hgt_val / 100) , 2) );
				
			hgt_val_convert = hgt_val;
				
			HeightUnit = "cm";
			
		}
	else
		{
			BMI = parseInt( wgt_val / Math.pow(hgt_val, 2) );
						
			hgt_val_convert = hgt_val;
						
			HeightUnit = "m";
			
		}
	document.getElementById("DispR").innerHTML = "Height:" + " " + hgt_val_convert +HeightUnit+"<br>"+"Weight:"+" "+wgt_val+"kg<br>"+"BMI:"+" "+BMI+"kg/m²";


}
