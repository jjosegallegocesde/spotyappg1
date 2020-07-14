//1. necesito un objeto AJAX para comunicarme
let objetoAJAX = new XMLHttpRequest();

//2. URL del servicio
let url = "https://api.spotify.com/v1/artists/4rUyBlggM5tZUH5QZn9ZuO/top-tracks?country=US";

//3. saber si necesito permisos 
let token = "Bearer BQDiNsRKvdSzEexQOWgTQnsIfDZs3V1wuyBxO5Q8jR-FcsZSqLDTRnkx0zgKApOoG4Jd7Gmf1dqjwX__gdVup_yuWlIF0ivlDNCAhOkMsBHo2Ji4Cseu3OuquGBwYhHZS3ojPEcWyteWU_pz";

let token2 = "Bearer BQCP5hBY58mAzhnhicxok_ttxUVxvCcbG7EtGcqMnYZjr653DEPqD6fWA6BW4-GBE4Sjr3cXl8lrundc09ss2iylKMaLfPPUhJXTlexR-jZWE1iO1ooYPzXe07Qo4CMQCJe495oSBwVYs-URBCA";


//4. abra la conexion
objetoAJAX.open('GET', url, true);

//5.pedir permiso o enviar headers
objetoAJAX.setRequestHeader('Authorization', token2);

//6.cargar la informacion del servicio
objetoAJAX.onload = function() {

    let respuesta = JSON.parse(this.responseText);

    console.log(respuesta.tracks[0].preview_url); // a la propiedad preview_url del objeto2
    console.log(respuesta.tracks[0].album.images[0].url);
    console.log(respuesta.tracks[0].album.name);

    let imagen1 = document.getElementById("imagen1");
    imagen1.src = respuesta.tracks[0].album.images[0].url;

    let titulo1 = document.getElementById("titulo1");
    titulo1.textContent = respuesta.tracks[0].album.name;

    let audio1 = document.getElementById("audio1");
    audio1.src = respuesta.tracks[0].preview_url;

}

//7. cierre el sobre y envie
objetoAJAX.send();