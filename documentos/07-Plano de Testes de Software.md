# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/02-Especificação%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-001:	O site deve permitir ao usuário cadastrar uma conta.</li>
   <li>RF-003:	O site deve permitir ao usuário fazer o login da sua conta.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td></td>
 </tr>
</table>

<table>
  <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02:Verificar o cadastro de usuários </td>
  <td>
   <ul>
    <li>RF-001:	O site deve permitir ao usuário cadastrar uma conta.</li>
     </ul>
  </td>
  <td>Verificar se o cadastro está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Cadastrar", no Menu. </li>
    <li>Preencher o formulário e clicar em “Cadastrar”.  </li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Usuário cadastrado com sucesso você será redirecionado para página login". </td>
  <td>Grazielle</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar o funcionamento do filtro de pesquisa</td>
  <td>
   <ul>
    <li>RF-006:A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar informações em seu diario. </li>
   </ul>
  </td>
  <td>Verificar se o filtro de pesquisa está recuperando os dados inseridos pelo usuário</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Diario.</li>
    <li>Clicar na página Histórico.</li>
    <li>Digitar no filtro de pesquisa a data escolhida /ou exibir todo o histórico</li>
   </ol>
   </td>
  <td>A data inseridos no filtro de pesquisa devem mostrar ao usuario o que aconteceu nesse dia </td>
  <td></td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
<tr>
  <td>CT-04: Verificar o login de usuários</td>
  <td>
   <ul>
    <li>RF-003:A aplicação deve permitir ao usuário fazer o login da sua conta. </li>
   </ul>
  </td>
  <td>Verificar se o login está sendo feito corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Entrar”</li>
    <li>Preencher seus dados e clicar em “Entrar”</li>
       </ol>
   </td>
  <td>Após o login, o usuário deverá ser redirecionado para a sua página de perfil. </td>
  <td></td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
<tr>
  <td>CT-05: Envio de Dados do Diário</td>
  <td>
   <ul>
    <li>RF-007:A aplicação deve oferecer um espaço onde os usuários possam registrar suas emoções diárias.  </li>
   </ul>
  </td>
  <td>Verificar se o sistema permite ao usuário enviar os dados do diário corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Diário”</li>
    <li>Preencha o campos de data, sentimento , O que você apendeu hoje e escreva como foi o seu dia</li>
    <li>Clicar no botão "Enviar"</li>
       </ol>
   </td>
  <td> O envio é realizado sem erros e os dados dem ser  processados e armazenados corretamente pelo sistema. </td>
  <td></td>
 </tr>
</table>
  
   <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
<tr>
  <td>CT-06: Visualização do Histórico</td>
  <td>
   <ul>
    <li>RF-013:A aplicação deve ter um a capacidade de visualizar o histórico de entradas do diário.  </li>
   </ul>
  </td>
  <td>Verificar se o sistema exibe corretamente o histórico de entradas do diário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Diário”</li>
    <li>Clique no link "Histórico" localizado na parte superior da página.</li>
    <li>Verifique se o histórico é exibido corretamente, mostrando as datas e outros detalhes das entradas anteriores.</li>
       </ol>
   </td>
  <td> O histórico é exibido corretamente, mostrando todas as entradas anteriores. Cada entrada do histórico exibe a data, o sentimento, o aprendizado e a descrição do dia correspondentes. </td>
  <td></td>
 </tr>
</table>
   
<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
<tr>
  <td>CT-07: Exibição de Anotações / bloco de notas</td>
  <td>
   <ul>
    <li>RF-009:A aplicação deve oferecerum bloco de notas para cada usuário,no qual, somente ele tenha acesso  </li>
   </ul>
  </td>
  <td>Garantir que as anotações do usuário sejam exibidas corretamente nos cartões.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Navegar até a seção "Suas anotações"</li>
   </ol>
   </td>
  <td> Todas as anotações são exibidas conforme esperado. </td>
  <td></td>
 </tr>
</table>
<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-08: Verificar o funcionamento de addicionar comentário a um video </td>
  <td>
   <ul>
    <li>RF-000:	 O sistema deve permitir que os usuários adicionem comentários a cada vídeo individualmente .</li>
   </ul>
  </td>
  <td>Verificar se o sistema permite que os usuários adicionem comentários a um vídeo e se esses comentários são corretamente armazenados e exibidos.
</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da "Exercícios".</li>
 <li>Localize o primeiro vídeo na lista de vídeos, e clique no botão "Mostrar comentários" abaixo do primeiro vídeo.</li>
<li>No campo de texto "Digite seu comentário", insira o comentário, depois clique no botão "Comentar" </li>
<li>Verifique  se o comentário está presente na lista de comentários abaixo do vídeo.</li>
   </ol>
   </td>
  <td>O botão "Mostrar comentários" deve exibir a seção de comentários quando clicado.
  O comentário feito deve aparecer na lista de comentários após ser adicionado e permanecer após a página ser carregada.</td>
<td>Grazielle</td>
   </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-09: Verificar a criação dos tópicos do fórum</td>
  <td>
   <ul>
    <li>RF-002:	A aplicação deve permitir ao usuário criar tópicos no fórum..</li>
   </ul>
  </td>
  <td>Verificar se os tópicos estão sendo criados e salvos corretamente</td>
  <td>
   <ol>
    <li>Acessar a aba fórum.</li>
    <li>Criar tópicos.</li>
    <li>Verificar se os dados foram salvos no local storage.</li>
    <li>Recarregar a página.</li>
    <li>Verificar se os tópicos ainda estão sendo exibidos</li>
   </ol>
   </td>
  <td>Os tócos foram criados e armazenados no local storage. Além disso, ainda são exibidos ao recarregar a página.</td>
  <td>Eduardo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-10: Testar o mecanismo de busca do fórum</td>
  <td>
   <ul>
    <li>RF-06: O fórum deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar informações úteis..</li>
   </ul>
  </td>
  <td>Verificar a busca de informações dentro dos tópicos</td>
  <td>
   <ol>
    <li>Acessar a aba fórum.</li>
    <li>Verificar se existem itens a serem buscados.</li>
    <li>Realizar buscas por temas dos tópicos.</li>
    <li>Recarregar a página.</li>
    <li>Testar a busca novamente</li>
   </ol>
   </td>
  <td>A busca foi realizada com sucesso exibindo apenas o que foi solicitado nos campos devidos.</td>
  <td>Eduardo</td>
 </tr>
</table>
