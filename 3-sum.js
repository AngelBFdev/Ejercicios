var arr=[30,-40,-20,-10,40,0,10,5];
var x=0
for(var i=x;i<arr.length;i++){
    var j=i+1,k=arr.length-1;
    while(j<k){
        if(arr[i]+arr[j]+arr[k]<0){
            j++;
        }
        else if(arr[i]+arr[j]+arr[k]>0){
            k--;
        }
        else{
            document.write(arr[i]+","+arr[j]+","+arr[k]+"<br>");
            j++;
            k--;
        }
    }
}
