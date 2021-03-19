class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibility = 255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
       

        if(this.body.speed < 3){
          this.body.display();
        }
         else{
          World.remove(world, this.body);
          push(); 
          this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           rect(0,0,this.width, this.height);
           pop();
           translate(pos.x, pos.y);
           rotate(angle);
           rectMode(CENTER);
         }
         
       
        
      }
}