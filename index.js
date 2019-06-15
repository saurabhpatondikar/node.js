var rect={
    perimeter:(x,y)=>(2*(x+y)),
    area:(x,y)=>(x*y)
};

function SolveQues(l,b){
console.log("length and breadth"+l+" "+b);
if(l<=0||b<=0)
{
    console.log("insert length greater than zero"+l+"and "+b);
}
else{
    console.log("Perimeter="+rect.perimeter(l,b)+" Area="+rect.area(l,b));
}
}

SolveQues(2,3);
SolveQues(4,5);
SolveQues(-3,5);