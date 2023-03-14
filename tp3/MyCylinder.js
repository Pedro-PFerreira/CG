import {CGFobject} from '../lib/CGF.js';
/**
 * MyPrism
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCylinder extends CGFobject {
    constructor(scene, slices, stacks){

        super(scene);

        this.slices = slices;

        this.stacks = stacks;

        this.initBuffers();

    }

    initBuffers() {
		this.vertices = [
            //Face 1
            -0.5, 2, 0.5,   //0 <- 22
            -0.5, 0, 0.5,   //1 <- 23
            0.5, 0, 0.5,   	//2 <- 4
            0.5, 2, 0.5,   	//3 <- 5
            1,0,0,          //4 <- 8
			1,2,0,          //5 <- 9            
            0.5, 2, -0.5,   //6 <- 12
            0.5, 0, -0.5,   //7 <- 13
            -0.5, 0, -0.5,  //8 <- 16
            -0.5, 2, -0.5,  //9 <- 17
            -1,0,0,         //10 <- 20
            -1,2,0,         //11 <- 21

/*
			0.5, 0, 0.5,   	//1
            -0.5, 0, 0.5,   //3
            -1, 0,0,        //4
            
            

            0,2,0,          //7
            0.5, 2, 0.5,   	//8

            -0.5, 2, 0.5,   //10
            -1, 2,0,        //11
            
            

            -0.5, 2, 0.5,   //10
            -0.5, 0, 0.5,   //3
            0.5, 0, 0.5,   	//1
*/        
		];

		//Counter-clockwise reference of vertices
		this.indices = [

            //Face 1
            0,1,2,
            0,2,1,

            0,2,3,
            0,3,2,

            
            //Face 2
            2,3,4,
            2,4,3,

            3,5,4,
            3,4,5,
            
            //Face 3
            4,5,7,
            4,7,5,
            
            5,6,7,
            5,7,6,
            
            //Face 4
            7,8,6,
            7,6,8,

            8,9,6,
            8,6,9,
            
            //Face 5
            8,9,10,
            8,10,9,
            
            9,11,10,
            9,10,11,
            
            //Face 6
            10,11,0,
            10,0,11,

            10,0,1,
            10,1,0
            
		];

        
        this.normals = [
            //Normal 1
            -1,0,1,
            -1,0,1,

            //Normal 2
            1,0,1,
            1,0,1,
            
            //Normal 3
            1,0,0,
            1,0,0,

            //Normal 4
            1,0,-1,
            1,0,-1,
            
            //Normal 5
            -1,0,-1,
            -1,0,-1,

            //Normal 6
            -1,0,0,
            -1,0,0,
        ]

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