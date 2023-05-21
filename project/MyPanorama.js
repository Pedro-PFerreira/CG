import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MySphere } from './MySphere.js';
/**
 * MyPanorama
 * @constructor
 * @param scene - Input Scene;
 * @param texture - Input Texture;
 * @param slices - Input number of slices;
 * @param stacks - Input number of stacks;
 */
export class MyPanorama extends CGFobject {
	constructor(scene, texture, slices, stacks) {
		super(scene);
		this.initMaterials(this.scene, texture);
        this.panorama = new MySphere(this.scene, slices, stacks, true);
	}

	/**
    * This initializes the materials for the terrain.
    */
	initMaterials(scene, texture){
		this.panoramaAppearance = new CGFappearance(scene);

		this.panoramaAppearance.setEmission(0.9, 0.9, 0.9, 1);

        this.panoramaAppearance.setShininess(300);

        this.panoramaAppearance.setTexture(texture);

        this.panoramaAppearance.setTextureWrap('REPEAT', 'REPEAT');
	}

	/**
	* This method displays the panorama, after making the necessary operations to be 
	* in the correct position;
	*/
	display() {

		var translatepanorama = [
			1,0,0,0,
			0,1,0,0,
			0,0,1,0,
			//this.scene.camera.position[0],this.scene.camera.position[1],this.scene.camera.position[2],1
			0,0,0,1
		];

		var scalepanorama = [
			200,0,0,0,
			0,200,0,0,
			0,0,200,0,
			0,0,0,1
		];

		this.scene.pushMatrix();
		this.scene.multMatrix(translatepanorama);
		this.scene.multMatrix(scalepanorama);
		this.panoramaAppearance.apply();
		this.panorama.display();
		this.scene.popMatrix();
	}


	/**
    * This method updates the buffers to draw the panorama in the scene.
    */
	updateBuffers(complexity){
        this.initBuffers();
        this.initNormalVizBuffers();
    }
    
}