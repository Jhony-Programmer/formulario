var arrayGlobal = []

function obterDado(event){
    event.preventDefault();

    let conteudo = document.getElementsByTagName("input");
    let opcao = document.getElementsByTagName("select");
    let array = [];
    
        for(let i = 0; i < conteudo.length; i++){
            array.push(conteudo[i].value);
        }    

        array.push(opcao[0].value)

    arrayGlobal = array;

         for(let i = 0; i < conteudo.length; i++){
            conteudo[i].value = ""
        }    

        console.log(arrayGlobal)

    }


