function argRequired(arg){
	 if(arg===0)
		throw new Error('zero div');
	else
		return arg;
}

print(argRequired(5));//ok
argRequired(0);//error
