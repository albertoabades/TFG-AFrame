AFRAME.registerComponent('box', {
  schema: {
    width: {type: 'number', default: 0.5},
    height: {type: 'number', default: 0.5},
    depth: {type: 'number', default: 0.5},
    color: {type: 'color', default: '#74BEC1'}
  },

  /**
   * Initial creation and setting of the mesh.
   */
  init: function () {
    var data = this.data;
    var el = this.el;

    //Matriz para asignar coordenadas a cada caja/router que se va a crear
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

    //Bucle para recorrer la matriz de coordenadas y generar cada caja/router
    for (let i = 0; i < coordenadas.length; i++) {
      //Se crea un elemento genérico de tipo cada
      var boxEl = document.createElement('a-box');
      //Se asignan las coordenadas recuperadas de la matriz de coordenadas
      boxEl.setAttribute('position', {
        x: coordenadas[i][1],
        y: coordenadas[i][2],
        z: coordenadas[i][3]
      })
      //Se asigna un color diferente a cada caja/router que se acaba de crear en función del tipo que es
      if (coordenadas[i][0] == "s0"){
        boxEl.setAttribute('color', '#000000');
      }else if (coordenadas[i][0].length == 2 && coordenadas[i][0] != "s0"){
        boxEl.setAttribute('color', '#264BFF');
      }else{
        boxEl.setAttribute('color', '#C13C39');
      }
      //Se asigna la escala de a la caja/router que se acaba de crear, en este caso se reduce a la mitad 
      boxEl.setAttribute('scale', {x: 0.5, y:0.5, z:0.5})
      //Se asigna un ID único a la caja/router que se acaba de crear para poder identificarlo de manera única
      boxEl.setAttribute('ID', coordenadas[i][0]);
      // Create geometry.
      this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
      // Create material.
      this.material = new THREE.MeshStandardMaterial({color: data.color});
      // Create mesh.
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      // Set mesh on entity.
      boxEl.setObject3D('mesh', this.mesh);
      //Se incluye la caja/router que se acaba de crear en la escena general
      document.querySelector('a-scene').appendChild(boxEl);
    }
  }
});