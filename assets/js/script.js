
//modal Isaac

function inicialModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalId || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
            }
        });
    }
}

const ativaModal = document.querySelector('.btn-card');
ativaModal.addEventListener('click', () => {
    inicialModal('modal_descricao')
});

//modal Necro


function inicialModalNecro(modalIdNecro) {
    const modalNecro = document.getElementById(modalIdNecro);
    if (modalNecro) {
        modalNecro.classList.add('mostrarNecro');
        modalNecro.addEventListener('click', (e) => {
            if (e.target.id == modalIdNecro || e.target.className == 'fecharNecro') {
                modalNecro.classList.remove('mostrarNecro');
            }
        });
    }
}

const ativaModalNecro = document.querySelector('.btn-card-1');
ativaModalNecro.addEventListener('click', () => {
    inicialModalNecro('modal_descricaoNecro')
});