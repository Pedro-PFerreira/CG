import { CGFobject } from "../lib/CGF.js";
import { MyHead } from "./MyHead.js";
import { MySphere } from "./MySphere.js";
import { MyWing } from "./MyWing.js";
import { MyCylinder } from "./MyCylinder.js";
import { MyCone } from "./MyCone.js";
import { MyTail } from "./MyTail.js";
/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyBird extends CGFobject{
    constructor(scene, textures) {
		super(scene);
        //Texturas
        this.feathers_tex = textures[0];
        this.eyes_tex = textures[1];
        this.beak_tex = textures[2];

        //Asas
        this.wing = new MyWing(this.scene);
        //Olhos
        this.eye = new MySphere(this.scene,30,20);
        //Cabeça
        this.head = new MySphere(this.scene,30,20);
        //Corpo
        this.torso = new MySphere(this.scene,30,20);
        //Pescoço
        this.neck = new MyCylinder(this.scene,30,20);
        //Bico
        this.beak = new MyCone(this.scene,30,20);
        //Cauda
        this.tail = new MyTail(this.scene);

        this.parts = [this.wing,this.eye,this.head,this.torso,this.neck,this.beak,this.tail];
        this.animVal = 0;
	}

  display(){
    this.scene.pushMatrix();
    this.scene.translate(0,3,0);

    this.scene.pushMatrix();
    this.scene.translate(-2,0,0);
    this.feathers_tex.apply();
    this.tail.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.scale(2,1,1.5);
    this.scene.translate(0,0,0);
    this.torso.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0,1,-3);
    this.scene.rotate(Math.PI/2,0,1,0);
    this.wing.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.scale(1,1,-1);
    this.scene.translate(0,1,-3);
    this.scene.rotate(Math.PI/2,0,1,0);
    this.wing.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.scale(0.8,0.8,0.8);
    this.scene.translate(4,0,0);
    this.head.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(1.5,0,0);
    this.scene.rotate(Math.PI/2,0,1,0);
    this.scene.scale(0.3,0.3,1);
    this.feathers_tex.apply();
    this.neck.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(3.8,-0.1,0);
    this.scene.rotate(- Math.PI / 2, 0, 0, 1);
    this.scene.scale(0.35,1.3,0.35);
    this.beak_tex.apply();
    this.beak.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(3.8,0.3,0.5);
    this.scene.scale(0.2,0.2,0.2);
    this.eyes_tex.apply();
    this.eye.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(3.8,0.3,-0.5);
    this.scene.scale(0.2,0.2,0.2);
    this.eyes_tex.apply();
    this.eye.display();
    this.scene.popMatrix();

    this.scene.popMatrix();
  }

  updateBuffers(complexity){
  
    this.initBuffers();
    this.initNormalVizBuffers();
  }

  update(timeSinceAppStart){
    this.wing.update(timeSinceAppStart);
  }
}