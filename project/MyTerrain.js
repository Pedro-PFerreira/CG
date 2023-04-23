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
        this.numText = numText;
		this.plane = new MyPlane(scene, nDivs);
		this.initMaterials(this.scene);
        this.initTextures(this.scene);
	}

    initMaterials(scene){
        this.terrainMaterial1 = new CGFappearance(scene);
        this.terrainMaterial1.setAmbient(1, 1, 1, 1);
        this.terrainMaterial1.setDiffuse(1, 1, 1, 1);
        this.terrainMaterial1.setSpecular(0.1, 0.1, 0.1, 1);
        this.terrainMaterial1.setEmission(1,1,1,1);
        this.terrainMaterial1.setShininess(20.0);
        this.terrainMaterial1.loadTexture('images/terrain.jpg');
        this.terrainMaterial1.setTextureWrap('REPEAT', 'REPEAT');

        this.terrainMaterial2 = new CGFappearance(scene);
        this.terrainMaterial2.setAmbient(1, 1, 1, 1);
        this.terrainMaterial2.setDiffuse(1, 1, 1, 1);
        this.terrainMaterial2.setSpecular(0.1, 0.1, 0.1, 1);
        this.terrainMaterial2.setEmission(1,1,1,1);
        this.terrainMaterial2.setShininess(20.0);
        this.terrainMaterial2.loadTexture('images/heightmap_modified.jpg');
        this.terrainMaterial2.setTextureWrap('REPEAT', 'REPEAT');

    }

    initTextures(scene){

        scene.enableTextures();

        scene.gl.clearDepth(10000.0);
		scene.gl.clearColor(1, 1, 1, 1.0);
		scene.gl.enable(scene.gl.DEPTH_TEST);
		scene.gl.enable(scene.gl.CULL_FACE);
		scene.gl.depthFunc(scene.gl.LEQUAL);

        scene.enableTextures(true);

        scene.testShaders = [
            new CGFshader(scene.gl, "shaders/terrain.vert", "shaders/terrain.frag")
        ];

        scene.testShaders[0].setUniformsValues({uSampler: 1});

        scene.setActiveShader(scene.testShaders[0]);

        scene.pushMatrix();
    }



	display(){
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/2, 1,0,0);
        if (this.numText == 1){
            
            this.terrainMaterial1.apply();
        }
        else if (this.numText == 2){
            
            this.terrainMaterial2.apply();
        }
        this.plane.display();
        this.scene.popMatrix();
    }

    updateBuffers(){
        this.initBuffers();
        this.initNormalVizBuffers();
    }

}


