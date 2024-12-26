attribute float angle;
uniform float uTime;
uniform float uRadius;
varying vec3 vColor;

void main() {
  float variance = 0.2 * sin(uTime + angle * 10.0);
  float currentAngle = angle + uTime * 0.5;

  vec3 newPosition = vec3(
    (uRadius + variance) * cos(currentAngle),
    (uRadius + variance) * sin(currentAngle),
    position.z
  );

  vColor = vec3(0.5 + 0.5 * sin(currentAngle), 0.5 + 0.5 * cos(currentAngle), 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  gl_PointSize = 3.0;
}
