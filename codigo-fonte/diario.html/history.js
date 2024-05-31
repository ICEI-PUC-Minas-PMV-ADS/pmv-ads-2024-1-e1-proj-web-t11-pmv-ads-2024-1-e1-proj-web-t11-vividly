
    function exibirDados() {
              let dadosSalvos = localStorage.getItem('dados') ? JSON.parse(localStorage.getItem('dados')) : [];
    
               const lista = document.getElementById('historico');
    
        lista.innerHTML = '';
    
        dadosSalvos.forEach((data, index) => {
            const item = document.createElement('li');
            item.innerHTML = `
                <strong>Data:</strong> ${data.calender}<br>
                <strong>Sentimento:</strong> ${data.feeling}<br>
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
        exibirDados(); 
    }
    
    function editarDados(index) {
        let dadosSalvos = localStorage.getItem('dados') ? JSON.parse(localStorage.getItem('dados')) : [];
        const data = dadosSalvos[index];
    
        
        document.getElementById('calender').value = data.calender;
        document.getElementById('feelingsForm').value = data.feeling;
        document.getElementById('learn').value = data.learn;
        document.getElementById('day').value = data.day;
    
      
        excluirDados(index);
    }
    
    /* FILTRO */
    exibirDados();


    function filtrarPorData() {
        const filtroData = document.getElementById('filtroData').value;
        exibirDados(filtroData);
    }
    
    function exibirDados(filtroData) {
        let dadosSalvos = localStorage.getItem('dados') ? JSON.parse(localStorage.getItem('dados')) : [];
        const lista = document.getElementById('historico');
        
        lista.innerHTML = '';
    
        dadosSalvos.forEach((data, index) => {
            if (data.calender === filtroData) {
                const item = document.createElement('li');
                item.innerHTML = `
                    <strong>Data:</strong> ${data.calender}<br>
                    <strong>Sentimento:</strong> ${data.feeling}<br>
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
    