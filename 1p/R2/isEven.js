function isEven(x){
    if(x%2===0)
	return true;
    else
	return false;
}

function isOdd(x){
    return !isEven(x);
}

print(isEven(4));
print(isEven(5));
print(isOdd(6));
print(isOdd(7));
