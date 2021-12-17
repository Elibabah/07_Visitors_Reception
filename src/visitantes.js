const registro = "../data_form/registro.json";

let empresasArray = [];

const datosRegistro = () => {
    fetch(registro)
        .then((response) => response.json())
        .then((data) => {
            empresasArray.push(data);
            console.log(empresasArray);

            /*------------- Iterar empresas --------------------*/
            for (let business in empresasArray[0].coworking_Ajusco) {
                console.log(business);

                let imprimirEmpresas = document.getElementById("company");
                imprimirEmpresas.innerHTML += `  
                
                
                        <option value="${business}"></option>

                `;
            }
            /*--------------- Evento por compañía ------------------*/

            let elegir = document.getElementById("companias");

            elegir.addEventListener("change", () => {
                let porEmpresa = document.getElementById("companias").value;
                console.log("estoy escuchando");
                console.log(porEmpresa);

                /*------------ Iterar personas ------------*/

                console.log(empresasArray[0]["coworking_Ajusco"][porEmpresa].persona);

                cleanPeople();
                for (const personas of empresasArray[0]["coworking_Ajusco"][porEmpresa]
                    .persona) {
                    console.log(personas);

                    let imprimirPersonas = document.getElementById("people");
                    imprimirPersonas.innerHTML += `
                    <option value="${personas}">
                    `;
                }
            });
        });
    //.catch((error) => console.log(error));
};

datosRegistro();

/*------------ Función limpiar personas -------------*/

let cleanPeople = () => {
    document.getElementById("people").innerHTML = "";
};

/*---------- Limpiar valores inputs ---------------*/

/*let cleanInputs = () => {
    document.getElementById("nombre") = "";
    document.getElementById("contact") = "";
    document.getElementById("companias") = "";
    document.getElementById("persona") = "";
    document.getElementById("asunto") = "";
    document.getElementById("si-no") = "";
}*/

/*---------- Función botón guardar datos --------------*/

let keepForm = () => {
    let botonSiguiente = document.getElementById("botonSiguiente");

    botonSiguiente.addEventListener("click", function () {
        /*Guardar datos inputs*/

        let formObject = {
            nombre: document.getElementById("nombre").value,
            contacto: document.getElementById("contact").value,
            empresa: document.getElementById("companias").value,
            persona: document.getElementById("persona").value,
            asunto: document.getElementById("asunto").value,
            cita: document.getElementById("si-no").value,
        };

        console.log(formObject);
        window.location.href = "./camara.html"
    });
};

keepForm();