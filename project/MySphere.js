import {CGFobject} from '../lib/CGF.js';
/**
 * MySphere
 * @constructor
 * @param scene - Reference to MyScene object
 * @param slices - Reference to the number of slices
 * @param stacks - Reference to the number of stacks
 */
export class MySphere extends CGFobject {
	constructor(scene, slices, stacks, inverted) {
		super(scene);
        this.inverted = inverted;
        this.slices = slices;
        this.stacks = stacks;

		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var latDivs = 2*this.stacks;

        var theta = 0;
        var alpha = 0;
        var theta_inc = Math.PI / latDivs;
        var alpha_inc = (2*Math.PI) / this.slices;  
        var vertices_inc = this.slices +1;


        for (var i = 0; i <= latDivs; i++){
            var sin_theta = Math.sin(theta);
            var cos_theta = Math.cos(theta);

            alpha = 0;
            for (var j = 0; j <= this.slices; j++){
                var x = Math.cos(alpha)* sin_theta;
                var y = cos_theta;
                var z = Math.sin(-alpha)* sin_theta;
                if (this.inverted){
                    z = -z;
                }                

                this.vertices.push(x);
                this.vertices.push(y);
                this.vertices.push(z);

                if (i < latDivs && j < this.slices){
                    var current = i * vertices_inc + j;
                    var next = current + vertices_inc;
 
                    this.indices.push(current + 1);
                    this.indices.push(current);
                    this.indices.push(next);
                    
                    this.indices.push(current + 1);
                    this.indices.push(next);
                    this.indices.push(next + 1);
                }

                this.normals.push(x);
                this.normals.push(y);
                this.normals.push(z);

                alpha += alpha_inc

                this.texCoords.push(j/this.slices, i/latDivs);
                
            }
            theta += theta_inc;

        }

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangleles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
    
}