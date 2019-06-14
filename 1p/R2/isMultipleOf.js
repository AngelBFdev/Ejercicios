function isMultipleOf(x,y){
    if(x%y===0)
        return true;
    else
        return false;
}

function isDivibleBy(x,y){
    return isMultipleOf(x,y);
}

print(isMultipleOf(4,2));
print(isMultipleOf(6,4));
print(isDivibleBy(4,2));
print(isDivibleBy(6,4));