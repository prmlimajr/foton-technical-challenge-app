<h1 align="center">NoiaBooks</h1>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#layout">Layout</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#executa">Executando o projeto</a> • 
  <a href="#autores">Autores</a>
</p>

<h2 id="sobre">💻Sobre o projeto:</h2>

<p>Trata-se de um sistema que abrange duas aplicações, backend e frontend mobile, para visualização e cadastro de livros.</p>
<p>Este projeto foi desenvolvido como desafio técnico para a vaga de dev fullstack da Foton.</p>

<h2 id="layout">🎨 Layout</h2>
<div display="flex" flex-wrap="wrap" width="1000px">
  <img alt="Home" title="#Home" src="https://imgur.com/7kV7e2i.png" width="500px" />
  <img alt="Search" title="#Search" src="https://imgur.com/TvF3Fp0.png" width="500px/>
  <img alt="Detail" title="#Detail" src="https://imgur.com/tcrJp29.png" width="500px" />
  <img alt="AddBook" title="#AddBook" src="https://imgur.com/kofz1yo.png" width="500px" />
  <img alt="HomeAddBook" title="#HomeAddBook" src="https://imgur.com/ZBpF5zT.png" width="500px" />
  <img alt="Profile" title="#Profile" src="https://imgur.com/VQO6u1c.png" width="500px" />
  <img alt="NameChange" title="#NameChange" src="https://imgur.com/tfm9YrM.png" width="500px" />
</div>

<h2 id="tecnologias">🛠 Tecnologias</h2>
<p>As seguintes tecnologias foram usadas para construir esse projeto:</p>
<ul>
  <li><a href="https://nodejs.org/en/">NodeJS</a></li>
  <li><a href="https://reactjs.org/">React Native</a></li>
  <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  <li><a href="https://styled-components.com/">Styled Components</a></li>
  <li><a href="https://github.com/axios/axios">Axios</a></li>
  <li><a href="https://expressjs.com/pt-br/">Express</a></li>
  <li><a href="http://knexjs.org/">Knex</a></li>
  <li><a href="https://www.mysql.com/">MySQL</a></li>
</ul>

<h2 id="executa">🚀 Executando o projeto</h2>
<p>Para executar o projeto é necessário ter em sua máquina o conteúdo tanto do backend quanto do frontend instalados.</p>

<h4>Backend</h4>
<p>Para instalar o backend, siga o passo a passo abaixo:</p>

<p>Acesse um diretório em seu computador onde será instalado o backend.</p>

<p>Para criar a base de dados, siga o passo a passo abaixo:</p>

<p>Primeiramente é preciso criar um banco de dados MySQL e configurar um arquivo .ENV com os dados de configuração do banco.</p>
<p>A partir daí, todo o restante do processo é automatizado e feito através do esquema de migrations do Knex.</p>
<p>Em seu terminal rode o comando:</p>
<code>yarn knex migrate:latest</code>
<p>Em seguida:</p>
<code>yarn knex seed:run</code>
<p>Com isso o será criada a tabela books e feita uma carga de inserção inicial com alguns títulos para serem consumidos pelo aplicativo no primeiro acesso.

<code>git clone https://github.com/prmlimajr/foton-technical-challenge-backend.git</code>

<code>yarn</code>

<p>E após a instalação:</p>
<code>yarn dev</code>

<p>O servidor inciará na no endereço de ip e portas que você determinou no arquivo .env</p>

<h4>Frontend</h4>
<p>Para instalar o frontend, siga o passo a passo abaixo:</p>

<p>git clone https://github.com/prmlimajr/foton-technical-challenge-app.git</p>

<code>yarn</code>
<p>E em seguida, com seu smartphone conectado ao computador, ou com um emulador configurado, rode:</p>
<code>yarn android</code> 
<p>ou</p>
<code>yarn ios</code> 
<p>de acordo com o seu sistema operacional</p>

<h2 id="autores">😯 Autor</h2>
<a href="https://www.linkedin.com/in/prmlimajr/">Paulo Lima</a>
