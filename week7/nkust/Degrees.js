function getDegree (name, users_name,users_degree){
	var degrees ="";
	for(i=0;i<users_name.length;i++){
		if(users_name[i]==name){
		  degrees = users_degree[i];
		}
	}
		return degrees;
}
