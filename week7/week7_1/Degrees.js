function sum (index ,total){
		       var book_cost = new Array (100,120,140,150);
			   if(index!=5){
			        return total + book_cost[index-1];
			    }else{
				    return total;
			    }
			}
