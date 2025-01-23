let display = document.querySelector('.display'); //seleciona o objeto de onde serão realizados os calculos 

//criando variáveis para manipulação do calculos 
let primeiroValor = ''; //variável que controla o primeiro valor digitado
let segundoValor = ''; //variável que controla o segundo valor digitaado
let operador = ''; // variável que controla o tipo de operação que será executada
let valorAtual = 1; // variável que controla em qual parte da operação estamos trabalhando se é o primeiro ou segundo valor 

//função para apagar os valors de variável retornando os valores para o valor padrão
function limparTela(){
    primeiroValor = '';
    segundoValor = '';
    operador = '';
    valorAtual = 1;
}


// função que recebe via evento de clique de um botão um valor de acordo com cada tecla pressionada 
function clicked(button){
    
    switch(button){ //switch utilizando a variavel de controle o botão pressionado
        case '+': 
        case '-':
        case '/':
        case '*': //Selecionar o operador para efetuar o calculo
            if(primeiroValor !== ""){ //Lógica que verifica se o primeiro valor foi preenchido nos operadores 
               operador = button; //atribui o operador na variável que armazena o tipo de operador pressionado
               valorAtual = 2; //Atualiza o valor atual do calculo para o segundo valor
            }      
            break;
        case 'c':
            limparTela(); //função que limpa a tela após pressionar a tecla C
            break;
        case '=':
            if(valorAtual === 2 && segundoValor !== ""){ //verifica se o valor atual esta no segundo e se ele foi preenchido
               let result =  calculate(primeiroValor,operador,segundoValor); //armazena o valor recebido da função calculate e insere em uma variável
               limparTela(); //limpa a tela 
               primeiroValor = result; //insere o resultado obtido no primeiro valor
            }
            break;
        case '/':
            break;
        case '1':
        case '2':
        case '3':  
        case '4':
        case '5':
        case '6':
        case '7':      
        case '8':
        case '9':
        case '0':  //Programando os cliques nos botões como resposta
            if(valorAtual === 1 ){ //verifica se o cursor esta no primeiro valor 
                primeiroValor += button; //adiciona o valor pressionado no primeiro valor 
            }

            if(valorAtual === 2){ //verifica se o cursor está no segundo valor
                segundoValor += button; // Adiciona o valor pressionado no segundo valor 
            }
    
            break;
        case '.': 
            if(primeiroValor != "" && !primeiroValor.includes(".")){ //verifica se o primeiro valor já foi digitado e verifica se já não possui um ponto digitado
                primeiroValor += button; //armazena o ponto apos a digitação do primeiro valor
            }

            if(segundoValor != "" && !segundoValor.includes('.')){ //verifica se o segundo valor já foi digitado e verifica se já não possui um ponto digitado
                segundoValor += button; //armazena o ponto apos a digitação do primeiro valor 
            }
        break;   
        
        
    }
    atualizaDisplay(); //sempre que rodar o switch deve chamar a função que atualiza o display
    
}

function atualizaDisplay(){ //função que manipula os dados que aparecerão no display
    if(primeiroValor === ""){ //verifica se o primeiro valor ja foi digitado e insere o valor 0;
        display.innerHTML = 0; //inseri o valor zero
    }else{
        display.innerHTML = primeiroValor + operador + segundoValor; //insere no display os valores como texto 
    }
}

function calculate(primeiro, op , segundo){ //função que realiza os calculos com base no operador pressionado
    primeiro = parseFloat(primeiro); //como os valores estão no formato de texto é precisso converter o valor pra numero decimal
    segundo = parseFloat(segundo); //como os valores estão no formato de texto é precisso converter o valor pra numero decimal

    switch(op){ //verifica qual operador foi selecionado
        case '+':
            return primeiro + segundo; //realiza o calculo de soma considerando a tecla de + foi pressionada e retorna o valor da operação
            break
        case '-':
            return primeiro - segundo;
            break;
        case '/':
            return primeiro / segundo;
            break;
        case '*':
            return primeiro * segundo;
            break;            
    }

}
