import {CGFobject} from '../lib/CGF.js';
import { MySphere } from './MySphere.js';
/**
 * MyBirdEgg
 * @constructor
 * @param scene - Reference to MyScene object
 * @param slices - Reference to the number of slices
 * @param stacks - Reference to the number of stacks
 */
export class MyBirdEgg extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);

        this.egg = new MySphere(scene, slices, stacks, false)

	}

    display(){

        this.scene.pushMatrix();
        this.scene.scale(0.75,1.5,1);
        this.egg.display();
        this.scene.popMatrix();

    }

    updateBuffers(){
        this.initBuffers();
        this.initNormalVizBuffers();
    }

}