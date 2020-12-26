class particle
{
    constructor(y)
    {
        var options = {
            isStatic: false,
            restitution: 1, 
            friction: 0,
            density: 0.8
         }
        this.x = random(30, 450);
        this.y = y;
        this.body = Bodies.circle(this.x, this.y,15, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body)
    }
    display()
    {
        var posi = this.body.position;
        push()
        translate(posi.x, posi.y)
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0, 0, 15, 15);
        pop()
    }
}
