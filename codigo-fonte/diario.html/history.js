let indiceEdicao = null;

const numbersToWords = {
    1: 'Feliz 😃',
    2: 'Triste 😢',
    3: 'Ansioso 😟',
    4: 'Calmo 😌',
    5: 'Irritado 😠',
    6: 'Estressada (o) 😓',
    7: 'Apaixonada 😍',
    8: 'Agitado 😇',
    9: 'Sonolento 😴',
    10: 'Doente 🤧',
};

// Função para selecionar item do menu
var menuItem = document.querySelectorAll('.itens-menu');

function selecionar() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    );
    this.classList.add('ativo');
}

menuItem.forEach((item) =>
    item.addEventListener('click', selecionar)
);

// Expandir menu
var expandir = document.querySelector('.btn-expandir');
var menuLateral = document.querySelector('.menu-lateral');

expandir.addEventListener('click', function(){
    menuLateral.classList.toggle('expandir'); 
});
 // avatar no menu 
 document.addEventListener('DOMContentLoaded', function() {
    const avatarImg = document.getElementById('avatarImg');
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.avatar) {
        avatarImg.src = usuario.avatar;
    } else {
        avatarImg.alt = 'Nenhum avatar selecionado';
    }
});
window.onload = function() {
    var username = localStorage.getItem('username');
    if (username) {
        document.getElementById('avatarName').innerText = username;
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const btnExpandir = document.querySelector('.btn-expandir');
    const menuLateral = document.querySelector('.menu-lateral');

    btnExpandir.addEventListener('click', () => {
        menuLateral.classList.toggle('expandido');
    });
});


function exibirUltimosDados() {
    let dadosSalvos = localStorage.getItem('dados') ? JSON.parse(localStorage.getItem('dados')) : [];
    const lista = document.getElementById('historico');
    lista.innerHTML = '';
    let dadosParaExibir = dadosSalvos.slice(-5);

    dadosParaExibir.forEach((data, index) => {
        const item = document.createElement('li');
        item.innerHTML = `
            <strong>Data:</strong> ${data.calender}<br>
            <strong>Sentimento:</strong> ${numbersToWords[data.feeling] || data.feeling}<br>
            <strong>Aprendizado:</strong> ${data.learn}<br>
            <strong>Descrição do Dia:</strong> ${data.day}<br>
            <button onclick="editarDados(${index})">Editar</button>
            <button onclick="excluirDados(${index})">Excluir</button>
            <hr>
        `;
        lista.appendChild(item);
    });
}

function exibirTodosDados() {
    let dadosSalvos = localStorage.getItem('dados') ? JSON.parse(localStorage.getItem('dados')) : [];
    const lista = document.getElementById('historico');
    lista.innerHTML = '';

    dadosSalvos.forEach((data, index) => {
        const item = document.createElement('li');
        item.innerHTML = `
            <strong>Data:</strong> ${data.calender}<br>
            <strong>Sentimento:</strong> ${numbersToWords[data.feeling] || data.feeling}<br>
            <strong>Aprendizado:</strong> ${data.learn}<br>
            <strong>Descrição do Dia:</strong> ${data.day}<br>
            <button onclick="editarDados(${index})">Editar</button>
            <button onclick="excluirDados(${index})">Excluir</button>
            <hr>
        `;
        lista.appendChild(item);
    });
}

function excluirDados(index) {
    let dadosSalvos = localStorage.getItem('dados') ? JSON.parse(localStorage.getItem('dados')) : [];
    dadosSalvos.splice(index, 1);
    localStorage.setItem('dados', JSON.stringify(dadosSalvos));
    exibirUltimosDados();
}

function editarDados(index) {
    let dadosSalvos = localStorage.getItem('dados') ? JSON.parse(localStorage.getItem('dados')) : [];
    const data = dadosSalvos[index];
    
    document.getElementById('calender').value = data.calender;
    document.getElementById('feelingsForm').value = data.feeling;
    document.getElementById('learn').value = data.learn;
    document.getElementById('day').value = data.day;

    indiceEdicao = index;
    document.getElementById('formulario').style.display = 'block';
}

function fecharEdicao() {
    indiceEdicao = null;
    document.getElementById('formulario').style.display = 'none';
}

function salvarDados() {
    let dadosSalvos = localStorage.getItem('dados') ? JSON.parse(localStorage.getItem('dados')) : [];
    const dataEditada = {
        calender: document.getElementById('calender').value,
        feeling: document.getElementById('feelingsForm').value,
        learn: document.getElementById('learn').value,
        day: document.getElementById('day').value,
    };

    if (indiceEdicao !== null) {
        dadosSalvos[indiceEdicao] = dataEditada;
        indiceEdicao = null;
    } else {
        dadosSalvos.push(dataEditada);
    }

    localStorage.setItem('dados', JSON.stringify(dadosSalvos));
    exibirUltimosDados();

    document.getElementById('formulario').reset();
    document.getElementById('formulario').style.display = 'none';
}

function filtrarPorData() {
    const filtroData = document.getElementById('filtroData').value;
    exibirDadosFiltrados(filtroData);
}

function exibirDadosFiltrados(filtroData) {
    let dadosSalvos = localStorage.getItem('dados') ? JSON.parse(localStorage.getItem('dados')) : [];
    const lista = document.getElementById('historico');
    lista.innerHTML = '';

    if (!filtroData) {
        exibirTodosDados();
        return;
    }

    dadosSalvos.forEach((data, index) => {
        if (data.calender === filtroData) {
            const item = document.createElement('li');
            item.innerHTML = `
                <strong>Data:</strong> ${data.calender}<br>
                <strong>Sentimento:</strong> ${numbersToWords[data.feeling] || data.feeling}<br>
                <strong>Aprendizado:</strong> ${data.learn}<br>
                <strong>Descrição do Dia:</strong> ${data.day}<br>
                <button onclick="editarDados(${index})">Editar</button>
                <button onclick="excluirDados(${index})">Excluir</button>
                <hr>
            `;
            lista.appendChild(item);
        }
    });
}

exibirUltimosDados();

/* Mensagens */

const mensagens = [
    { texto: "“O descanso é essencial para o bom funcionamento da nossa mente e corpo. O descanso dá energia para encarar o dia a dia.”" },
    { texto: "“Ansiedade é a insegurança pelo que está por vir.”" },
    { texto: "“Busque a sua paz interior. Tente distanciar o que você pode fazer do que é inevitável.”" },
    { texto: "“Não tente ser sempre forte e perfeito. Aceite que nem todos os dias são bons.”" },
    { texto: "“Tenha paciência e aguarde por dias melhores. A ansiedade só quer prever o imprevisível.”" },
];

let indiceAtual = 0;

function exibirMensagem() {
    const mensagem = mensagens[indiceAtual];
    const mensagemAtual = document.getElementById('mensagemAtual');
    
    mensagemAtual.textContent = mensagem.texto;

    indiceAtual = (indiceAtual + 1) % mensagens.length;
}

exibirMensagem();
setInterval(exibirMensagem, 10000);

// avatar no menu 
document.addEventListener('DOMContentLoaded', function() {
    const avatarImg = document.getElementById('avatarImg');
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.avatar) {
        avatarImg.src = usuario.avatar;
    } else {
        avatarImg.alt = 'Nenhum avatar selecionado';
    }
});
window.onload = function() {
    var username = localStorage.getItem('username');
    if (username) {
        document.getElementById('avatarName').innerText = username;
    }
};