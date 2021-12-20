console.log("hola")
const db = firebase.firestore()

const getData = () => db.collection('visitors').get()

window.addEventListener('DOMContentLoaded', async (e) => {
  const querySnapshot = await getData()
  querySnapshot.forEach(doc => {
    console.log(doc.data().nombre)
  })
})