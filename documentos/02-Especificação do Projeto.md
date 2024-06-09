# Especificação do Projeto

## Perfis de Usuários

<!-- [Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.] -->

### Perfis escolares

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01 Estudante </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Estudante diagnosticado com ansiedade</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Por meio rápido e fácil, ter acesso a métodos para controlar crises de ansiedade. <br>
    Utilizar ambiente digital para conhecer pessoas e suas experiências em relação ao transtorno.<br>
    Conteúdos sobre autocuidado.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 02 Estudante </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Estudante não diagnosticado com ansiedade</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Possibilidade de se informar e conhecer mais sobre o assunto.<br>
    Recomendação profissional na área da saúde mental.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 03 Orientador educacional </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Orientador educacional da escola</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Levantar dados estatísticos sobre o nível de ansiedade dos alunos.</td>
</tr>
</tbody>
</table>

<br>

### Perfis corporativos 

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01 Funcionário </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Funcionário diagnosticado</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Por meio rápido e fácil, ter acesso a métodos para controlar crises de ansiedade.<br>
    Utilizar ambiente digital para conhecer pessoas e suas experiências em relação ao transtorno.<br>
    Conteúdos sobre autocuidado.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 02 Funcionário </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Funcionário não diagnosticado</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Possibilidade de se informar e conhecer mais sobre o assunto.<br>
    Recomendação profissional na área da saúde mental.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 03 Funcionário do Setor RH </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Setor de Recursos Humanos</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Levantar dados estatísticos sobre ansiedade dos funcionários, com o intuito de evitar transtornos de ansiedade e consequentemente burnout.</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

<!-- [Apresente aqui as histórias de usuários que são relevantes para o projeto da solução.]

> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

[Utilize o modelo de tabela abaixo para apresentar as histórias de usuários.] -->

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Estudante              | recomendação de profissionais qualificados da área da saúde mental | adquirir diagnóstico e possível tratamento.
| Estudante              | informar-me melhor sobre o transtorno de ansiedade                 | para estar por dentro do assunto e ajudar amigos que passam pelo problema.                 |
| Estudante              | encontrar pessoas que passam pelo mesmo problema que eu            | compartilhar e adquirir conhecimentos e experiências de outros.  |
| Orientador Educacional | conseguir dados estatísticos sobre o nível de ansiedade dos alunos | ter noção da proporção do problema, dessa forma, criando mecanismos para combatê-lo.       |
| Estudante              | dicas de autocuidado                                               | criar uma rotina saudável para diminuir a ansiedade                |
| Estudante              | de forma rápida e prática ter acesso a meditação guiada e exercícios de respiração | que durante minhas crises eu tenha um meio de ajuda para me acalmar no ambiente escolar.                                   |
| Estudante              | por meio de uma recomendação, encontrar um novo psiquiatra         | dar continuidade ao meu tratamento psicológico.             |
| Estudante              | discutir informações a respeito da ansiedade                       | para conhecer diferentes pontos de vista.                   |
| Funcionário            | recomendação de profissionais qualificados da área da saúde mental | adquirir diagnóstico e possível tratamento               |
| Funcionário            | por meio de uma recomendação, encontrar um novo psiquiatra         | dar continuidade ao meu tratamento psicológico.             |
| Funcionário            | discutir informações a respeito da ansiedade                       | para conhecer diferentes pontos de vista.                   |
| Funcionário do setor RH| conseguir dados estatísticos sobre o nível de ansiedade dos colaboradores| ter noção da proporção do problema, dessa forma, criando mecanismos para evitar o burnout.                                        |
| Funcionário            | dicas de autocuidado                                               | criar uma rotina saudável para diminuir a ansiedade.               |
| Funcionário            | encontrar pessoas que passam pelo mesmo problema que eu            | compartilhar e adquirir conhecimentos e experiências de outros.  |

## Requisitos do Projeto

<!-- [Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.] -->

### Requisitos Funcionais

<!-- [Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais] -->

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  A aplicação deve permitir ao usuário cadastrar uma conta.                                                 | ALTA  | 
| RF-02 |  A aplicação deve permitir ao usuário criar tópicos no fórum.                                                      | MÉDIA |
| RF-03 |  A aplicação deve permitir ao usuário fazer o login da sua conta.                                          | ALTA  | 
| RF-04 |  A aplicação deve conter sugestões de atividades de autocuidado e relaxamento.                             | ALTA  |
| RF-05 |  A aplicação deve conter um fórum para discussões e compartilhamento de experiências e informações entre os usuários.                    | MÉDIA   | 
| RF-06 |  A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar informações úteis.                       | MÉDIA   |
| RF-07 |  A aplicação deve fornecer informações úteis e precisas sobre ansiedade, bem como estratégias eficazes para lidar com ela.                         | ALTA    | 
| RF-08 |  A aplicação deve oferecer um espaço onde os usuários possam registrar suas emoções diárias.               | MÉDIA |
| RF-09 |  A aplicação deve oferecer um bloco de notas para cada usuário, no qual, somente ele tenha acesso.         | MÉDIA | 
| RF-10 |  A aplicação deve apresentar um campo para recomendações de filmes, livros, séries, documentários e aplicativos relacionados à saúde mental.                      | MÉDIA   |
| RF-11 |  A aplicação deve permitir que os questionários apresentados disponibilizem uma função que o possibilite ser utilizado em outros meios.                       | MÉDIA   | 
| RF-12 |  A aplicação deve disponibilizar uma aba sobre questionários para recolher dados gerais relacionados à saúde mental                       | ALTA    |
| RF-13 |  A aplicação deve ter um a capacidade de visualizar o histórico de entradas do diário.| ALTA    |
| RF-14 |  A aplicação deve permitir que os usuários adicionem comentários a cada vídeo individualmente.  | ALTA    |
| RF-15 |  A aplicação deve gerar e exibir um gráfico de sentimentos com base nas entradas no diário.  | BAIXA |



**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais



|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  A aplicação deve ser publicada em um ambiente acessível público na Internet.                               | ALTA   | 
| RNF-02 |  A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada.    |  ALTA  | 
| RNF-03 |  A aplicação deve ter bom nível de contraste entre os elementos da tela                                     | MÉDIA  | 
| RNF-04 |  A aplicação deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox e Microsoft Edge.                        | ALTA   | 
| RNF-05 |  A aplicação deve garantir que todas as informações dos usuários, como dados pessoais e registros de atividades, sejam protegidas contra acessos não autorizados. Isso inclui o uso de protocolos de segurança como HTTPS, criptografia de dados e proteção contra-ataques de hackers.                     | MÉDIA  | 
| RNF-06 |  A aplicação deve utilizar no site somente matérias vindas de fontes confiáveis, associadas à área da saúde.                       | MÉDIA  | 
| RNF-07 |  A aplicação deve tratar com confidencialidade as informações pessoais dos usuários conforme as leis de proteção de dados aplicáveis. Isso pode incluir consentimento explícito para o uso de dados e opções para os usuários controlarem suas informações                  | ALTA   | 
| RNF-08 |  A aplicação deve ter uma linguagem simples e de fácil compreensão para o público geral.                    | MÉDIA  | 

**Prioridade: Alta / Média / Baixa. 

