import { CGFobject } from "../lib/CGF.js";
import {MyBird} from "./MyBird.js";

export class MyAnimatedBird extends CGFobject{
    constructor(scene, textures) {
        super(scene);
		this.scene = scene;
        this.obj = new MyBird(scene, textures);
        this.animVal = 0;
        this.elapsedTimeSecs;
    }

    update(timeSinceAppStart){
        var now = Date.now();
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
        console.log("Updating animVal...");
        console.log(this.animVal);
    }

    display()
    {
        this.scene.pushMatrix();
        this.scene.translate(0,this.animVal*2,0);
        console.log("Drawing Bird...");
        this.obj.display();

        this.scene.popMatrix();
    }
}