function sum (index ,total){
		       var book_cost = new Array (100,120,140,150,100,120,140,150);
			   if(index!=3){
			        return total + book_cost[index-1];
			    }else{
				    return total;
			    }
			}
