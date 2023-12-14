<!--DOCTYPE html-->
<html>
<head>
 <style>
  .comentario{
   background-color: #7d8590;
  }
 </style>
</head>
<body>
<h1>INSTRUÇÕES INICIAIS</h1>
<div class="comentario">
Este é um projeto utilizado para treinar a linguagem git. 
Assim como exemplificar alguns comandos importantes.
</div>
<br>

<h1>ALGUNS COMANDOS E SUAS FUNÇÕES</h1>
<div>
1 - git init<p>
Cria um repositório vazio, tornandoa a master/main do projeto

2 - git add nome_do_arquivo.extensao
Manda os arquivos para área de steding, ou sejam, envia os arquivos para área
de preparação de armazenamento dos arquivos no servidor

3 - git status
Mostra os arquivos novos ou editados que precisam ser enviados ao servidor

4 - git commit -m "escreva uma mensagem"
Envia os arquivos para o servidor, adicionando uma mensagem referente à subida 
dos arquivos

5 - git branch -M "main"
Muda da branch master para a main

6 - git remote add origin link_da_branch
Cria a conexão entre a máquina local e o servidor (remote), adicionando os
arquivos no servidor informado (origin)

7 - git push -u origin main
Envia os arquivos para o servidor informado

8 - git checkout -b "nome-da-branch"
Sai da branch atual e cria uma nova branch

9 - git checkout main
Sai da brach atual e vai para a main
</div>

<h1>MERGE</h1>
10 - git merge nome_da_branch
Faz o merge da branch informada para a branch que está conectado no momento

11 - git push -u origin main
Após o comando de merge é necessário realizar o push na main para que as informações 
sejam atualizadas no servidor
</body>
</html>