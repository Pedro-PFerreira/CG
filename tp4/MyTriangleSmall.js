import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleSmall extends CGFobject {
	constructor(scene, color) {
		super(scene);
		this.initBuffers(color);
	}
	
	initBuffers(color) {
		this.vertices = [
			0, 1, 0,  //0
			-1, 0,0,  //1
			1, 0, 0,  //2

			0, 1, 0,  //0
			-1, 0,0,  //1
			1, 0, 0   //2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			0, 2, 1
		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,

			0,0,-1,
			0,0,-1,
			0,0,-1
		];

		if (color === 'purple'){
			this.texCoords = [
				0,0,   	   //A
				0,0.5,     //B
				0.25, 0.25 //C
			];
		}

		else if (color === 'red'){
			this.texCoords = [
				0.5, 0.5,    //A
				0.25, 0.75,  //B
				0.75, 0.75   //C
			];
		}

		

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

