import {CGFobject} from '../lib/CGF.js';
/**
 * MyPrism
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPrism extends CGFobject {
    constructor(scene, slices, stacks){

        super(scene);

        this.slices = slices;

        this.stacks = stacks;

        this.initBuffers();

    }

    initBuffers() {
		this.vertices = [
			0,0,0,  	    //0
			0.5, 0, 0.5,   	//1
			1,0,0,          //2
            -0.5, 0, 0.5,   //3
            -1, 0,0,        //4
            -0.5, 0, -0.5,  //5
            0.5, 0, -0.5,   //6

            0,2,0,          //7
            0.5, 2, 0.5,   	//8
			1,2,0,          //9
            -0.5, 2, 0.5,   //10
            -1, 2,0,        //11
            -0.5, 2, -0.5,  //12
            0.5, 2, -0.5    //13
            
		];

		//Counter-clockwise reference of vertices
		this.indices = [

            //Base
			0,2,1,
            0,1,2,

            0,1,3,
            0,3,1,

            0,3,4,
            0,4,3,

            0,4,5,
            0,5,4,

            0,5,6,
            0,6,5,

            0,6,2,
            0,2,6,


            //Topo
            7,9,8,
            7,8,9,

            7,8,10,
            7,10,8,

            7,10,11,
            7,11,10,

            7,11,12,
            7,12,11,

            7,12,13,
            7,13,12,

            7,13,9,
            7,9,13,

            //Faces laterais (cada uma dividida em 2 triângulos)

            10,3,1,
            10,1,3,

            10,1,6,
            10,6,1,

            10,4,3,
            10,3,4,

            11,4,10,
            11,10,4,

            11,4,5,
            11,5,4,

            11,5,12,
            11,12,5,

            12,5,6,
            12,6,5,

            12,6,13,
            12,13,6,

            13,6,9,
            13,9,6,

            9,6,2,
            9,2,6,

            8,2,9,
            8,9,2,
            
            8,1,2,
            8,2,1

		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}