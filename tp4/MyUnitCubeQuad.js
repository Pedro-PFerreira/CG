import { CGFappearance, CGFobject } from '../lib/CGF.js';
import {MyQuad} from './MyQuad.js';
/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
    constructor(scene, sideTexture, topTexture, bottomTexture) {
        super(scene);
        this.sideTexture = sideTexture;
        this.topTexture = topTexture;
        this.bottomTexture = bottomTexture;
        this.initMaterials(this.scene, this.sideTexture, this.topTexture, this.bottomTexture);
        //Initialize scene objects
        this.quad1 = new MyQuad(this.scene);
    }

    initMaterials(scene, sideTexture, topTexture, bottomTexture){
        this.mineTop = new CGFappearance(scene);
        this.mineTop.setAmbient(1, 1, 1, 1);
        this.mineTop.setDiffuse(1, 1, 1, 1);
        this.mineTop.setSpecular(0.1, 0.1, 0.1, 1);
        this.mineTop.setShininess(10.0);
        this.mineTop.loadTexture(topTexture);
        this.mineTop.setTextureWrap('REPEAT', 'REPEAT');

        this.mineSide = new CGFappearance(scene);
        this.mineSide.setAmbient(1, 1, 1, 1);
        this.mineSide.setDiffuse(1, 1, 1, 1);
        this.mineSide.setSpecular(0.1, 0.1, 0.1, 1);
        this.mineSide.setShininess(10.0);
        this.mineSide.loadTexture(sideTexture);
        this.mineSide.setTextureWrap('REPEAT', 'REPEAT');

        this.mineBottom = new CGFappearance(scene);
        this.mineBottom.setAmbient(1, 1, 1, 1);
        this.mineBottom.setDiffuse(1, 1, 1, 1);
        this.mineBottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.mineBottom.setShininess(10.0);
        this.mineBottom.loadTexture(bottomTexture);
        this.mineBottom.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(){

        var translateQuad1 = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,0,0.5,1
          ]
        
        var angle = 180 * (Math.PI / 180);
        var rotateQuad2 = [
            Math.cos(angle),0,Math.sin(angle),0,
            0,1,0,0,
            -Math.sin(angle),0,Math.cos(angle),0,
            0,0,0,1
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
        
        //Side
        this.scene.pushMatrix();
        this.scene.multMatrix(translateQuad1);
        this.mineSide.apply();
        this.quad1.display();
        this.scene.popMatrix();

        //Side
        this.scene.pushMatrix();
        this.scene.multMatrix(translateQuad2);
        this.scene.multMatrix(rotateQuad2);
        this.mineSide.apply();
        this.quad1.display();
        this.scene.popMatrix();

        //Side
        this.scene.pushMatrix();
        this.scene.multMatrix(translateQuad3);
        this.scene.multMatrix(rotateQuad3);
        this.mineSide.apply();
        this.quad1.display();
        this.scene.popMatrix();

        //Side
        this.scene.pushMatrix();
        this.scene.multMatrix(translateQuad4);
        this.scene.multMatrix(rotateQuad4);
        this.mineSide.apply();
        this.quad1.display();
        this.scene.popMatrix();

        //Bottom
        this.scene.pushMatrix();
        this.scene.multMatrix(translateQuad5);
        this.scene.multMatrix(rotateQuad5);
        this.mineBottom.apply();
        this.quad1.display();
        this.scene.popMatrix();

        //Top
        this.scene.pushMatrix();
        this.scene.multMatrix(translateQuad6);
        this.scene.multMatrix(rotateQuad6);
        this.mineTop.apply();
        this.quad1.display();
        this.scene.popMatrix();
    }
}