#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying float offset;
uniform sampler2D uSampler1;
uniform sampler2D uSampler3;


void main() {

    vec4 color1 = texture2D(uSampler3, vTextureCoord);

    vec4 color2 = texture2D(uSampler1, vec2(0, 1.0 - offset));

    // vec4 altColor = vec4(color1.r * 0.7, color1.g * 0.7, color1.b * 0.7, 1.0);

    // vec4 texColor = vec4(color2.r * 0.3, color2.g * 0.3, color2.b * 0.3, 1.0);

    // vec4 finalColor = mix(altColor, texColor, 0.5);

    gl_FragColor = 0.70 * color1 + 0.30 * color2;
}

