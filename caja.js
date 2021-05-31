AFRAME.registerComponent('box', {
  schema: {
    width: {type: 'number', default: 0.5},
    height: {type: 'number', default: 0.5},
    depth: {type: 'number', default: 0.5},
    color: {type: 'color', default: '#74BEC1'},
    pos: {type: 'vec3'}, 
  },

  /**
   * Initial creation and setting of the mesh.
   */
  init: function () {
    var data = this.data;
    var el = this.el;

    data.pos.x = 4;
    data.pos.y = 0.5;
    data.pos.z = -1;
    data.color = 'blue';

    //Bucle para recorrer la matriz de coordenadas y generar cada caja/router
      //Se crea un elemento genérico de tipo cada
      //var packet_eth = document.createElement('a-entity');
      el.setAttribute('geometry', {primitive: 'box'});
      el.setAttribute('material', 'color', 'blue');
      el.setAttribute('scale', {x : 2 , y : 0.25 , z : 1});
      el.setAttribute('position', data.pos);
      el.setAttribute('material', 'color', data.color);
      //Se asigna un ID único a la caja/router que se acaba de crear para poder identificarlo de manera única
      el.setAttribute('ID', "Probando");
      // Create geometry.
      //this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
      // Create material.
      //this.material = new THREE.MeshStandardMaterial({color: data.color});
      // Create mesh.
      //this.mesh = new THREE.Mesh(this.geometry, this.material);
      // Set mesh on entity.
      //packet_eth.setObject3D('mesh', this.mesh);
      //Se incluye la caja/router que se acaba de crear en la escena general
      document.querySelector('a-scene').appendChild(el);
      // We obtain position Node From
      let node_from_el = document.getElementById('Probando');
      let pos1 = node_from_el.getAttribute('position');
      let pos_from = Object.values(pos1);
      console.log("position: " + pos_from);
      let scale1 = node_from_el.getAttribute('scale');
      let scale_from = Object.values(scale1);
      console.log("scale: " + scale_from);
  }
});