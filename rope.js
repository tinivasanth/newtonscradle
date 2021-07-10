class Rope{
     
    constructor(body1,body2, pointA,pointB)
    {
      this.pointA=pointA;
      this.pointB=pointB;

      var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.pointA,y:this.pointB}
}

   this.string=Constraint.create(options)
   World.add(world,this.string)
   
   display()
    {
    var pointA=this.string.bodyA.position;
    var pointB=this.string.bodyB.position;
    strokeWeight(2);
    line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
    
   }
    }

}