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

    let datos_cilindros =[
      ["s11s12", 1, 0.5, -4, 0, 90, 90],
      ["s12s13", 0, 0.5, -5, 0, 0, 90],
      ["s13s14", -1, 0.5, -4, 0, 90, 90],
      ["s14s11", 0, 0.5, -3, 0, 0, 90],
      ["s21s22", 1, 0.5, 2, 0, 90, 90],
      ["s22s23", 0, 0.5, 3, 0, 0, 90],
      ["s23s24", -1, 0.5, 2, 0, 90, 90],
      ["s24s21", 0, 0.5, 1, 0, 0, 90],
      ["s11s1", 1.65, 0.5, -3.5, 0, 45, 90],
      ["s12s1", 1.65, 0.5, -4.5, 0, -45, 90],
      ["s21s2", 1.65, 0.5, 1.5, 0, -45, 90],
      ["s22s2", 1.65, 0.5, 2.5, 0, 45, 90],
      ["s1s0", 3.15, 0.5, -2.5, 0, -55, 90],
      ["s2s0", 3.15, 0.5, 0.5, 0, 55, 90]
    ]

    //Creacion de bloques de cajas a partir de coordenadad
    for (let i = 0; i < datos_cilindros.length; i++) {
      var cylEl = document.createElement('a-cylinder');
      cylEl.setAttribute('position', 
        {
         x: datos_cilindros[i][1], 
         y: datos_cilindros[i][2], 
         z: datos_cilindros[i][3]
        })
      cylEl.setAttribute('rotation', 
        {
          x: datos_cilindros[i][4], 
          y: datos_cilindros[i][5], 
          z: datos_cilindros[i][6]
        })
      cylEl.setAttribute('ID', datos_cilindros[i][0]);
      cylEl.setAttribute('color', '#74BEC1')
      cylEl.setAttribute('radius', 0.03)
      if(datos_cilindros[i][0] == "s1s0" || datos_cilindros[i][0] == "s2s0"){
        cylEl.setAttribute('height', 3)
      }else{
        cylEl.setAttribute('height', 2)
      }
      
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
  }
});