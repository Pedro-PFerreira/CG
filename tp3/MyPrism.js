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
        
        this.vertices = [];

        this.indices = [];

        this.normals = [];


        var angle = 360 / this.slices;

        for (var i = 0; i <=180; i += angle){
            this.vertices.push(Math.cos(i));
            this.vertices.push(0);
            this.vertices.push(Math.sin(i));

            this.vertices.push(Math.cos(i));
            this.vertices.push(2);
            this.vertices.push(Math.sin(i));
        }

        for (var i = 0; i <= this.slices - 2; i += 2){
            this.indices.push(i);
            this.indices.push(i+1);
            this.indices.push(i+2);


            this.indices.push(i);
            this.indices.push(i+2);
            this.indices.push(i+1);
        }

        

/*
		this.vertices = [
            //Face 1
            -0.5, 2, 0.5,   //0
            -0.5, 0, 0.5,   //1
            0.5, 0, 0.5,   	//2
            0.5, 2, 0.5,   	//3

            //Face 2
            0.5, 0, 0.5,   	//4
            0.5, 2, 0.5,   	//5
            1,0,0,          //6
			1,2,0,          //7

            //Face 3
            1,0,0,          //8
			1,2,0,          //9
            0.5, 2, -0.5,   //10
            0.5, 0, -0.5,   //11

            //Face 4
            0.5, 2, -0.5,   //12
            0.5, 0, -0.5,   //13
            -0.5, 0, -0.5,  //14
            -0.5, 2, -0.5,  //15

            //Face 5
            -0.5, 0, -0.5,  //16
            -0.5, 2, -0.5,  //17
            -1,0,0,         //18
            -1,2,0,         //19

            //Face 6
            -1,0,0,         //20
            -1,2,0,         //21
            -0.5, 2, 0.5,   //22
            -0.5, 0, 0.5    //23       
		];

		//Counter-clockwise reference of vertices
		this.indices = [

            //Face 1
            0,1,2,
            0,2,1,

            0,2,3,
            0,3,2,

            //Face 2
            4,5,6,
            4,6,5,

            5,6,7,
            5,7,6,

            //Face 3
            9,8,10,
            9,10,8,

            8,10,11,
            8,11,10,

            //Face 4
            12,13,14,
            12,14,13,

            12,15,14,
            12,14,15,

            //Face 5
            16,17,18,
            16,18,17,

            17,18,19,
            17,19,18,

            //Face 6
            20,21,22,
            20,22,21,

            20,22,23,
            20,23,22

		];

        
        this.normals = [
            //Face 1
            0,0,1,
            0,0,1,
            0,0,1,
            0,0,1,

            //Face 2
            1,0,1,
            1,0,1,
            1,0,1,
            1,0,1,

            //Face 3
            1,0,-1,
            1,0,-1,
            1,0,-1,
            1,0,-1,

            //Face 4
            0,0,-1,
            0,0,-1,
            0,0,-1,
            0,0,-1,

            //Face 5
            -1,0,-1,
            -1,0,-1,
            -1,0,-1,
            -1,0,-1,

            //Face 6
            -1,0,1,
            -1,0,1,
            -1,0,1,
            -1,0,1

        ]
*/
		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

    updateBuffers(complextity){
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}