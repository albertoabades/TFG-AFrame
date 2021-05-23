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
    var data = this.data;
    var el = this.el;

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

    //Bucle para recorrer la matriz de datos_cilindros y generar cada cilindro que servirá de enlace
    for (let i = 0; i < datos_cilindros.length; i++) {
      // Se crea un cilindro para que haga de uniones entre cajas
      var cylEl = document.createElement('a-cylinder');
      //Se asignan las coordenadas recuperadas de la matriz de datos_cilindros al cilindro que servirá de enlace y se acaba de crear
      cylEl.setAttribute('position', 
        {
         x: datos_cilindros[i][1],
         y: datos_cilindros[i][2],
         z: datos_cilindros[i][3]
        })
      //Se asigna la rotación al cilindro para que se unan los router/cajas, se recuperan de la matriz de datos_cilindros
      cylEl.setAttribute('rotation', 
        {
          x: datos_cilindros[i][4], 
          y: datos_cilindros[i][5], 
          z: datos_cilindros[i][6]
        })
      // Se asigna un ID único al cilindro que servirá de enlace
      cylEl.setAttribute('ID', datos_cilindros[i][0]);
      // Se asigna un color al cilindro que servirá de enlace y se acaba de crear
      cylEl.setAttribute('color', '#74BEC1')
      // Se asigna un radio al cilindro que servirá de enlace y se acaba de crear
      cylEl.setAttribute('radius', 0.03)
      // Se asigna una longitud a los cilindro que servirán de enlace y se acabn de crear.
      if(datos_cilindros[i][0] == "s1s0" || datos_cilindros[i][0] == "s2s0"){
        cylEl.setAttribute('height', 3)
      }else{
        cylEl.setAttribute('height', 2)
      }
      
      // Create geometry.
      this.geometry  = new THREE.CylinderGeometry(data.radius, data.height);
      // Create material.
      this.material = new THREE.MeshStandardMaterial({color: data.color});
      // Create mesh.
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      // Set mesh on entity.
      cylEl.setObject3D('mesh', this.mesh);
      // Se incluye el cilindro que servirá de enlace y se acaba de crear en la escena
      document.querySelector('a-scene').appendChild(cylEl);
    }
  }
});