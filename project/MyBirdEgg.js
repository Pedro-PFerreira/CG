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
	constructor(scene, slices, stacks, isPicked = false) {
		super(scene);

        this.egg = new MySphere(scene, slices, stacks);

        this.initMaterials();
        if(isPicked){
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }
        else{
            this.x = this.getRandomIntInclusive(85, 115);
            this.z = this.getRandomIntInclusive(-15,-6);
            this.y = -62.5; // Reference value for the height of the highplane + center os the egg
        }
        this.angle_rot = this.getRandomIntInclusive(0, 360);

    }

    setCoordinates(x,y,z){
        this.x = x;

        this.y = y;

        this.z = z;
    }

    getCoordinates(){
        return [this.x, this.y, this.z];
    }

    /**
     * This initializes the textures for the eggs.
     */
    initMaterials(){

        this.eggTexture = new CGFappearance(this.scene);
        this.eggTexture.setEmission(1,1,1,1);
        this.eggTexture.setShininess(20.0);
        this.eggTexture.loadTexture('images/egg_texture.jpg');
        this.eggTexture.setTextureWrap('REPEAT', 'REPEAT');

    }

    /**
     * The function will generate the positions for the eggs within the boundaries defined 
     * by min and max
     * @param min 
     * @param max 
     * @returns 
     */
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    /**
	* This method displays an egg, after making the necessary operations to be 
	* in the correct position;
	*/
    display(){

        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angle_rot * (Math.PI / 180),1,0,0,0);
        this.scene.scale(0.75,1.5,1);     
        this.eggTexture.apply();
        this.egg.display();
        this.scene.popMatrix();

    }

    /**
     * This method updates the buffers to draw the egg in the scene.
     */
    updateBuffers(){
        this.initBuffers();
        this.initNormalVizBuffers();
    }

}