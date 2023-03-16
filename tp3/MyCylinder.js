import {CGFobject} from '../lib/CGF.js';
/**
 * MyCilinder
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCylinder extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);

        this.slices = slices;
        this.stacks = stacks;

		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [];
        this.indices = [];
        this.normals = [];

        var index = 0;
        var angle = 0;
        var angle_inc = 2*Math.PI/this.slices;

        for (var i = 0; i < this.stacks; i++){
            for(var j = 0; j < this.slices; j++){

                var height = (1/this.stacks);

                this.vertices.push(Math.cos(angle), Math.sin(angle), (i+1)*height);
                this.normals.push(Math.cos(angle), Math.sin(angle), 0);
                this.vertices.push(Math.cos(angle),Math.sin(angle),i*height);
                this.normals.push(Math.cos(angle),Math.sin(angle),0);

                angle += angle_inc;

                this.vertices.push(Math.cos(angle),Math.sin(angle), (i+1)*height);
                this.normals.push(Math.cos(angle), Math.sin(angle), 0);
                this.vertices.push(Math.cos(angle), Math.sin(angle), i*height);
                this.normals.push(Math.cos(angle), Math.sin(angle), 0);

                this.indices.push(index++, index++,index++);
                this.indices.push(index--,index--,index++);
                index += 2;
            }
        }

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangleles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
    /**
     * Called when user interacts with GUI to change object's complexity.
     * @param {integer} complexity - changes number of slices
    */ 
    updateBuffers(complexity){
        this.slices = 4 + Math.round(8 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}