function discount(degree){
			    var discountTotal =new Array(0.7,0.75,0.8,0.9);
			
				if(degree=="大四"){
				     return discountTotal[0];
				}else if(degree=="大三"){
				     return discountTotal[1];
			    }else if(degree=="大二"){
				     return discountTotal[2];
				}else if(degree=="大一"){
				     return discountTotal[3];
			    }
			}
