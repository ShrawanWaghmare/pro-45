class Ball {
    constructor(x,y,r){
        var options = {
            restitution: 1,
            density: 1.2,
            friction: 1
        }
        this.x = x;
        this.y = y;
        this.r = r;

        this.image = loadImage("images/ball.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }

    display(){
        var ballPos = this.body.position;
        push()
        translate(ballPos.x, ballPos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.r*2,this.r*2);
        pop()
    }

}