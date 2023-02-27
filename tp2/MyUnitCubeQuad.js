import {CGFobject} from '../lib/CGF.js';
import {MyQuad} from './MyQuad.js';
/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);

        //Initialize scene objects
        this.quad1 = new MyQuad(this.scene);
        this.quad2 = new MyQuad(this.scene);
        this.quad3 = new MyQuad(this.scene);
        this.quad4 = new MyQuad(this.scene);
        this.quad5 = new MyQuad(this.scene);
        this.quad6 = new MyQuad(this.scene);
    }
    display(){

        var translateQuad1 = [
            0,0,0,0,
            0,0,0,0,
            0,0,0,0,
            0,0,0.5,0
          ]
        
        this.scene.pushMatrix();
        this.scene.multMatrix(translateQuad1);
        this.quad1.display();
        this.scene.popMatrix();

        this.quad2.display();
        this.quad3.display();
        this.quad4.display();
        this.quad5.display();
        this.quad6.display();
    }
}