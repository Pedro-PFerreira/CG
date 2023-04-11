import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MySphere } from './MySphere.js';
/**
 * MyPlane
 * @constructor
 * @param sphere - Input Sphere
 */
export class MyPanorama extends CGFobject {
	constructor(scene, texture, slices, stacks) {
		super(scene);

        this.sphere = new MySphere(this.scene, slices, stacks, true);

        this.panorama_appearance = new CGFappearance(scene);

		this.initBuffers(texture, slices, stacks);
	}
	
	display(texture) {

        this.panorama_appearance.setShininess(300);

        this.panorama_appearance.setTexture(texture);

        this.panorama_appearance.setTextureWrap('REPEAT', 'REPEAT');

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangleles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
    
}