// Add your Circle class here
class Circle {
   
    #radius 

    constructor(radius){
        this.#radius = radius;
    }
    
    get diameterr(){
       return this.radius * 2;
    }

    set diameter(r){

        this.#radius = r;

    }

    get circumferencee(){
        return Math.PI*this.r;
    }

    set circumference(c){
        this.circumference= this.c;
    }

    get areaa(){
        return Math.PI*Math.pow(this.#radius,2)
    }

    set area(a){
        this.area= a;
    }

  }

  const circle = new Circle(4);
  circle.areaa();
  circle.area();