function discount_coupon(degree){
				var diamond_coupon = new Array(50,35,25,10,0);
				var platinum_coupon = new Array(40,25,20,10,0);
				var gold_coupon = new Array(30,20,15,10,0);
				var gen_coupon = new Array(30,20,15,10,0);
				
				if(degree=="鑽石"){
					 select = prompt("請選擇愈使用的折價券：(不使用請按5選擇0)" + "\n1."+diamond_coupon[0]+"\n2."+diamond_coupon[1]+"\n3."+diamond_coupon[2]+"\n4."+diamond_coupon[3] +"\n5."+diamond_coupon[4]);
				     left_coupon(select, diamond_coupon);
					 return diamond_coupon[select-1];
				}else if(degree=="白金"){
					 select = prompt("請選擇愈使用的折價券：(不使用請按5選擇0)" + "\n1."+platinum_coupon[0]+"\n2."+platinum_coupon[1]+"\n3."+platinum_coupon[2]+"\n4."+platinum_coupon[3]+"\n5."+diamond_coupon[4]);
				     left_coupon(select, platinum_coupon);
					 return platinum_coupon[select-1];
			    }else if(degree=="黃金"){
					 select = prompt("請選擇愈使用的折價券：(不使用請按5選擇0)" + "\n1."+gold_coupon[0]+"\n2."+gold_coupon[1]+"\n3."+gold_coupon[2]+"\n4."+gold_coupon[3]+"\n5."+diamond_coupon[4]);
				      left_coupon(select, gold_coupon);
					 return gold_coupon[select-1];
				}else if(degree=="一般"){
					 select = prompt("請選擇愈使用的折價券：(不使用請按5選擇0)" + "\n1."+gen_coupon[0]+"\n2."+gen_coupon[1]+"\n3."+gen_coupon[2]+"\n4."+gen_coupon[3]+"\n5."+diamond_coupon[4]);
				     left_coupon(select, gen_coupon);
					 return gen_coupon[select-1];
			    }
			}
			
