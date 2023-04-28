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
    constructor(scene) {
		super(scene);
        //Asas
        this.wing = new MyWing(this.scene);
        //Olhos
        this.eye = new MySphere(this.scene,30,20);
        //Cabeça
        this.head = new MyHead(this.scene);
        //Corpo
        this.torso = new MyHead(this.scene);
        //Pescoço
        this.neck = new MyCylinder(this.scene,30,20);
        //Bico
        this.beak = new MyCone(this.scene,30,20);
        //Cauda
        this.tail = new MyTail(this.scene);

	}

  display(){

    this.scene.pushMatrix();
    this.scene.translate(-2,0,0);
    this.tail.display();
    this.scene.popMatrix();


    this.scene.pushMatrix();
    this.scene.scale(2,1,1.5);
    this.scene.translate(0,0,-1.5);
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
    this.scene.translate(4,0,-1.5);
    this.head.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(1.5,0,0);
    this.scene.rotate(Math.PI/2,0,1,0);
    this.scene.scale(0.3,0.3,1);
    this.neck.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(3.8,-0.1,0);
    this.scene.rotate(- Math.PI / 2, 0, 0, 1);
    this.scene.scale(0.35,1.3,0.35);
    this.beak.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(3.8,0.3,0.5);
    this.scene.scale(0.2,0.2,0.2);
    this.eye.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(3.8,0.3,-0.5);
    this.scene.scale(0.2,0.2,0.2);
    this.eye.display();
    this.scene.popMatrix();
  }

  updateBuffers(complexity){
  
    this.initBuffers();
    this.initNormalVizBuffers();
  }

}