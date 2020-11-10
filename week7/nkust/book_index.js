function getBoughtBook(books){
	//var index =prompt("購買書籍號碼"+"\n1."+books[0]+"\n2."+books[1]+"\n3."+books[2]+"\n4."+books[3]+"\n5."+"結帳");
	//return index;
	
	var index = "";
	
	if(degree=="大一"){
		index = prompt("購買書籍號碼"+"\n1."+books[0]+"\n2."+books[1]+"\n9."+"結帳");
		return index==9?9:parseInt(index);
	}
	else if(degree=="大二"){
		index = prompt("購買書籍號碼"+"\n3."+books[2]+"\n4."+books[3]+"\n9."+"結帳");
		return index==9?9:parseInt(index)+2;
	}
	else if(degree=="大三"){
		index = prompt("購買書籍號碼"+"\n5."+books[4]+"\n6."+books[5]+"\n9."+"結帳");
		return index==9?9:parseInt(index)+4;
	}
	else if(degree=="大四"){
		index = prompt("購買書籍號碼"+"\n7."+books[6]+"\n8."+books[7]+"\n9."+"結帳");
		return index==9?9:parseInt(index)+6;
	}
}
