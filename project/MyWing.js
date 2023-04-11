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
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(-1,0,0);
        this.scene.pushMatrix();
        this.scene.translate(3,0,0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.rotate(-Math.PI/6, 0,1,0);
        this.scene.scale(1.5,1,1);
        this.wingBorder.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0.41,0,0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.rotate(Math.PI/6, 0,1,0);
        this.scene.scale(1.5,1,1);
        this.wingMiddle.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }

}