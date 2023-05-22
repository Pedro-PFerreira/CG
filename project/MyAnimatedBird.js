import { CGFobject } from "../lib/CGF.js";
import {MyBird} from "./MyBird.js";
import { MyBirdEgg } from "./MyBirdEgg.js";
/**
 * MyAnimatedBird
 * @constructor
 * @param {MyScene} scene - Reference to MyScene object
 * @param {Array} textures - Array of textures
 */
export class MyAnimatedBird extends CGFobject{
    constructor(scene, textures) {
        super(scene);
		this.scene = scene;
        this.obj = new MyBird(scene, textures);
        this.animVal = 0;
        this.elapsedTimeSecs;

        //Movement
        this.rotationAngle = 0; //in radians 
        this.position = [0,-50,0];
        this.maxSpeed = 1;
        this.accelerating = false;

        //Speed and Scaling
        this.scaleFactor = 1;
        this.speedFactor = 1;

        
        this.egg = new MyBirdEgg(scene,30,20);

        this.eggs = [];

        //this.eggs.push(this.egg);
        //Diving
        this.lowering = false;
        this.rising = false;
    }

    /**
     * This updates the object constantly based on time since the app started
     * @param {int} timeSinceAppStart Time since the Application Started
     * @param {int} scaleFactor Variable Scale Factor adjustable by the user in the interface
     * @param {int} speedFactor Variable Speed Factor adjustable by the user in the interface
     */
    update(timeSinceAppStart, scaleFactor, speedFactor){
        this.scaleFactor = scaleFactor;
        this.speedFactor = speedFactor;
        this.maxSpeed = 1 + this.speedFactor;

        this.elapsedTimeSecs = (timeSinceAppStart * this.speedFactor) % 1;
        if(this.elapsedTimeSecs == 0.0 || this.elapsedTimeSecs == 0.5 || this.elapsedTimeSecs == 1.0){
          this.animVal = 0.0;
        }
        else if (this.elapsedTimeSecs > 0.0 && this.elapsedTimeSecs < 0.5){
          this.animVal = this.elapsedTimeSecs;
        }
        else if (this.elapsedTimeSecs > 0.5 && this.elapsedTimeSecs < 1){
          this.animVal = 1 - this.elapsedTimeSecs;
        }

        //this.rotationAngle = this.normalize_angle(this.rotationAngle);
        if(this.accelerating){
          this.accelerate();
        }
        console.log("Y = " + this.position[1])
        if(this.lowering){
          console.log("Going down...")
          this.lower(this.speedFactor * 0.5);
        }
        
        else if(this.rising){
          console.log("Going up...")
          this.rise(this.speedFactor * 0.5);
        }

        //this.normalize_position();
        //this.position[0] = this.position[0];
        //this.position[1] = this.position[1];
        //this.position[2] = this.position[2];

        this.obj.update(timeSinceAppStart, this.speedFactor);
    }
    /**
     * This switches between the two behaviors: accelerating and standing still
     * @param {boolean} v True to enable acceleration, False otherwise 
     */
    toggle_acceleration(v){
      this.accelerating = v;
    }
    /**
     * This triggers the diving animation and movement
     */
    trigger_dive(){
      this.lowering = true;
    }
    /**
     * This triggers the rising movement during the dive animation
     * @param {int} v How much to increment bird's height in a single update call
     */
    rise(v){
      if(this.position[1] + v < -50){
        this.position[1] += v;
      }
      else{
        this.position[1] = -50;
        this.rising = false;
      }
    }
    /**
     * This triggers the diving movement during the dive animation and then transitions to rising
     * @param {int} v How much to decrement bird's height in a single update call
     */
    lower(v){
      if(this.position[1] - v > -62.5){
        this.position[1] -= v;
      }
      else{
        this.position[1] = -62.5;
        this.lowering = false;
        this.rising = true;
      }
    }
    /**
     * This adds an egg to the list of eggs held by the bird
     * @param {MyBirdEgg} egg Egg Object to be added 
     */
    add_egg(egg){
      console.log("Eggs1: " + this.eggs)
      console.log("Added Egg: " + egg)
      this.eggs.push(egg);
      console.log("Eggs2: " + this.eggs)
    }
    /**
     * This displays the Animated Bird Object accounting values for animation transformations
     */
    display()
    {
        this.scene.pushMatrix();
        //console.log([this.position[0],this.position[2]]);
        this.scene.translate(this.position[0],this.position[1] + this.animVal*2,this.position[2]);
        this.scene.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        this.scene.rotate(this.rotationAngle,0,1,0);
        if (this.eggs.length > 0){
          this.eggs[0].setCoordinates(0,0,0);
          this.eggs[0].display();
        }

        this.obj.display();
        this.scene.popMatrix();
    }
    /**
     * This normalizes a given angle to a value between 0 and 2*PI Radians
     * @param {int} angle Angle to be normalized (in radians)
     * @returns 
     */
    normalize_angle(angle){
      while (angle >= Math.PI * 2){
        angle -= Math.PI * 2;
      }
      while (angle < 0){
        angle += Math.PI * 2;
      }
      return angle;
    }
    /**
     * This normalizes the position vector to a vector with length = 1
     */
    normalize_position(){

      var magnitude = Math.sqrt(this.position[0]*this.position[0] + this.position[1]*this.position[1] + this.position[2]*this.position[2]);
      if(magnitude != 0){
        this.position[0] = this.position[0]/magnitude;
        this.position[1] = this.position[1]/magnitude;
        this.position[2] = this.position[2]/magnitude;
      }
      console.log("Position vector:" + this.position);
    }
    /**
     * This rotates the bird right or left
     * @param {int} v Angle of Rotation 
     */
    turn(v){
      this.rotationAngle += v * this.speedFactor;
    }
    /**
     * This accelerates the bird, making it move forward
     */
    accelerate(){
      this.position[2] -= Math.sin(this.rotationAngle) * this.speedFactor; //z
      this.position[0] += Math.cos(this.rotationAngle) * this.speedFactor; //x
    }
    /**
     * This resets the bird position
     */
    resetPos(){
      this.position = [0,0,0];
      this.rotationAngle = 0;
      this.accelerating = false;
    }
    /**
     * This resets the rotation of the bird to rotation angle = 0
     */
    resetRotation(){ //For testing purposes only
      this.rotationAngle = 0;
    }
    /**
     * This checks if the bird is carrying an egg
     * @returns True if it is, False otherwise
     */
    hasEgg(){
      var count = 0
      for(var egg in this.eggs){
        count++
      }
      return count > 0
    }
}