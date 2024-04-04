let a=9

var startnum=1;
var prevnum=0;

for(var i=1;i<=a;i++){
    var num=startnum+prevnum
    prevnum=startnum
    startnum=num;
    console.log(num)
}