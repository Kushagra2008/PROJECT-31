class plinko
{
    constructor(x, y)
    {
        var options = {
            isStatic: true,
            restitution: 1, 
            friction: 0,
            density: 0.8
         }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y,10, options);
        World.add(world, this.body)
    }
    display()
    {
        var posi = this.body.position;
        push()
        translate(posi.x, posi.y)
        ellipseMode(CENTER);
        ellipse(0, 0, 20, 20);
        pop()
    }
}
