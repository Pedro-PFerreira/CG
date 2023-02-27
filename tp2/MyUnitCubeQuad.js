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
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,0,0.5,1
          ]

        var translateQuad2 = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,0,-0.5,1
          ]
        var angle = 90 * (Math.PI / 180);
        var rotateQuad3 = [
            Math.cos(angle),0,Math.sin(angle),0,
            0,1,0,0,
            -Math.sin(angle),0,Math.cos(angle),0,
            0,0,0,1
        ]

        var translateQuad3 = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            -0.5,0,0,1
          ]
        
        angle = - 90 * (Math.PI / 180);
        var rotateQuad4 = [
            Math.cos(angle),0,Math.sin(angle),0,
            0,1,0,0,
            -Math.sin(angle),0,Math.cos(angle),0,
            0,0,0,1
        ]
  
        var translateQuad4 = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0.5,0,0,1
        ]

        angle = - 90 * (Math.PI / 180);
        var rotateQuad5 = [
            1,0,0,0,
            0,Math.cos(angle),-Math.sin(angle),0,
            0,Math.sin(angle),Math.cos(angle),0,
            0,0,0,1
        ]
  
        var translateQuad5 = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,-0.5,0,1
        ]

        angle = 90 * (Math.PI / 180);
        var rotateQuad6 = [
            1,0,0,0,
            0,Math.cos(angle),-Math.sin(angle),0,
            0,Math.sin(angle),Math.cos(angle),0,
            0,0,0,1
        ]
  
        var translateQuad6 = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,0.5,0,1
        ]
        
        this.scene.pushMatrix();
        this.scene.multMatrix(translateQuad1);
        this.quad1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translateQuad2);
        this.quad2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translateQuad3);
        this.scene.multMatrix(rotateQuad3);
        this.quad3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translateQuad4);
        this.scene.multMatrix(rotateQuad4);
        this.quad4.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translateQuad5);
        this.scene.multMatrix(rotateQuad5);
        this.quad5.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translateQuad6);
        this.scene.multMatrix(rotateQuad6);
        this.quad6.display();
        this.scene.popMatrix();
    }
}