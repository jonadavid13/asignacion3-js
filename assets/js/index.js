const modal = document.getElementById('modalActividad');
const form = document.getElementById('actividadForm');

const marca = modal.querySelector('#marca');
const modelo = modal.querySelector('#modelo');
const descripcion = modal.querySelector('#descripcion');
const imagen = modal.querySelector('#imagen');
const tipo = modal.querySelector('#tipo');
const year = modal.querySelector('#year');

let botonGuardar = modal.querySelector('#botonCrear');
let botonEditar = modal.querySelector('#submitEdit');

function resetForm(){
    document.getElementById("actividadForm").reset()
}

function abrirForm(){
    const modal = document.getElementById('modalActividad');
    modal.querySelector('.modal-title').textContent = "Registrar nuevo vehículo";
    $('#submitEdit').hide();
    $('#botonCrear').show();
    resetForm();
}

async function guardarRegistro(){
    let formData = {
        ID: 1,
        Marca: marca.value,
        Modelo: modelo.value,
        Descripcion: descripcion.value,
        Tipo: tipo.value,
        Year: year.value,
        Imagen: null,
    }

    if(formData.Marca === "" 
        || formData.Modelo==="" 
        || formData.Descripcion==="" 
        || formData.Tipo==="" 
        || formData.Year===""
        || !(imagen.files && imagen.files[0]) 
    ){
        alert("Faltan datos")
    } else {
        alert("OK")
        let data = new FormData();

        data.append("Marca", formData.Marca);
        data.append("Modelo", formData.Modelo);
        data.append("Descripcion", formData.Descripcion);
        data.append("Imagen", imagen.files[0]);
        data.append("Tipo", formData.Tipo);
        data.append("Year", formData.Year);

        // var reader = new FileReader();
        // reader.onload = function () {
        //     var dataURL = reader.result;
        //     formData.Imagen = dataURL
        //     // console.log(formData)
        //     data = JSON.stringify(formData);
        // }
        // reader.readAsDataURL(imagen.files[0]);


        $.ajax({
            url: "../php/insertar.php",
            type: "POST",
            data: data,
            processData: false,
            contentType: false,
            beforeSend: function() {
                console.log("Enviando datos al Back-end");
            },
            success: function(resp){
                console.log(resp)
            },
            fail: function (jqXHR, textStatus, errorThown) {
                console.log("Fail AJAX", textStatus, errorThown);
            },
            error: function (jqXHR, textStatus, errorThown) {
                console.log("Error AJAX",textStatus, errorThown);
            }
        })
    }
}