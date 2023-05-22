import { CGFobject } from "../lib/CGF.js";
import { MyTriangle } from "./MyTriangle.js";
/**
 * MyTail
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTail extends CGFobject{
    constructor(scene) {
		super(scene);

        //Pena 1
        this.feather1 = new MyTriangle(this.scene);
        //Pena 2
        this.feather2 = new MyTriangle(this.scene);
	}
  /**
   * This displays the bird's tail
   */
  display(){


    this.scene.pushMatrix();
    this.scene.translate(0.5,-1,0);
    this.scene.rotate(Math.PI/2, 1, 0,0);
    this.scene.rotate(-Math.PI/2, 0, 0,1);
    this.scene.translate(0.5,-1.5,-1);
    this.scene.scale(0.5,1,0.5);
    this.feather1.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-0.5,-1,0);
    this.scene.rotate(Math.PI/2, 1, 0,0);
    this.scene.rotate(-Math.PI/2, 0, 0,1);
    this.scene.translate(-0.5,-0.5,-1);
    this.scene.scale(-0.5,1,0.5);
    this.feather2.display();
    this.scene.popMatrix();
    
  }

  updateBuffers(complexity){
  
    this.initBuffers();
    this.initNormalVizBuffers();
  }

}