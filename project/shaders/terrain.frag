#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D textura;
uniform sampler2D altimetria;
varying float scale_alt;
varying float scale_tex;
variying float offset

void main() {

    vec4 cor_altimetria = texture2D(altimetria, scale_alt + offset);

    vec4 cor_textura = texture2D(altimetria, scale_tex + offset);

	gl_FragColor = cor_altimetria + cor_textura;
}