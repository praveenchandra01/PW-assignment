let n=8;
let s="";
function fib(x){
    if(x==0 || x==1) return x;
    return fib(x-1) + fib(x-2);
}
for(let i=0 ; i<n ; i++){
    s+=fib(i);
    s+=' ';
}
console.log(s);
