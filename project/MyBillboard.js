import {CGFappearance,CGFobject} from '../lib/CGF.js';
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
		
        this.initMaterials();
        this.display(x,y,z);
	}

    initMaterials(){
        this.billboardTexture = new CGFappearance(this.scene);
        this.billboardTexture.setEmission(1,1,1,1);
        this.billboardTexture.setShininess(20.0);
        this.billboardTexture.loadTexture('images/billboardtree.png');
        this.billboardTexture.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(x, y,z){

        //this.scene.translate(x,y,z);
        this.billboardTexture.apply();
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

    updateBuffers(){
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}

