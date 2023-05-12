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

        this.egg = new MySphere(scene, slices, stacks);

        this.initMaterials();

        this.x = this.getRandomIntInclusive(85, 105);

        this.z = this.getRandomIntInclusive(1,30);

        this.angle_rot = this.getRandomIntInclusive(0, 360);

    }

    initMaterials(){

        this.eggTexture = new CGFappearance(this.scene);
        this.eggTexture.setEmission(1,1,1,1);
        this.eggTexture.setShininess(20.0);
        this.eggTexture.loadTexture('images/egg_texture.jpg');
        this.eggTexture.setTextureWrap('REPEAT', 'REPEAT');

    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    display(){

        this.scene.pushMatrix();
        var y = -62.5; // Reference value for the height of the highplane + center os the egg
        this.scene.translate(this.x, y, this.z);
        this.scene.rotate(this.angle_rot * (Math.PI / 180),1,0,0,0);
        this.scene.scale(0.75,1.5,1);     
        this.eggTexture.apply();
        this.egg.display();
        this.scene.popMatrix();

    }

    updateBuffers(){
        this.initBuffers();
        this.initNormalVizBuffers();
    }

}