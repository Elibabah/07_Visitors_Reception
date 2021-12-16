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

            /*for (let [index, people] in personasArray[0].personas) {
                      console.log(personasArray);
                      console.log(index, people);
                              }*/
        });
    //.catch((error) => console.log(error));
};

datosRegistro();