/*Mapeando o botão, texto, selects e imgs pelas classes e
id com querySelector, respectivamente */
const converte = document.querySelector(".btConverter")
const moedaPaisDoisText = document.querySelector(".moedaPaisDois")
const selectMoedaOrigem = document.querySelector("#moedaOrigem")
const selectMoedaDestino = document.querySelector("#moedaDestino")
const imgPaisOne = document.querySelector("#imgPaisUm")
const imgPaisTwo = document.querySelector("#imgPaisDois")

function converteValores(){
    /*Mapeando o que o usuário digita no input e guardando em valorEntradaMoeda */
    const valorEntradaMoeda = document.querySelector(".entradaMoeda").value

    /*Definindo valor de dólar e euro e fazendo a lógica da conversão.
    Guardando resultado da conversão. A operação que será feita
    é determinada pelo valor do select (opção do usuário).*/
    const dolarToday = 5.11
    const euroToday = 6.21
    
    /*Mapeando a classe valorMoedaAconverter e guardando em varMoedaAconverter.
    Fazendo o mesmo para valorMoeda com varMoedaConvertida. Ambos são os textos com
    os valores das moedas que serão convertidas no momento.*/
    const varMoedaAconverter = document.querySelector(".valorMoedaAconverter")
    const varMoedaConvertida = document.querySelector(".valorMoeda")

   
    

     /*Colocando o que o usuário digitou (valorEntradaMoeda) em varMoedaAconverter.
    O Intl.NumberFormat é uma biblioteca js que permite formatação de números,
    datas, e muito mais. Você precisa criar uma instância e pode passar as configurações
    da formatação como parâmetros. A sintaxe original é: new Intl.NumberFormat([locales[, options]])*/
    if(selectMoedaOrigem.value == "Real" && selectMoedaDestino.value == "Dolar"){
        
    varMoedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format (valorEntradaMoeda / dolarToday)

     imgPaisTwo.src = "./assets/moeda-usa.png"
     moedaPaisDoisText.innerHTML = selectMoedaDestino.value
    
    }
   
    else if(selectMoedaOrigem.value == "Real" && selectMoedaDestino.value == "Euro"){

        varMoedaConvertida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format (valorEntradaMoeda / euroToday)

        imgPaisTwo.src = "./assets/moeda-euro.png"
        moedaPaisDoisText.innerHTML = selectMoedaDestino.value
    }
 
    varMoedaAconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format (valorEntradaMoeda)

} //Fim da função converteValores

/*Adiciona um escutador de evento (clique) no botão (com o converte) e
chama a função acima, que faz toda mágica do código existir*/
converte.addEventListener("click", converteValores)