const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const timer = document.getElementById('timer');
const botoes = document.querySelectorAll('.app__card-button');
// const imgLongo = document.querySelector('.app__image');



focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    focoBt.classList.add('active')
});

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
});

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
});


function alterarContexto(contexto){
    botoes.forEach(function(contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `imagens/${contexto}.png`);
    switch (contexto){
        case 'foco':
            titulo.innerHTML=`
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
       `
            break;
        case 'descanso-curto':
            titulo.innerHTML = `
            Que tal dar uma respirada?  <strong class="app__title-strong"> Faça uma pausa curta!</strong>
            `
            case 'descanso-longo':
            titulo.innerHTML=`
            Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}
