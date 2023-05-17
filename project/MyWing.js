import { CGFobject } from "../lib/CGF.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyRectangle } from "./MyRectangle.js";
/**
 * MyWing
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyWing extends CGFobject{
    constructor(scene) {
		super(scene);
        this.wingBorder = new MyTriangle(this.scene);
        this.wingMiddle = new MyRectangle(this.scene);
        this.timeSinceAppStart = 0;
        this.animVal = 1;
    }

    display(){
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2 * this.animVal, 0, 0, 1);

        this.scene.pushMatrix();
        this.scene.translate(-1,0,0);
        this.scene.pushMatrix();
        this.scene.translate(3.6 - 3 * this.animVal - Math.sin(this.animVal * Math.PI/6),-1.05 + this.animVal * 0.001,0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        //this.scene.rotate(-Math.PI/6, 0,1,0);
        this.scene.rotate(-Math.PI/6 * this.animVal * 4.8, 0,1,0);
        this.scene.scale(1.5,1,1);
        this.wingBorder.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0.41,-1,0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        //this.scene.rotate(Math.PI/6, 0,1,0);
        this.scene.rotate(Math.PI/6 * this.animVal * 4.5, 0,1,0);
        this.scene.scale(1.5,1,1);
        this.wingMiddle.display();
        this.scene.popMatrix();
        this.scene.popMatrix();


        this.scene.popMatrix();
    }

    update(timeSinceAppStart){
        this.elapsedTimeSecs = timeSinceAppStart % 1;
        if(this.elapsedTimeSecs == 0.0 || this.elapsedTimeSecs == 0.5 || this.elapsedTimeSecs == 1.0){
            this.animVal = 0.0;
          }
          else if (this.elapsedTimeSecs > 0.0 && this.elapsedTimeSecs < 0.5){
            this.animVal = this.elapsedTimeSecs;
          }
          else if (this.elapsedTimeSecs > 0.5 && this.elapsedTimeSecs < 1){
            this.animVal = 1 - this.elapsedTimeSecs;
          }
    }
}