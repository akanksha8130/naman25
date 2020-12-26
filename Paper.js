 class paper{
constructor(x,y,r)
{
    var options={
    'restitution':0.3,
    'friction':1.3,
    'density':1.2
    }
    this.x=x
    this.y=y
    this.r=r
    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
    World.add(world,this.body)
    this.image=loadImage("paper.png")
}
display(){
 var paperpos=this.body.position  
 push()
 translate(paperpos.x,paperpos.y)
 imageMode(RADIUS)
 image(this.image, 0, 0, this.r/2, this.r/2)
 pop()
}
 }