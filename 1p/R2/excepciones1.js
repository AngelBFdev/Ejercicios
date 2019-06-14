function argRequired(arg){
	 if(arg===null)
		throw new Error('arg cannot be null or undefined');

}

print(argRequired(5));
