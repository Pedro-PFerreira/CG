import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MySemiCircle } from './My SemiCircle.js';
import { MySphere } from './MySphere.js';
/**
 * MyNest
 * @constructor
 * @param scene - Reference to MyScene object
 * @param slices - Reference to the number of slices
 * @param stacks - Reference to the number of stacks
 */
export class MyNest extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);

        this.nest = new MySemiCircle(scene, slices, stacks);

        this.eggs = [];

        this.initMaterials();

    }

    addEggs(egg){
        this.eggs.push(egg);
    }

    /**
    * This initializes the materials for the nest.
    */
    initMaterials(){

        this.nestTexture = new CGFappearance(this.scene);
        this.nestTexture.setEmission(1,1,1,1);
        this.nestTexture.setShininess(20.0);
        this.nestTexture.loadTexture('images/nest_texture.jpg');
        this.nestTexture.setTextureWrap('REPEAT', 'REPEAT');

    }

    /**
	* This method displays the nest, after making the necessary operations to be 
	* in the correct position;
	*/
    display(){

        this.scene.pushMatrix();
        this.scene.scale(3, 3, 3);
        this.scene.rotate(-Math.PI/2, 1,0,0,0);
        this.scene.translate(25, 5., -20);
        this.nestTexture.apply();
        for (let i = 0; i < this.eggs.length; i++){
            this.eggs[i].setCoordinates(47+ i,-62,2 + i);
        }

        this.nest.display();
        this.scene.popMatrix();
    }


    /**
    * This method updates the buffers to draw the nest in the scene.
    */
    updateBuffers(complexity){
       
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }

}