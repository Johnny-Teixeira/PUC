
  for (let x = 0; x < Itens.length; x++){
     let a = "#" + Itens[x]
     var Resposta_Selecionada = document.querySelector(`${a}`);
     Resposta_Selecionada.onclick = () => {
       Resposta_Selecionada.style.backgroundColor = "#ff0000"
       resposta.push(Resposta_Selecionada.innerHTML)
       alert(resposta)
     }
   }