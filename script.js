function toggleMode () {
    const html = document.documentElement

    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    // Substituição da imagem
    //  if(html.classList.contains('light')) {
    //      // Se tiver light mode, adicionar a imagem light
    //      img.setAttribute("src", "./assets/avatar-light.png")
    //  } else {
    //      // Se tiver sem light mode, manter a imagem original
    //      img.setAttribute("src", "./assets/avatar.png")
    //  }



}