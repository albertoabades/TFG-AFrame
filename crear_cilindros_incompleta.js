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
      // Esta lógica sólo se aplica a un único cilindro hasta que se haga funcionar correctamente, por eso no hay bucle
      // Se crea un cilindro para que haga de uniones entre cajas
      var cylEl = document.createElement('a-cylinder');
      // Se utilizan los ID para saber cuales son los router/cajas que hay que unir
      var id1Concatenado = "#" + uniones[0][0];
      var id2Concatenado = "#" + uniones[0][1];
      // Se selecciona la escena donde buscar objetos por ID
      var escena = document.querySelector('a-scene');
      // Busca el objeto router/caja inicial con un ID concreto dentro de la escena
      var routerA = escena.querySelector(id1Concatenado);
      // Obtiene los atributos de posición del router/caja
      var routerACoordenadas = routerA.getAttribute('position');
      // Pinta en el log las coordenadas del router inicial
      console.log(routerACoordenadas);
      // Busca el objeto router/caja final con un ID concreto dentro de la escena
      var routerB = escena.querySelector(id2Concatenado);
      // Obtiene los atributos de posición del router/caja
      var routerBCoordenadas = routerB.getAttribute('position');
      // Pinta en el log las coordenadas del router final, en este caso sólo la coordenada x
      console.log(routerBCoordenadas.x);
      // Asigna un ID único al cilindro que sirve de enlace y acabamos de crear
      cylEl.setAttribute('ID', datos_cilindros[0][0]);
      // Asigna un color al cilindro que sirve de enlace y acabamos de crear
      cylEl.setAttribute('color', '#74BEC1')
      // Asigna un radio al cilindro que sirve de enlace y acabamos de crear
      cylEl.setAttribute('radius', 0.03)
      // Se calcula la longitud del cilindro que sirve de enlace y acabamos de crear
      // la fórmula utilizada para calcular la longitud es: d=sqrt((A.x-B.x)^2 + (A.y-B.y)^2 (A.z-B.z)^2)
      var Coordenadasx = parseFloat(routerACoordenadas.x) - parseFloat(routerBCoordenadas.x);
      var Coordenadasy = parseFloat(routerACoordenadas.y) - parseFloat(routerBCoordenadas.y);
      var Coordenadasz = parseFloat(routerACoordenadas.z) - parseFloat(routerBCoordenadas.z);
      var CoordenadasXX = Math.pow(Coordenadasx,2);
      var CoordenadasYY = Math.pow(Coordenadasy,2);
      var CoordenadasZZ = Math.pow(Coordenadasz,2);
      var sumaCoordenadas = CoordenadasXX + CoordenadasYY + CoordenadasZZ;
      var longitud = Math.sqrt(sumaCoordenadas);
      // Se asigna la longitud calculada al cilindro que sirve de enlace y acabamos de crear.
      cylEl.setAttribute('height', longitud);
      // Create geometry.
      this.geometry  = new THREE.CylinderGeometry(data.radius, data.height);
      // Create material.
      this.material = new THREE.MeshStandardMaterial({color: data.color});
      // Create mesh.
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      // Set mesh on entity.
      cylEl.setObject3D('mesh', this.mesh);
      //Se incluye la caja/router que se acaba de crear en la escena general
      document.querySelector('a-scene').appendChild(cylEl);
  }
});
