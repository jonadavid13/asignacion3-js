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