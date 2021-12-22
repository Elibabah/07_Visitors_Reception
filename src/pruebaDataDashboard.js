let dataAdmin = [];
let todayVisitors = [];
let weaklyVisitors = [];
let monthVisitors = []
let fechas = []
let moreMonth = []
let msWeek = 604800000;
let msMonth = 2629750000;

const db = firebase.firestore();

const getData = () => db.collection("visitors").get();

window.addEventListener("DOMContentLoaded", async (e) => {

  const querySnapshot = await getData();
  querySnapshot.forEach((doc) => {
    //console.log(doc.data())
    dataAdmin.push(doc.data());
    //console.log(dataAdmin);
  });

  //
  //Ordena los visitantes del más reciente, al más antiguo
  //
  const sortedData = dataAdmin.slice().sort((a, b) => b.date - a.date)//ordena los visitantes del mas reciente al mas antiguo
  //console.log(sortedData)
  //
  //

  today = new Date
  todayString = today.toDateString()
  todayms = today.getTime()
  //console.log(todayms)
  for (let visitor of sortedData) {

    //console.log(visitor.date.toDate())
    if (todayString == visitor.date.toDate().toDateString()) {
      //console.log('Es Hoy ' + visitor.nombre)
      todayVisitors.push(visitor)
    } else {
      if ((todayms - visitor.date.toDate().getTime()) < msWeek) {
        //console.log('Este semana ' + visitor.nombre)
        weaklyVisitors.push(visitor)
      } else {
        if ((todayms - visitor.date.toDate().getTime()) < msMonth) {
          //console.log('Este mes ' + visitor.date.toDate())
          monthVisitors.push(visitor)
        } else {
          //console.log('Este año ' + visitor.date.toDate())
          moreMonth.push(visitor)
        }

      }
    }

  }

  console.log('visitantes hoy ' + todayVisitors.length)
  console.log('visitantes semana ' + weaklyVisitors.length)
  console.log('visitantes mes ' + monthVisitors.length)
  console.log('visitantes mas de mes ' + moreMonth.length)

  document.getElementById('visitantesDiarios').innerHTML = todayVisitors.length + " V"
  document.getElementById('visitantesSemanales').innerHTML = (weaklyVisitors.length + todayVisitors.length) + " V"
  document.getElementById('visitantesMensuales').innerHTML = (monthVisitors.length + weaklyVisitors.length + todayVisitors.length) + " V"
  document.getElementById('visitantesTotales').innerHTML = sortedData.length + " V"

  console.log(sortedData)

  for (let visitor of sortedData) {
    today = new Date
    today = today.toDateString()
    //console.log(today)
    console.log(visitor.date.toDate().toDateString())
    fechas.push(visitor.date.toDate().toDateString())
  }

  console.log(fechas)
  const FechasUnicas = [...new Set(fechas)]
  let numeroVisPorMes = []
  for (let i = 0; i < FechasUnicas.length; i++) {
    numeroVisPorMes[i] = 0;
  }
  console.log(FechasUnicas)

  for (let i = 0; i < FechasUnicas.length; i++) {
    for (let j = 0; j < fechas.length; j++) {
      if (FechasUnicas[i] == fechas[j]) {
        console.log(FechasUnicas[i])
        console.log(fechas[j])
        console.log('son iguales')
        numeroVisPorMes[i] = numeroVisPorMes[i] + 1;
      }
    }
  }
  console.log(numeroVisPorMes)
});