//1. necesito un objeto AJAX para comunicarme
let objetoAJAX = new XMLHttpRequest();

//2. URL del servicio
let url = "https://api.spotify.com/v1/artists/4rUyBlggM5tZUH5QZn9ZuO/top-tracks?country=us";

//3. saber si necesito permisos 
let token = "Bearer BQDiNsRKvdSzEexQOWgTQnsIfDZs3V1wuyBxO5Q8jR-FcsZSqLDTRnkx0zgKApOoG4Jd7Gmf1dqjwX__gdVup_yuWlIF0ivlDNCAhOkMsBHo2Ji4Cseu3OuquGBwYhHZS3ojPEcWyteWU_pz";

//4. abra la conexion
objetoAJAX.open('GET', url, true);


//5.pedir permiso o enviar headers
objetoAJAX.setRequestHeader('Authorization', token);

//6.cargar la informacion del servicio
objetoAJAX.onload = function() {
    let respuesta = JSON.parse(this.responseText);
    console.log(respuesta);
    //
}

//7. cierre el sobre y envie
objetoAJAX.send();