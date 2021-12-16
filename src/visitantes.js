const registro = "../data_form/registro.json";

let empresasArray = [];
let personasArray = [];

const datosRegistro = () => {
    fetch(registro)
        .then((response) => response.json())
        .then((data) => {
            empresasArray.push(data);
            console.log(empresasArray);

            /*------------- Iterar empresas --------------------*/
            for (let business in empresasArray[0].coworking_Ajusco) {
                console.log(business);

                personasArray.push(business);
                console.log(personasArray);

                let imprimirEmpresas = document.getElementById("company");
                imprimirEmpresas.innerHTML += `   
                        <option value="${business}">
                    `;
            }
            /*--------------- Iterar personas ------------------*/

            for (let people in personasArray[persona]) {
                console.log(personasArray);
                console.log(people);
            }
        });
    //.catch((error) => console.log(error));
};

datosRegistro();

/*------------ Función iterar empresas ---------------------*/

/*let traerEmpresas = () => {
    console.log(registro);
    for (let business in empresasArray[0].coworking_Ajusco) {
        console.log(business);

        personasArray.push(business);
        console.log(personasArray);

        let imprimirEmpresas = document.getElementById("company");
        imprimirEmpresas.innerHTML += `   
                        <option value="${business}">
                    `;
    }
};*/