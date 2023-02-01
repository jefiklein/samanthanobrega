const navbar_oculta = document.getElementById("navbar-oculta")
const navbar_oculta_container = document.getElementById("navbar-oculta__container")

let elementos_fade_in = []


for(let i=0; i<document.getElementsByClassName("fade-in").length; i++){
    elementos_fade_in.push(document.getElementsByClassName("fade-in")[i])
}

mostrarCookiesDiv()
mostrarElementosScroll()


function onBodyScroll(){
    if(window.pageYOffset > window.innerHeight){
        navbar_oculta.classList.add("ativo")
    }
    else{
        navbar_oculta.classList.remove("ativo")
    }
    mostrarElementosScroll()
}


function mostrarElementosScroll(){
    if(elementos_fade_in.length > 0){
        //distancia entre o topo do elemento e o topo da pagina
        while(elementos_fade_in[0].getBoundingClientRect().top < window.innerHeight * 0.85){
            elementos_fade_in[0].classList.add("fade-in-ativo")
            elementos_fade_in.shift()
            if(elementos_fade_in.length === 0){
                break
            }
        }
    }
}


function onClickBotaoVerPlanos(){
    const div_orcamento = document.getElementById("main__section-05")
    // const offset = div_orcamento.getBoundingClientRect().top - document.body.getBoundingClientRect().top - navbar_oculta.offsetHeight
    const offset = div_orcamento.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 80 //esse 80 eh a altura da navbar, se deixar pra usar o .offsetHeight, o botao da capa nao vai funcionar pois na hora q ele for pressionado, a navbar terah altura 0
    
    window.scrollTo({top: offset, behavior: 'smooth'})
}


function onClickBotaoInicio(){
    window.scrollTo({top: 0, behavior: 'smooth'})
}


function onClickDivPergunta(_id){
    const div_pergunta = document.getElementById(_id)
    div_pergunta.classList.toggle("ativo")
}


function mostrarCookiesDiv(){
    let cookiesLength = document.cookie.length
    if(cookiesLength === 0){
        document.getElementById("main__div-cookies").classList.add("ativo")
    }
    else{
        document.getElementById("main__div-cookies").classList.remove("ativo")
    }
}


function onClickBotaoCookiesVerConfig(){
    window.open("./pagina-politica-privacidade.html", '_blank');
}


function onClickBotaoCookiesAceito(){
    document.cookie = "permissaoCookies=permitido; path=/"
    // document.cookie = "permissaoCookies=permitido;expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/" //deixa esse cookie pra ser apagado sempre e ver como fica a barra de cookies
    document.getElementById("main__div-cookies").classList.remove("ativo")
}








