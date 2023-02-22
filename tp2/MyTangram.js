import { CGFobject } from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";

/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);

        //Initialize scene objects
        this.tDiamond = new MyDiamond(this.scene);

        
    }
    display() {
        var angle = -20;
        var rotate = [
            Math.cos(angle), - Math.sin(angle), 0, 0,
            Math.sin(angle), Math.cos(angle), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]

        var translate = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 1, 0, 1
            ];

        this.scene.pushMatrix();
        this.scene.multMatrix(rotate);
        this.scene.multMatrix(translate);
        this.tDiamond.display();
        this.scene.popMatrix();
     }
}