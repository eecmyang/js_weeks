function discount(degree){
			    var discountTotal =new Array(0.7,0.8,0.85,0.9);
			
				if(degree=="鑽石"){
				     return discountTotal[0];
				}else if(degree=="白金"){
				     return discountTotal[1];
			    }else if(degree=="黃金"){
				     return discountTotal[2];
				}else if(degree=="一般"){
				     return discountTotal[3];
			    }
			}
