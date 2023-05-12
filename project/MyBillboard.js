import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';
/**
 * MyBillboard
 * @constructor
 * @param {MyScene} scene - Reference to MyScene object
 * @param {Array} coords - Array of texture coordinates (optional)
 */
export class MyBillboard extends CGFobject {
	constructor(scene, coords, x,y,z) {
		super(scene);

        this.quad = new MyQuad(scene, coords);
		
        this.display(x,y,z);
	}

    display(x, y,z){

        this.scene.translate(x,y,z);

        this.quad.display();
    }

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}

