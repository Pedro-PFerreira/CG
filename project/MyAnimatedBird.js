import {MyBird} from "./MyBird.js";

export class MyAnimatedBird extends CGFobject{
    constructor(scene, s = 0, e = 0, st = 0, d = 1) {
		this.scene = scene;
        this.obj = new MyBird(scene);

        this.startVal=s;
        this.endVal=e;
        this.animStartTimeSecs=st;
        this.animDurationSecs=d;
        this.length=(this.endVal-this.startVal);

        this.animVal = this.startVal;
    }

    update(timeSinceAppStart){
        var elapsedTimeSecs = timeSinceAppStart - this.animStartTimeSecs;
        if(elapsedTimeSecs == 0.0 || elapsedTimeSecs == 0.5 || elapsedTimeSecs == 1.0){
            this.animVal = 0.0;
        }
        else if (elapsedTimeSecs > 0.0 && elapsedTimeSecs < 0.5){
            this.animVal = elapsedTimeSecs;
        }
        else if (elapsedTimeSecs > 0.5 && elapsedTimeSecs < 1){
            this.animVal = 1 - elapsedTimeSecs;
        }
    }

    display()
    {
        this.scene.pushMatrix();
        this.scene.translate(0,this.animVal,0);

        this.obj.display();

        this.scene.popMatrix();
    }
}