import { CGFappearance, CGFshader, CGFtexture } from "../lib/CGF.js";
import {CGFobject} from '../lib/CGF.js';

/**
* MyTerrain
* @constructor
 * @param scene - Reference to MyScene object
 * @param nDivs - number of divisions in both directions of the surface
 * @param numText - number of the selected Texture
*/
export class MyTerrain extends CGFobject {
	constructor(scene, plane) {
		super(scene);
        this.plane = plane;
		this.initMaterials(this.scene);
        this.initTextures(this.scene);
	}

    /**
    * This initializes the materials for the terrain.
    */
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
        this.terrainMaterial2.loadTexture('images/heightmap_modified_2".jpg');
        this.terrainMaterial2.setTextureWrap('REPEAT', 'REPEAT');

    }

    /**
    * This initializes the textures for terrain's shaders.
    */
    initTextures(scene){

        scene.gl.clearDepth(10000.0);
		scene.gl.clearColor(1, 1, 1, 1.0);
		scene.gl.enable(scene.gl.DEPTH_TEST);
		scene.gl.enable(scene.gl.CULL_FACE);
		scene.gl.depthFunc(scene.gl.LEQUAL);

        scene.enableTextures(true);
        
        scene.testShaders = [new CGFshader(scene.gl, "shaders/terrain.vert", "shaders/terrain.frag")];
        scene.testShaders[0].setUniformsValues({uSampler1: 1});
        scene.testShaders[0].setUniformsValues({uSampler2: 2});
        scene.testShaders[0].setUniformsValues({uSampler3: 3});
        this.texture1 = new CGFtexture(scene, "images/altimetry.png");
        this.texture2 = new CGFtexture(scene, "images/heightmap_modified_2.jpg");
        this.texture3 = new CGFtexture(scene, "images/terrain.jpg");

        scene.pushMatrix();
    }

    /**
	* This method displays the scene's terrain, after making the necessary operations to be 
	* in the correct position;
	*/
	display(){
        this.scene.pushMatrix();
        this.scene.translate(0,-100,0);
        this.scene.scale(400,400,400);
        this.scene.rotate(-Math.PI/2.0,1,0,0);
        this.texture1.bind(1);
        this.texture2.bind(2);
        this.texture3.bind(3);
        this.terrainMaterial1.apply();
        this.plane.display();
        this.scene.popMatrix();
    }

    /**
    * This method updates the buffers to draw the terrain in the scene.
    */
    updateBuffers(){
        this.initBuffers();
        this.initNormalVizBuffers();
    }

}


