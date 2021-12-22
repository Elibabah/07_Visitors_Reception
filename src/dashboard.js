let dataAdmin = [];

console.log("hola");
const db = firebase.firestore();

const getData = () => db.collection("visitors").get();

window.addEventListener("DOMContentLoaded", async(e) => {
    const querySnapshot = await getData();
    querySnapshot.forEach((doc) => {
        console.log(doc.data().nombre);
        dataAdmin.push(doc.data());

        let lista = doc.data();

        //let lista = dataAdmin[0];

        document.getElementById("visitantesEnLista").innerHTML += `
            <tr id="listaPersonas">
                <td id="persona" value="${lista}" onclick="${lista}" data-bs-toggle="modal" data-bs-target="#staticBackdrop${lista.nombre}">${lista.nombre}</td>
                <td>${lista.empresa}</td>
            </tr>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop${lista.nombre}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">${lista.nombre}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="canvas-container">
                            <canvas id="canvas" width="320" height="320">${lista.foto}</canvas>
                        </div>
                <div class="modal-body">
                <h7><b>Empresa a la que visita:</b> ${lista.empresa}</h7><br>
                <h7><b>Persona a la que visita:</b> ${lista.persona}</h7><br>
                <h7><b>Asunto:</b> ${lista.asunto}</h7><br>
                <h7><b>Cuenta con cita:</b> ${lista.cita}</h7><br>
                <h7><b>Medio de contacto:</b> ${lista.contacto}</h7>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
`;
    });
});
console.log(dataAdmin);