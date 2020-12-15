function bmi_evaluate() {
	
	const hgt_element = document.getElementById("hgt");
	const hgt_val = hgt_element.value;
	
	const wgt_element = document.getElementById("wgt");
	const wgt_val = wgt_element.value;
	//var ratings = "";
	
	var form_hobby = document.getElementById("form_hobby");
	var selectedHobby = 0;
	
	for(i=0; i<form_hobby.length; i++)
	{
		if(form_hobby[i].checked)
		{
			selectedHobby = selectedHobby + 1;
		}
	}
	
	
	
	if( hgt_val >= 100 )
		{
			var BMI =wgt_val / Math.pow( (hgt_val / 100) , 2);
			
		}
	else
		{
			var BMI =wgt_val / Math.pow(hgt_val, 2);
			
		}
		
		if(BMI < 18.5)
			{
				rating1 = ("過輕");
			}
		else if( (BMI>=18.5) && (BMI<24))
			{
				rating1 = ("標準");		
			}
		else if( (BMI>=24) && (BMI<27) )
			{
				rating1 = ("過重");										
			}
		else if( BMI > 27 )
			{
				rating1 = ("肥胖");
			}
			
		if(selectedHobby==0)
			{
				rating2 = "(生活習慣良好)";
			}
		else if(selectedHobby==1)
			{
				rating2 = "(生活習慣尚可)";
			}
		else if(selectedHobby==2)
			{
				rating2 = "(建議調整生活習慣)";
			}
		else if(selectedHobby==3)
			{
				rating2 = "(建議完全改善生活習慣)";
			}
		else
			{
				rating2 = "(請洽專業醫師)	";
			}
	document.getElementById("rates").innerHTML = rating1+rating2;
	return rating1;
}