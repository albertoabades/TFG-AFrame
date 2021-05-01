var coordinates = AFRAME.utils.coordinates;

AFRAME.registerComponent('line', {
  // Allow line component to accept vertices and color.
  schema: {
  color: { default: '#2133C1' },

  path: {
    default: [
      { x: 0, y: 0, z: 0 },
      { x: 1, y: 0, z: 0 }
    ],

    // Deserialize path in the form of comma-separated vec3s: `0 0 0, 1 1 1, 2 0 3`.
    parse: function (value) {
      return value.split(',').map(coordinates.parse);
    },

    // Serialize array of vec3s in case someone does
    // setAttribute('line', 'path', [...]).
    stringify: function (data) {
      return data.map(coordinates.stringify).join(',');
    }
  }
},

init: function(){
	var data = this.data;
    var el = this.el;
    var material = new THREE.LineBasicMaterial({
    color: this.data.color
  });

  // Add vertices to geometry.
  var geometry = new THREE.Geometry();
  this.data.path.forEach(function (vec3) {
    geometry.vertices.push(
      new THREE.Vector3(vec3.x, vec3.y, vec3.z)
    );
  });

  // Apply mesh.
  this.el.setObject3D('mesh', new THREE.Line(geometry, material));
  document.querySelector('a-scene').appendChild(this.el);
},

  // Create or update the line geometry.
update: function (oldData) {
	var data = this.data;
    var el = this.el;
  // Set color with material.
  var material = new THREE.LineBasicMaterial({
    color: this.data.color
  });

  // Add vertices to geometry.
  var geometry = new THREE.Geometry();
  this.data.path.forEach(function (vec3) {
    geometry.vertices.push(
      new THREE.Vector3(vec3.x, vec3.y, vec3.z)
    );
  });

  // Apply mesh.
  this.el.setObject3D('mesh', new THREE.Line(geometry, material));
},

  // Remove the line geometry.
remove: function () {
  this.el.removeObject3D('mesh');
}
});