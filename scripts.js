function addFilme() {
  video = document.querySelector('#filme').value
  campFilme = [video.substring(0, 24), video.substring(32,43)]
  filmeFav(video)
  filme.value = ''
}
  
function filmeFav(video){
  if (video.includes('https://www.youtube.com/watch?v=')){
  exibirNaTela(video)
  } else {
    alert("O link deve ser de um vídeo no YouTube!")
    video = ""
  }
}

function exibirNaTela() {
  listaFilmes = document.querySelector("#listaFilmes")
    elementoFilme = "<iframe src=" + campFilme[0] + "embed/" + campFilme[1] + " frameborder='0' allowfullscreen></iframe>"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
