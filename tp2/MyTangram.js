import { CGFobject } from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleBig } from './MyTriangleBig.js';

/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);

        //Initialize scene objects
        this.square = new MyDiamond(this.scene);
        this.blueTriangle = new MyTriangleBig(this.scene);
        
    }
    display() {
        var angle = -20;
        var rotateSquare = [
            Math.cos(angle), - Math.sin(angle), 0, 0,
            Math.sin(angle), Math.cos(angle), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]

        var translateSquare = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 1, 0, 1
            ];

        var translateBlueTriangle = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -0.2, -2.07, 0, 1
            ];

        this.scene.pushMatrix();
        this.scene.multMatrix(rotateSquare);
        this.scene.multMatrix(translateSquare);
        this.square.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.multMatrix(translateBlueTriangle);
        this.blueTriangle.display();
     }
}