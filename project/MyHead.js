import { CGFobject } from "../lib/CGF.js";

export class MyHead extends CGFobject{
    constructor(scene){
        super(scene);
        this.initBuffers();
    }
    initBuffers(){
		this.vertices = [
			0, 0, 0.25,	//0
			1, 0, 1,	//1
			-1, 0, 1,	//2
			-0.5,-1, 1,	//3
            0.5, -1, 1,	//4
            1, 0, 2,	//5
			-1, 0, 2,	//6
			-0.5,-1, 2,	//7
            0.5, -1, 2,	//8
            0,0,2.75,      //9
            -0.5,1,1,   //10
            0.5, 1, 1,  //11
            -0.5,1,2,   //12
            0.5,1,2     //13
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0,11,1,
            0,2,10,
            0,10,11,
			0,1,4,
            0,3,2,
            0,4,3,
            1,11,5,
            10,2,6,
            6,12,10,
            10,12,11,
            12,13,11,
            11,13,5,
            5,8,1,
            1,8,4,
            6,2,7,
            2,3,7,
            3,4,7,
            7,4,8,
            9,6,7,
            9,8,5,
            9,7,8,
            9,13,12,
            9,12,6,
            9,5,13
		];

		this.normals = [
            
        ];
        /*
        for (var i = 0; i < 14; i++){
            var x,y,z;
            x = this.vertices[i * 3], y = this.vertices[i*3 + 1], z = this.vertices [i*3 + 2];
            console.log(this.normals);
            if(y == 1){
                this.normals.push(0,1,0);
                this.normals.push(0,1,0);
                this.normals.push(0,1,0);
                this.normals.push(0,1,0);
            }
            else if (y == -1){
                this.normals.push(0,-1,0);
                this.normals.push(0,-1,0);
                this.normals.push(0,-1,0);
                this.normals.push(0,-1,0);
            }
            else{
                this.normals.push(1,1,1);
                this.normals.push(1,1,1);
                this.normals.push(1,1,1);
                this.normals.push(1,1,1);
            }
        }*/
/*
		this.texCoords = [
			0, 0.5,     //A
			0,1,		//B
			0.5, 1, 	//C
            1,1,
		]*/
		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
    }
}