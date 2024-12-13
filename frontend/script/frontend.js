// ------------------------------------------ Código Front-End com o Back-End ------------------------------------------------

const protocolo = `http`
const port = `3000`
const baseURL = `localhost:${port}`

// Signup Users
async function cadastrarUsuario() {
    let usuarioCadastroInput = document.querySelector(".#")
    let passwordCadastroInput = document.querySelector(".#")
    let { usuarioCadastro } = usuarioCadastroInput.value
    let { passwordCadastro } = passwordCadastroInput.value 
    if (usuarioCadastro && passwordCadastro) {
        try {
            const cadastroEndpoint = "/signup"
            const URLCompleta = `${protocolo}${baseUrl}${cadastroEndpoint}`
            await axios.psot(URLCompleta, {
                login: usuarioCadastro, password: passwordCadastro
            }) 
            usuarioCadastroInput.value = ""
            passwordCadastroInput.value = ""
            exibirAlerta(".#", "Usuário cadastrado com sucesso", ["show", "classe_alerta_success"], ["d-none", "classe_alerta_danger"], 2000)
        } catch (error) {
            exibirAlerta(".#", "Erro ao cadastrar usuário", ["show", "classe_alerta_danger"], ["d-none", "classe_alerta_success"], 2000)
        }
    }
    // Alterar o seletor e as classes to Add e Remove
    else {
        exibirAlerta(".#", "Preencha todos os campos", ["show", "classe_alerta_danger"], ["d-none", "classe_alerta_success"], 2000)
    }
}

// Login Users
async function fazerLogin() {
    let usuarioLoginInput = document.querySelector(".#")
    let passwordLoginInput = document.querySelector(".#")
    let usuarioLogin = usuarioLoginInput.value
    let passwordLogin = passwordLoginInput.value
    if (usuarioLogin && passwordLogin) {
        try {
            usuarioLoginInput.value = ""
            passwordLoginInput.value = ""
            exibirAlerta(".#", "Usuário cadastrado com sucesso", ["show", "classe_alerta_success"], ["d-none", "classe_alerta_danger"], 2000)
        } catch (e) {
            exibirAlerta(".#", "Erro ao cadastrar o usuário", ["show", "classe_alerta_danger"], ["d-none", "classe_alerta_success"], 2000)
        }

    } else {
        exibirAlerta(".#", "Preencha todos os campos", ["show", "classe_alerta_danger"], ["d-none", "classe_alerta_success"], 2000)
    }
}

// função de exibir alerta
function exibirAlerta(seletor, mensagem, classesToAdd, classesToRemove, timeout) {
    let alert = document.querySelector(seletor)
    alert.innerHTML = mensagem
    alert.classList.add(...classesToAdd)
    alert.classList.remove(...classesToRemove)
    setTimeout(() => {
        alert.classList.remove("show")
        alert.classList.add("d-none")
    }, timeout);
}

// função para fechar o modal
// function ocultartModal(seletor, timeout) {
//     setTimeout(() => {
//         let modal = bootstrap.Modal.getInstance(document.querySelector(seletor))
//         modal.hide()
//     }, timeout);
// }


// ---------------------------------------------------------------------------------------------------------------------

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

;