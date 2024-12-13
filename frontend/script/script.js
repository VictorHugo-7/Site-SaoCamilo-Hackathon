function editarImagem() {
    document.getElementById('editImageSection').style.display = 'block';
    document.getElementById('btnEditarImagem').style.display = 'none';
}

function salvarImagem() {
    const inputImagem = document.getElementById('inputImagemPerfil');
    const imagemPerfil = document.getElementById('imagemPerfil');

    if (inputImagem.files && inputImagem.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagemPerfil.src = e.target.result;
        };
        reader.readAsDataURL(inputImagem.files[0]);
    }

    document.getElementById('editImageSection').style.display = 'none';
    document.getElementById('btnEditarImagem').style.display = 'block';
}

function editarPerfil() {
    document.getElementById('visualizacaoPerfil').style.display = 'none';
    document.getElementById('edicaoPerfil').style.display = 'block';
    document.getElementById('btnEditarPerfil').style.display = 'none';
}

function salvarEdicao() {
    document.getElementById('nome').innerText = document.getElementById('inputNome').value;
    document.getElementById('especialidade').innerText = document.getElementById('inputEspecialidade').value;
    document.getElementById('descricao').innerText = document.getElementById('inputDescricao').value;
    document.getElementById('email').innerText = document.getElementById('inputEmail').value;
    document.getElementById('idade').innerText = `${document.getElementById('inputIdade').value} anos`;

    document.getElementById('visualizacaoPerfil').style.display = 'block';
    document.getElementById('edicaoPerfil').style.display = 'none';
    document.getElementById('btnEditarPerfil').style.display = 'block';
}
