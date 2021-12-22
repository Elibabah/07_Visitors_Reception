let dataAdmin = [];

console.log("hola");
const db = firebase.firestore();

const getData = () => db.collection("visitors").get();

window.addEventListener("DOMContentLoaded", async(e) => {
    const querySnapshot = await getData();
    querySnapshot.forEach((doc) => {
        console.log(doc.data().nombre);
        dataAdmin.push(doc.data());
        console.log(dataAdmin);

        let lista = doc.data();

        document.getElementById("visitantesEnLista").innerHTML += `
            <tr id="listaPersonas">
                <td id="persona" value="${lista}" onclick="${lista} data-bs-toggle="modal" data-bs-target="#staticBackdrop">${lista.nombre}</td>
                <td>${lista.empresa}</td>
            </tr>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                </div>
            </div>
        </div>
    </div>
`;
    });
});
console.log(dataAdmin);
/*----------- Iterar list visitantes ----------*/
/*for (let i = 0; i < dataAdmin.length; i++) {
    console.log(i)
}*/