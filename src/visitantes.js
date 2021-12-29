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

    botonSiguiente.addEventListener("click", () => {
        /*-----------------Validación form---------------*/

        let nombre = document.getElementById("nombre").value;
        let contacto = document.getElementById("contact").value;
        let empresa = document.getElementById("companias").value;
        let persona = document.getElementById("persona").value;
        let asunto = document.getElementById("asunto").value;
        let cita = document.getElementById("cita").value;

        if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
            // Si no se cumple la condicion...
            alert("Introduce tu nombre");
            return false;
        } else if (
            contacto == null ||
            contacto.length == 0 ||
            /^\s+$/.test(contacto)
        ) {
            // Si no se cumple la condicion...
            alert("Introduce un medio de contacto");
            return false;
        } else if (empresa == null || empresa == 0) {
            // Si no se cumple la condicion...
            alert("Introduce la empresa a la que diriges");
            return false;
        } else if (persona == null || persona == 0) {
            // Si no se cumple la condicion...
            alert("Introduce el nombre de la persona a la que visitas");
            return false;
        } else if (asunto == null || asunto == 0) {
            alert("Introduce el motivo de tu visita");
            return false;
        } else if (cita == null || cita == 0) {
            alert("Marca si cuentas con cita o debes ser notificado");
            return false;
        }

        document.getElementById("registro").hidden = true;
        document.getElementById("camara").hidden = false;

        /*Guardar datos inputs*/
        let formObject = {
            nombre: document.getElementById("nombre").value,
            contacto: document.getElementById("contact").value,
            empresa: document.getElementById("companias").value,
            persona: document.getElementById("persona").value,
            asunto: document.getElementById("asunto").value,
            cita: document.getElementById("cita").value,
        };

        console.log(formObject);

        //localStorage.setItem('objectToPass', formObject);
        //console.log(localStorage.setItem('objectToPass', formObject));

        let canvas = document.getElementById("canvas");
        let context = canvas.getContext("2d");
        let video = document.getElementById("video");

        //nav = navigator.mediaDevices
        //console.log(nav)
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
                video.srcObject = stream;
                video.play();
            });
        }

        // Botón tomar Foto
        let tomarFoto = document.getElementById("snap")
        tomarFoto.addEventListener("click", () => {
            // reader.readAsDataURL(file);

            function getBase64Image(video) {
                let canvas = document.createElement("canvas");
                canvas.width = video.width;
                canvas.height = video.height;
                let context = canvas.getContext("2d");
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                let dataURL = canvas.toDataURL();
                return dataURL;
            }

            let base64 = getBase64Image(document.getElementById("video"));
            console.log(base64);
            formObject.foto = base64;
            formObject.date = new Date();
            console.log(formObject);
            //Pintar en canvas
            context.drawImage(video, 0, 0, 320, 320);
        });

        //----------------// Botón enviar objeto a firestore //----------------//
        let botonEnviar = document.getElementById("enviar")
        botonEnviar.disabled = false;


        //Validación de foto para enviar a firestore
        /* let foto = document.getElementById("canvas").value;

         if (foto == "" || foto == null) {
             alert("Por favor, captura tu foto");
             return false;
         } else {*/


        //Desactivar botón después de ser ejecutado
        if (botonEnviar.addEventListener("click", async(e) => {
                e.preventDefault();
                await saveVisitor(formObject);
                botonEnviar.disabled = true;

                setTimeout(() => {
                    alert("Envío exitoso. Bienvenid@")
                    window.location.href = "./index.html";
                }, 1100);

            })) {

        } else {
            botonEnviar.disabled = false;
        }
        /*   }
        return true;*/
    });
    return true;
};

keepForm();

const db = firebase.firestore();
const saveVisitor = (obj) => {
    db.collection("visitors").doc().set(obj);
};