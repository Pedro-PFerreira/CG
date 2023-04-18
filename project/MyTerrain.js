import { CGFappearance, CGFshader, CGFtexture } from "../lib/CGF.js";
import {CGFobject} from '../lib/CGF.js';
import { MyPlane } from './MyPlane.js';
/**
* MyTerrain
* @constructor
 * @param scene - Reference to MyScene object
 * @param nDivs - number of divisions in both directions of the surface
 * @param numText - number of the selected Texture
*/
export class MyTerrain extends CGFobject {
	constructor(scene, nDivs, numText) {
		super(scene);
		this.plane = new MyPlane(scene, nDivs);
		this.initMaterials(this.scene);
        this.numText = numText;
	}

    initMaterials(scene){
        this.planeMaterial1 = new CGFappearance(scene);
        this.planeMaterial1.setAmbient(1, 1, 1, 1);
        this.planeMaterial1.setDiffuse(1, 1, 1, 1);
        this.planeMaterial1.setSpecular(0.1, 0.1, 0.1, 1);
        this.planeMaterial1.setEmission(1,1,1,1);
        this.planeMaterial1.setShininess(20.0);
        this.planeMaterial1.loadTexture('images/terrain.jpg');
        this.planeMaterial1.setTextureWrap('REPEAT', 'REPEAT');

        this.planeMaterial2 = new CGFappearance(scene);
        this.planeMaterial2.setAmbient(1, 1, 1, 1);
        this.planeMaterial2.setDiffuse(1, 1, 1, 1);
        this.planeMaterial2.setSpecular(0.1, 0.1, 0.1, 1);
        this.planeMaterial2.setEmission(1,1,1,1);
        this.planeMaterial2.setShininess(20.0);
        this.planeMaterial2.loadTexture('images/heightmap.jpg');
        this.planeMaterial2.setTextureWrap('REPEAT', 'REPEAT');
    }

	display(){
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 1,0,0);
        if (this.numText == 1){
            
            this.planeMaterial1.apply();
        }
        else if (this.numText == 2){
            
            this.planeMaterial2.apply();
        }
        this.plane.display();
        this.scene.popMatrix();
    }

    updateBuffers(){
        this.initBuffers();
        this.initNormalVizBuffers();
    }

}


