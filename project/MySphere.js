import {CGFobject} from '../lib/CGF.js';
/**
 * MySphere
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MySphere extends CGFobject {
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
        this.textCoords = [];

        var index = 0;
        var theta = 0;
        var alpha = 0;
        var theta_inc = Math.PI / 2*this.stacks;
        var alpha_inc = (2*Math.PI) / this.slices;
        var vertices_inc = this.slices +1;

        for (var i = 0; i <= (2*this.stacks); i++){
            var sin_theta = Math.sin(theta);
            var cos_theta = Math.cos(alpha);

            alpha = 0;
            for (var j = 0; j <= this.slices; j++){
                this.vertices.push(Math.cos(alpha)* sin_theta);
                this.vertices.push(cos_theta);
                this.vertices.push(Math.cos(-alpha)* sin_theta);
                
                this.normals.push(Math.cos(alpha)* sin_theta);
                this.normals.push(cos_theta);
                this.normals.push(Math.cos(-alpha)* sin_theta);


                if (j < (this.stacks * 2) && (i < this.slices)){
                    this.indices.push(j*vertices_inc+ i + 1);
                    this.indices.push(j*vertices_inc+ i);
                    this.indices.push(j*vertices_inc+ i+ this.slices + 1);                    
                }

                this.textCoords.push(i/(this.slices), j/(this.stacks*2));
                
                alpha += alpha_inc

            }

            theta += theta_inc;
        }

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangleles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
    
}