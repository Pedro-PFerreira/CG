import {CGFappearance, CGFobject} from '../lib/CGF.js';
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

        this.egg = new MySphere(scene, slices, stacks, false);

        this.initMaterials();

	}

    initMaterials(){

        this.eggTexture = new CGFappearance(this.scene);
        this.eggTexture.setEmission(1,1,1,1);
        this.eggTexture.setShininess(20.0);
        this.eggTexture.loadTexture('images/egg_texture.jpg');
        this.eggTexture.setTextureWrap('REPEAT', 'REPEAT');

    }

    display(){

        this.scene.pushMatrix();
        this.scene.scale(0.75,1.5,1);
        this.scene.translate(150, -41.25, 10);     
        this.eggTexture.apply();
        this.egg.display();
        this.scene.popMatrix();

    }

    updateBuffers(){
        this.initBuffers();
        this.initNormalVizBuffers();
    }

}