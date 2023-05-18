import { CGFobject } from "../lib/CGF.js";
import {MyBird} from "./MyBird.js";

export class MyAnimatedBird extends CGFobject{
    constructor(scene, textures) {
        super(scene);
		this.scene = scene;
        this.obj = new MyBird(scene, textures);
        this.animVal = 0;
        this.elapsedTimeSecs;

        //Movement
        this.moveSpeed = 0;
        this.rotationAngle = 0; //in radians 
        this.position = [0,0,0];
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

        this.position[0] += this.moveSpeed * Math.cos(this.rotationAngle); //x
        this.position[2] += this.moveSpeed * Math.sin(this.rotationAngle); //z

        console.log(this.position);

        this.obj.update(timeSinceAppStart);
    }

    display()
    {
        this.scene.pushMatrix();
        this.scene.rotate(this.rotationAngle,0,1,0);
        this.scene.translate(-this.position[0],this.animVal*2,-this.position[2]);
        this.obj.display();
        this.scene.popMatrix();
    }
}