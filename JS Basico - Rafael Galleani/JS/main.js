
/*
//Funcions
// usando o onload
function load(){
    alert("Pagina carregada com sucesso");
}

function change(elemento){//não deu certo - Procurar ver o que deu erro
    console.log(elemento.value);

}


/* // Adcionado a função troca texto referenciando o proprio elemento
function trocatexto(elemento){
    elemento.innerHTML = "Passou o mouse";
    //document.getElementById("trocatexto").innerHTML = ("Passou o mouse");
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!!";
    //document.getElementById("trocatexto").innerHTML = ("Passe o mouse aqui!!");
}

/* //Alterandoo conteudo do HTML por Injeção (innerHTML)
function botao(){
    document.getElementById("teimoso").innerHTML = "<h1>Que teimosia do caraio vuuuuhhh... agora dê ctrl+r, vá... </h1>";    
    window.open("https://br.freepik.com/vetores-gratis/sinal-da-mao-do-dedo-medio_737105.htm")

}
 */



/*
//Incluindo a function no botão html
function botao(){
    alert("Obrigado por clicar");
}


/*
//soma
var n1, n2; //var recebe 2 numeros atraves do prompt
n1 = prompt ("Insira o 1º numero");//n1
n2 = prompt ("Insira o 2º numero");//n2
function soma (n1,n2) {
    return n1+n2;
}//a função "soma" realiza a ação mediante os parametros passados;
console.log(soma(parseInt(n1),parseInt(n2)));//para somar o que vm do prompt deve ser feito o parse na impressão, senao vira string;

//exemplo: function replace corrigida. a funcão deve estar dentro do console log

function setReplace(frase, asubstituir,substituto){
    var asubstituir = prompt("Informe a palavra a Substituir");
    var substituto = prompt("Informe a palavra Substituta");
    return frase.replace(asubstituir,substituto);
}
var frase = prompt("Informe a frase");
var asubstituir = ""; 
var substituto = "";

console.log(setReplace(frase,asubstituir,substituto));



/*
//Datas
var d = new Date();
var data = d.getDate();
var mes = d.getMonth()+1;
var ano = d.getFullYear();
var lista = [data, mes, ano];
console.log(lista.join("/"))
console.log(d);


/*
//Laços de repetição
//for
var count;
for(count = 1; count <=5;count++){
    console.log(count)
}


/*
//while
var count = 1
while(count<=5)(
    console.log(count++)
)


/*
//Estruturas Condicionais IF e Else
var idade = prompt("Qual sua idade");
if (idade>=18){
    console.log("Maior de Idade");
} else{
    console.log("Menor de idade");
}


// // Dicionário
// var carro = {nome: "Astra", ano: "2005", modelo: "Hatch", };//no dicionario os itens nao sao chamados por indices, mas pelo nome que pode ser um alias
// console.log(carro);
// console.log(carro.nome);
// console.log(carro.ano);



/* var lista = ["Meia", "Calça", "Tenis", "Camisa", "Boné"];
//lista.push("Sandália"); //Adiciona um item ao final da lista
//lista.pop(); //Remove o ultimo item da lista 
console.log(lista);//exibe a lista
console.log(lista.length);//exibe o tamanho da lista
console.log(lista.reverse());//exibe a lista do fim pro começo
console.log(lista.sort());//exibe a lista em ordem alfabética
console.log(lista[3]);//exibe o indice [n] da lista
console.log(lista.toString());//exibe a lista em string (fora do array)
console.log(lista.join(" / "));//Separa cada elemento da lista com o elemento indicado no join 


/* var nome = "Rafael Pedroza";
var Idade1 = 29;
var Idade2 = 11;
console.log(nome);
console.log(Idade1+Idade2+Idade1)
var frase = "O Conhecimento é infinito";
console.log(frase.replace ("Conhecimento","feijão"));
console.log(frase.toUpperCase(frase))
// alert("Seja be vindo à Jamile Almeida MakeUp")
// alert("Meu nome é: " + nome + " e minha idade: " + Idade);
 */ 