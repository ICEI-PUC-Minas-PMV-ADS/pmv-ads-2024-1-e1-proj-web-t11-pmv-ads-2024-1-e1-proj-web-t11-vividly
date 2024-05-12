function logar () {

    let listaUser = []

    let userValid = {
        usuario: '',
        senha:'',
    }

    listaUser = JSON.parse(localStorage.getItem('usuarios'))

    listaUser.forEach((item) => {
        if(login.value == item.usuario || login.value == item.email && senha.value == item.senha) {

            userValid = {
                usuario: item.usuario,
                senha: item.senha,
            }
            alert('login realizado com sucesso');
            location.href = "../DASHBOARD/dashboard.html";

        }
        else {
            alert('Usuário ou senha incorretos');
        }
        
    })

}