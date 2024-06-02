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


function loadUserData() {
    const avatar = localStorage.getItem('avatar');
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (avatar) {
        document.getElementById('selectedAvatarImg').src = `../Imagens/Configuração/${avatar}`;
    }
    if (username) {
        document.getElementById('username').value = username;
    }
    if (email) {
        document.getElementById('email').value = email;
    }
    if (!password) {
        localStorage.setItem('password', '12345');
    }
}
function selectAvatar(avatar) {
  
    const selectedAvatar = avatar.getAttribute('data-avatar');
    document.querySelectorAll('.avatar').forEach(input => {
        input.removeAttribute('data-selected');
    });

    avatar.setAttribute('data-selected', 'true');
    document.getElementById('selectedAvatarImg').src = `../Imagens/Configuração/${selectedAvatar}`;

    
    localStorage.setItem('avatar', selectedAvatar);
}
if (selectedAvatar !== null) {
    document.getElementById('selectedAvatarImg').src = `../Imagens/Configuração/${selectedAvatar}`;
}
// Função para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


function updateData() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    let isValid = true;


    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    if (!username) {
        document.getElementById('usernameError').textContent = 'O nome de usuário não pode estar vazio.';
        isValid = false;
    }

 
    if (!email) {
        document.getElementById('emailError').textContent = 'O email não pode estar vazio.';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Por favor, insira um email válido.';
        isValid = false;
    }

    if (isValid) {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        alert('Dados atualizados com sucesso!');
    }
}


function changePassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;


    document.getElementById('currentPasswordError').textContent = '';
    document.getElementById('newPasswordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';


    const savedPassword = localStorage.getItem('password');
    if (currentPassword !== savedPassword) {
        document.getElementById('currentPasswordError').textContent = 'Senha atual incorreta.';
        isValid = false;
    }

  
    if (!newPassword) {
        document.getElementById('newPasswordError').textContent = 'A nova senha não pode estar vazia.';
        isValid = false;
    } else if (newPassword !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'As senhas não coincidem.';
        isValid = false;
    }

    if (isValid) {
        localStorage.setItem('password', newPassword);
        alert('Senha alterada com sucesso!');
    }
}


document.addEventListener('DOMContentLoaded', loadUserData);
