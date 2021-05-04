AFRAME.registerComponent('cylinder', {
  schema: {
    radius: {type: 'number', default: 0.5},
    height: {type: 'number', default: 2},
    color: {type: 'color', default: '#74BEC1'}
  },

  /**
   * Initial creation and setting of the mesh.
   */
  init: function () {
    //var boxEl = document.createElement('a-box');
    var data = this.data;
    var el = this.el;

    let coordenadas = [
      ["s0", 4, 0.5, -1],
      ["s1", 2.3, 0.5, -4],
      ["s2", 2.3, 0.5, 2],
      ["s11", 1, 0.5, -3],
      ["s12", 1, 0.5, -5],
      ["s13", -1, 0.5, -5],
      ["s14", -1, 0.5, -3,],
      ["s21", 1, 0.5, 1],
      ["s22", 1, 0.5, 3],
      ["s23", -1, 0.5, 3],
      ["s24", -1, 0.5, 1]
      ]

    let uniones = [
      ["s11","s12"],
      ["s12","s13"],
      ["s13","s14"],
      ["s14","s11"]
    ]

    //Creacion de bloques de cajas a partir de coordenadad
      var cylEl = document.createElement('a-cylinder');
      cylEl.setAttribute('position', {x: 1, y: 0.5, z: -4})
      cylEl.setAttribute('rotation', {x: 0, y:90, z:90})
      cylEl.setAttribute('color', '#74BEC1')
      cylEl.setAttribute('radius', 0.03)
      cylEl.setAttribute('height', 2)
      //document.querySelector('a-scene').appendChild(cylEl);
      // Create geometry.
      //this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
      this.geometry  = new THREE.CylinderGeometry(data.radius, data.height);
      // Create material.
      this.material = new THREE.MeshStandardMaterial({color: data.color});
      // Create mesh.
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      //cube = new THREE.Mesh(this.geometry, this.material);
      // Set mesh on entity.
      cylEl.setObject3D('mesh', this.mesh);
      //el.setObject3D('mesh', this.mesh);
      //scene.add( cube );
      document.querySelector('a-scene').appendChild(cylEl);
  }
});