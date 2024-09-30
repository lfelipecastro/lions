let imgBanner = document.getElementById('imgBanner');
let imgBannerDois = document.getElementById('imgBannerDois');
let larguraTela = window.innerWidth;

setInterval(function mudaImagem(){
    if(larguraTela <= 768){
        imgBanner.src = "images/topoSiteCel.png";
        imgBannerDois.src = "images/parceirosCel.png";
    }else if(larguraTela > 768){
        imgBanner.src = "images/topoSite.png";
        imgBannerDois.src = "images/parceiros.png";
    }
}, 250);

function myFunction() {
    // Declaração de variaveis
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('Input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("Lista");
    li = ul.getElementsByTagName('li');
  
    /* For para percorrer todos os itens da lista e ocultar aqueles
    que não correspondem à consulta da pesquisa */
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }