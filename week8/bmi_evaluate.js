function bmi_evaluate() {
	
	const hgt_element = document.getElementById("hgt_text");
	const hgt_val = hgt_element.value;
	
	const wgt_element = document.getElementById("wgt_text");
	const wgt_val = wgt_element.value;
	
	if( hgt_val >= 100 )
		{
			var BMI = parseInt( wgt_val / Math.pow( (hgt_val / 100) , 2) );
			
		}
	else
		{
			var BMI = parseInt( wgt_val / Math.pow(hgt_val, 2) );
			
		}
		
		if(BMI < 18.5)
			{
				ratings = "評價：過輕";
			}
		else if( (BMI>=18.5) && (BMI<24))
			{
				ratings = "評價：標準";		
			}
		else if( (BMI>=24) && (BMI<27) )
			{
				ratings = "評價：過重";										
			}
		else if( BMI > 27 )
			{
				ratings = "評價：肥胖";
			}
	document.getElementById("evalR").innerHTML = ratings;
	
}
