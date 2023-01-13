const navbar_oculta = document.getElementById("navbar-oculta")
const navbar_oculta_container = document.getElementById("navbar-oculta__container")

function onBodyScroll(){
    if(window.pageYOffset > window.innerHeight){
        navbar_oculta.classList.add("ativo")
        navbar_oculta_container.classList.add("ativo")
    }
    else{
        navbar_oculta.classList.remove("ativo")
        navbar_oculta_container.classList.remove("ativo")
    }
}


function onClickBotaoVerPlanos(){
    const div_orcamento = document.getElementById("main__div-planos-servicos")
    // const offset = div_orcamento.getBoundingClientRect().top - document.body.getBoundingClientRect().top - navbar_oculta.offsetHeight
    const offset = div_orcamento.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 80 //esse 80 eh a altura da navbar, se deixar pra usar o .offsetHeight, o botao da capa nao vai funcionar pois na hora q ele for pressionado, a navbar terah altura 0
    
    window.scrollTo({top: offset, behavior: 'smooth'})
    console.log(offset)
}


function onClickBotaoInicio(){
    window.scrollTo({top: 0, behavior: 'smooth'})
}


function onClickDivPergunta(_id){
    const div_pergunta = document.getElementById(_id)
    div_pergunta.classList.toggle("ativo")
}