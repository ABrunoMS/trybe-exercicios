// Recupere o elemento que contém o título da página e faça algo com ele, por exemplo alterá-lo para o nome do seu filme favorito.
// Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
// Por fim, recupere o subtítulo e altere-o também.
/* <body>
<header>
  <h2 id="page-title">Título</h2>
  <p id="paragraph">Dê uma cor para este parágrafo!</p>
  <h4 id="subtitle">Subtítulo</h4>
  <p id="second-paragraph">Segundo parágrafo!</p>
</header>
<script src="script.js">
 
</script>
</body> */

document.getElementById('page-title').innerText = 'Guerra infinita'

document.getElementById('second-paragraph').style.background = 'red'

document.getElementById("subtitle").style.background = 'blue'