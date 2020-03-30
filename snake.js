function snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    this.score = 0;

    this.dir = function(x, y){
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function (pos){
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1){

            this.total++;
             this.score++;
            return true;
        } 

        else {
            return false;
        }
    }

    this.death = function(pos){
        
        for(var i = 0; i < this.tail.length; i++){
          var pos = this.tail[i];
          var d = dist(this.x, this.y, pos.x, pos.y);

          if(d < 1){
              this.total = 0;
              this.score = 0;
              this.tail = [];
          }
    
        }
    }

    this.update = function(){

        for(var i = 0; i < this.tail.length -1; i++){
            this.tail[i] = this.tail[i + 1];
        }

        if(this.total >= 1 ){
            this.tail[this.total - 1] = createVector(this.x,this.y)
        }

        for(var i = 0; i < this.score.length ; i++){
            this.score[i] = this.score [i + 1];
        }

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    this.show = function(){
        fill(255);
        
        for(var i = 0; i < this.tail.length; i++){
            rect(this.tail[i].x, this.tail[i].y, scl,scl);
        }
        
        rect(this.x, this.y, scl,scl);
        textSize(30);
        textAlign(RIGHT);
        text(this.score, width, 25);
    }
}