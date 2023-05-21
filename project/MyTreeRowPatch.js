import {CGFappearance,CGFobject} from '../lib/CGF.js';
import { MyBillboard } from './MyBillboard.js';
/**
 * MyTreeRowPatch
 * @constructor
 * @param {MyScene} scene - Reference to MyScene object
 */
export class MyTreeRowPatch extends CGFobject {
	constructor(scene, x,y,z) {
		super(scene);

        this.x = x;
        this.y = y;
        this.z = z;

        this.trees = [];

        this.aggregate(this.x, this.y, this.z);
        this.display();
	}

    initMaterials(){
        this.billboardTexture = new CGFappearance(this.scene);
        this.billboardTexture.setEmission(1,1,1,1);
        this.billboardTexture.setShininess(20.0);
        this.billboardTexture.loadTexture('images/billboardtree.png');
        this.billboardTexture.setTextureWrap('REPEAT', 'REPEAT');
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    /**
    * The method will join the various trees, put them in a row. The tree's 
    * coordinates are generated according to the first one, given in the parameters
    * x,y and z.
    * @param {*} x 
    * @param {*} y 
    * @param {*} z 
    */
    aggregate(x,y,z){

        let offset;
        for (let i = 0; i < 6;i++){
            offset = this.getRandomIntInclusive(-0.7, 0.7);
            let tree = new MyBillboard(this.scene, 
                x + offset, y, z + i*1.5 + offset);
            this.trees.push(tree);
        }
    
    }

    /**
	* This method displays the tree row patch, after making the necessary operations to be 
	* in the correct position;
	*/
    display(){
        
        for (let i = 0; i < this.trees.length; i++){
            this.trees[i].display();
        }
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

    /**
    * This method updates the buffers to draw the tree row in the scene.
    */
    updateBuffers(){
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}

