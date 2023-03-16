import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
		
	}
	
	initBuffers() {
		this.vertices = [

			0.5, 0.5,-0.5,		//0
			-0.5, -0.5, -0.5,	//1
			-0.5, 0.5, -0.5,	//2
            0.5, -0.5, -0.5,    //3

			0.5, 0.5,0.5,		//4
			-0.5, -0.5, 0.5,	//5
			-0.5, 0.5, 0.5,		//6
            0.5, -0.5, 0.5    	//7

		];

		//Counter-clockwise reference of vertices
		this.indices = [
            
            //Face 1
			0, 1, 2,
			0, 2, 1,
			0,1,3,
			0,3,1,
			
            //Face 2

			0,2,6,
			0,6,2,
			0,6,4,
			0,4,6,

            //Face 3
            0,4,3,
			0,3,4,
			4,7,3,
			4,3,7,
            //Face 4
            4,6,5,
			4,5,6,
			4,5,7,
			4,7,5,
			
            //Face 5
            1,5,7,
			1,7,5,
			1,7,3,
			1,3,7,
            //Face 6
            6,2,1,
			6,1,2,
			6,1,5,
			6,5,1

		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}