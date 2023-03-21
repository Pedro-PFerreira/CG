# CG 2022/2023

## Group T01G01

## TP 4 Notes

### Exercise 1

- The main goal of this exercise was to understand how we can create a texture using an image. For that, we were asked to add the respective tangram textures to each piece of our tangram.

- In order to do that, it was mandatory to create the texture's coordinates, so that WebGL knows in what "points" of the image should use to delimit it and fill the various figures, which wasn't a problem at all, thanks to "tangram-lines.png" image. Here is the final result:

![Figure 1](./screenshots/cg-t01g01-tp4-1.png)

### Exercise 2

- The goal of this exercise was to understand how to apply different textures to an object that is composed of different smaller objects and, additionally, understand how texture definition works.

- In order to solve the exercise, we configured the textures in MyScene instead of MyUnitCubeQuad and changed the filtering mode after applying each texture and before displaying each MyQuad object that composes the Cube.

![Figure 2](./screenshots/cg-t01g01-tp4-2.png)
