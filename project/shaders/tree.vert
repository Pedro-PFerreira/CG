attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

attribute vec2 uv;
varying vec2 vUv;
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float uTerrainSize;
uniform vec3 treePosition;

void main() {

  // Calcular as coordenadas de textura para a posição da árvore
  vec3 worldPosition = (uMVMMatrix * vec4(aVertexPosition, 1.0)).xyz;
  vec2 uv = vec2(worldPosition.x / uTerrainSize, worldPosition.z / uTerrainSize);

  // Ler a altura do terreno na posição da árvore a partir da textura de altura
  float terrainHeight = texture2D(uHeightMap, uv).r * uTerrainSize;

  // Ajustar a posição da árvore em relação à altura do terreno
  worldPosition.y += terrainHeight;
  worldPosition.y += treePosition.y;

  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + height, 1.0);
  vUv = uv;
}