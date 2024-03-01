//Declaração da classe genérica (modelo de herói)
class hero {

    //Parâmetros de construção que devem ser passados na instanciação de nov herói
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    //Método que define a forma de ateque de acordo com o tipo de herói
    atacar() {

        /*Decalrção da variável local que armazena a forma de ataque 
        de acordo com o tipo de herói*/
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque';
        }
        //Exibe no console o tipo de herói, nome e forma de ataque
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
    }
}

//Instanciando um novo objeto a partir da classe hero
const myHero = new hero('Daniel', 46, 'ninja');
myHero.atacar();