fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    let lugarCompleto = `${data.results[0].location.city}, ${data.results[0].location.state}, ${data.results[0].location.country}`
    let nombreCompleto = `${data.results[0].name.last} ${data.results[0].name.first}`
    document.getElementById("lugar").innerHTML += `${lugarCompleto}`
    document.getElementById("email").innerHTML = `${data.results[0].email}`
    document.getElementById("telefono").innerHTML = `${data.results[0].phone}`
    document.getElementById("celular").innerHTML = `${data.results[0].cell}`
    document.getElementById("nombre").innerHTML = `${nombreCompleto}`
    document.getElementById("foto").src = `${data.results[0].picture.large}`
    console.log(data)
  });
// document.getElementById("lugar").innerHTML = response.result.location.city