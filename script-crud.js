const btnAdcionarTarefa = document.querySelector('.app__button--add-task');

const formAdicionarTarefa = document.querySelector('.app__form-add-task');

const textarea = document.querySelector('app__form-textarea')


btnAdcionarTarefa.addEventListener('click',() =>{
    formAdicionarTarefa.classList.toggle('hidden');
});

formAdicionarTarefa.addEventListener('submit', (evento)=>{
    evento.preventDefault()
})