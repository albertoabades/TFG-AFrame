AFRAME.registerComponent('red', {
  schema: {
    file_links: {type: 'string'}
  },

  init: function () {
    let data = this.data
    let array_links =[];
    let array_switches =[];
    let array_switches_final = [];

    const request = new XMLHttpRequest();
    const requestURL = data.file_links;

    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();

    request.onload = function() {
        const linkstxt = request.response;
        const links = JSON.parse(linkstxt);
        for (let i = 0; i < links.length; i++) {
            let origen = links[i].src.dpid;
            let destino = links[i].dst.dpid;
            let origen_destino = [];
            origen_destino.push(origen);
            origen_destino.push(destino);
            array_links.push(origen_destino);

            const existe_origen = array_switches.includes(origen);
            if (existe_origen == false){
                array_switches.push(origen);

            }
            const existe_destino = array_switches.includes(destino);
            if (existe_destino == false){
                array_switches.push(destino);
            }

        }

        for(let i = 0; i < array_switches.length; i++){
            let switch_coordenadas = [];
            switch_coordenadas.push(array_switches[i]);
            switch_coordenadas.push(Math.floor(Math.random() * ((array_switches.length+3) - (-3)) + (-3)));
            switch_coordenadas.push(0.5);
            switch_coordenadas.push(Math.floor(Math.random() * ((array_switches.length+3) - (-3)) + (-3)));
            array_switches_final.push(switch_coordenadas);
        }

        for (let i = 0; i < array_switches_final.length; i++) {
            var scene = document.querySelector('a-scene');
            var router = document.createElement('a-entity');
            var_x = array_switches_final[i][1];
            var_y = array_switches_final[i][2];
            var_z = array_switches_final[i][3];
            router.setAttribute('ID',array_switches_final[i][0]);
            router.setAttribute('geometry', {primitive: 'box'});
            router.setAttribute('material', 'color', 'blue');
            router.setAttribute('position', {x: var_x, y: var_y, z: var_z});
            router.setAttribute('scale', {x: 0.5, y: 0.5, z: 0.5});
            scene.appendChild(router);
        }

        for(let i = 0; i < array_links.length; i++){
            let switch_origen = array_links[i][0];
            let switch_destino = array_links[i][1];
            for(let i = 0; i < array_switches_final.length; i++){
                if(switch_origen == array_switches_final[i][0]){
                    coordXOrigen = array_switches_final[i][1];
                    coordYOrigen = array_switches_final[i][2];
                    coordZOrigen = array_switches_final[i][3];
                }
                if(switch_destino == array_switches_final[i][0]){
                    coordXDestino = array_switches_final[i][1];
                    coordYDestino = array_switches_final[i][2];
                    coordZDestino = array_switches_final[i][3];
                }
            }
            coordOrigen = String(coordXOrigen) + " " + String(coordYOrigen) + " " + String(coordZOrigen);
            coordDestino = String(coordXDestino) + " " + String(coordYDestino) + " " + String(coordZDestino);
            var enlace = document.createElement('a-entity');
            var scene = document.querySelector('a-scene');
            enlace.setAttribute('tube', {'path': [coordOrigen, coordDestino] , 'radius': '0.05' });
            enlace.setAttribute('material', 'color', 'red');
            enlace.setAttribute('material', 'opacity', '1');
            scene.appendChild(enlace);
        }
    }
  }

});