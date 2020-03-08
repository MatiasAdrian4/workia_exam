
let personas = [
    { id: 0, colorPelo: "Rojo", padreId: null },
    { id: 1, colorPelo: "Rojo", padreId: 0 },
    { id: 2, colorPelo: "Negro", padreId: 1 },
    { id: 3, colorPelo: "Rojo", padreId: 1 },
    { id: 4, colorPelo: "Negro", padreId: 0 },
    { id: 5, colorPelo: "Rojo", padreId: 4 }
]

function es_pelirroja_handler(event) {
    event.preventDefault();
    id_persona = document.getElementById('person_id').value;
    let resultado = document.getElementById('result');
    if (personas[id_persona] != null) {
        if (esPelirroja(id_persona, personas)) {
            resultado.textContent = "Es pelirroja";
        } else {
            resultado.textContent = "No es pelirroja";
        };
    } else {
        resultado.textContent = "";
    }
}

function esPelirroja(id, personas) {
    p = personas[id]
    padre = p.padreId
    if ((p.colorPelo == "Rojo") && (padre == null)) {
        return true;
    } else if ((p.colorPelo == "Rojo") && (padre != null)) {
        return esPelirroja(padre, personas);
    } else {
        return false;
    }
}