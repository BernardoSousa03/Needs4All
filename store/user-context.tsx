import { createContext, useState } from "react";
import { MessageContainer, Message, Needs } from "../src/utils/types";

const MichelleProfile = {name : "Michelle", email : "Michelle@gmail.com"};
const TiagoAlbertoProfile = {name : 'Tiago Alberto', email : 'TiagoAlberto@gmail.com'};
const JoanaProfile = {name : "Joana Barroso" , email : 'JoanaBarroso@gmail.com'};
const SofiaAlexandra = {name : 'Sofia Alexandra', email : 'SofiaAlexandra@gmail.com'};
const InesAntunes = {name : 'Ines Antunes', email : 'InesAntunes@gmail.com'};
const AlexandreMondego = {name : 'Alexandre Mondego', email : 'AlexandreMondego@gmail.com'};
const TiagoMesquita = {name : 'Tiago Mesquita', email : 'TiagoMesquita@gmail.com'};
const RodrigoProfile = {name : 'Rodrigo', email : 'Rodrigo@gmail.com'};




const DataNeeds = {
    troca : [
        {user : false, category : "Veículos", name : 'Moto Vintage Branca', description : 'Moto vintage branca, vivaldi, pouco usada, em bom estado', image : 'moto1', profile : TiagoAlbertoProfile},
        {user : false, category : "Roupas masculinas", name : 'Calças de homem variadas', description : 'Calças de vários tipos, marcas, tamanhos e cores, para diferentes ocasiões. Todas lavadas e sem nódoas. Quer estar bem aparecido mas confortável? Experimente este estilo mais desleixado mas cuidado.', image : 'calças', profile : InesAntunes},
        {user : false, category : "Comida", name : '10 Reifeições', description : 'Comida suficiente para 10 refeições, variada nos ingredientes, feita no dia, com produtos biológicos e frescos.', image : 'comida1', profile : MichelleProfile},
        {user : false, category : 'Laptops', name : "Computador Gamimg Portátil Lenovo", description : 'Computador gaming portatil da lenovo, cor preta. Pouco usado, com microssoft pré instalado, 8gb ram, 500 gb disco, processador i7, placa gráfica g90', image : 'computador', profile : RodrigoProfile},
        {user : false, category : 'Laptops', name : "Explicações Matemática", description : 'Explicações, de segunda à sexta, de todas as disciplinas, com horas a confirmar, ligue para 917284082 para marcar. Venha ter connosco e ponha o estudo em ordem.', image : 'Explicações', profile : AlexandreMondego},
        {user : false, category : 'Música', name : "Guitarra arcústica de criança", description : 'Guitarra acustica de criança, marca fender. Reparada e tratada, está como nova. Vem com a mala incluida.', image : 'guitarra', profile : SofiaAlexandra},

    ],
    oferta : [
        {user : false, category : "Música", name : 'Baixo elétrico azul marinho', description : 'Baixo elétrico azul marinho, em bom estado, cordas substituídas recentemente', image : 'baixo', profile : TiagoAlbertoProfile},
        {user : false, category : "Outros", name : 'Calculadora gráfica Texas', description : 'Calculadora gráfica Texas Instruments de 2010. Estou a doar pois já não necessito dela, uma vez que foi utilisada na minha epoca de estudos.', image : 'calculadora', profile : JoanaProfile},
        {user : false, category : "Outros", name : 'Serviço de Canalização', description : 'Serviço de canalização, 24/24, 7 dias por semana. Ligue 917284082 e nós arranjamos todas as suas canalizações. O trabalho é pro bono para todas as infiltrações.', image : 'canalizador', profile : AlexandreMondego},
        {user : false, category : "Outros", name : 'Serviço de Reparação Automóvel', description : 'Serviço de reparos automóveis, 24/24, 7 dias por semana. Ligue 917284082 e nós reparamos todas as suas viaturas. O trabalho é pro bono.', image : 'ReparosCarros', profile : AlexandreMondego},
        {user : false, category : "Roupas masculinas", name : 'Casaco Cabedal Homem', description : 'Casaco de cabedal, preto, grande, unisexo. Cresci e já não me serve. Está em boas condições.', image : 'CasacoCabedal', profile : TiagoMesquita},

    ],
    empréstimo : [
        {user : false, category : "Veículos", name : 'Biciclete elétrica', description : 'Bicicleta elétrica, utilisada apenas 3 vezes, estado como novo. Carregamento rápido, 3 modos de velocidade. Procura ajudar o planeta?', image : 'bicicleta1', profile: TiagoAlbertoProfile},
        {user : false, category : "Veículos", name : 'Trotinete elétrica', description : 'Trotinete eléctrica, estado como novo. Carregamento rápido, 4 modos de velocidade. Procura ajudar o planeta?', image : 'trotinete', profile: TiagoAlbertoProfile},
        {user : false, category : "Veículos", name : 'Audi azul metálico', description : 'Carro azul metálico, audi, pouco usado, em bom estado, disponivel para empréstimo (fui de férias de avião para a figi, podem usar)', image : 'carro', profile: TiagoAlbertoProfile},
    ]
}
const dataCategories = [
    {value : "-------",key : 0},
    {value : "Smartphones", key : 1},
    {value : "Laptops", key : 2},
    {value : "Tablets", key : 3},
    {value : "Câmeras", key : 4},
    {value : "Acessórios eletrônicos",key : 5},
    {value : "Roupas masculinas", key : 6},
    {value : "Roupas femininas", key : 7},
    {value : "Calçados", key : 8},
    {value : "Acessórios de moda", key : 9},
    {value : "Joias",key : 10},
    {value : "Móveis", key : 11},
    {value : "Eletrodomésticos", key : 12},
    {value : "Decoração de interiores", key : 13},
    {value : "Ferramentas de jardinagem",key : 14},
    {value : "Livros", key : 15},
    {value : "Filmes", key : 16},
    {value : "Música", key : 17},
    {value : "Jogos de vídeo", key : 18},
    {value : "Revistas",key : 19},
    {value : 'Veículos',key : 20},
    {value : "Peças de automóveis",key : 21},
    {value : "Equipamentos esportivos", key : 22},
    {value : "Artigos de camping", key : 23},
    {value : "Instrumentos musicais", key : 24},
    {value : "Jogos de tabuleiro",key : 25},
    {value : "Pinturas", key : 26},
    {value : "Antiguidades", key : 27},
    {value : "Itens colecionáveis", key : 28},
    {value : "Esculturas",key : 29},
    {value : "Produtos de beleza", key : 30},
    {value : "Equipamentos de ginástica", key : 31},
    {value : "Suplementos", key : 32},
    {value : "Produtos de cuidados com a pele",key : 33},
    {value : "Brinquedos infantis", key : 34},
    {value : "Roupas infantis", key : 35},
    {value : "Artigos para bebês", key : 36},
    {value : "Carrinhos de bebê",key : 37},
    {value : "Produtos não perecíveis", key : 38},
    {value : "Bebidas alcoólicas", key : 39},
    {value : "Bebidas não alcoólicas", key : 40},
    {value : "Produtos caseiros",key : 41},
    {value : "Comida",key : 42},
    {value : "Alimentação para animais", key : 43},
    {value : "Acessórios para animais", key : 44},
    {value : "Animais de estimação para adoção",key : 45},
    {value : "Outros",key : 46},
];

//TODO Messages, Add, Fix Home Screen

export const UserContext = createContext({
    user : {email : '', name : '', ssn : -1},
    ofertaData : [{name : "", user : false, category : '', profile : {name : '', email : ''}, image : ''}],
    trocaData : [{name : "", user : false, category : '', profile : {name : '', email : ''}, image : ''}],
    empréstimoData : [{name : "", user : false, category : '', profile : {name : '', email : ''}, image : ''}],
    categorys : [""],
    mensagens : [{deliveryUsername : '', deliveryEmail : '', messages : [{text : "", user : false}]}],
    setUser : (user : any) => false,
    addOferta : (oferta : Needs) => false,
    addTroca : (troca : Needs) => false,
    addEmpréstimo : (empréstimo : Needs) => false,
    removeOferta : (oferta : Needs) => {},
    removeTroca : (troca : Needs) => {},
    removeEmpréstimo : (empréstimo : Needs) => {},
    addCategory : (category : string) => {},
    addMessage : (deliveryUsername : string, deliveryEmail : string, message : Message) => {},
    createChat : (deliveryUsername : string, deliveryEmail : string) => {return {deliveryUsername : '', deliveryEmail : '', messages : [{text : '', user : false}]}},
});

function UserContextProvider({children} : {children : any}) {
    const [user, setNewUser] = useState({email : '', name : '', ssn : -1});

    const [ofertaData, setNewOfertaData] = useState<Needs[]>(DataNeeds.oferta);
    const [trocaData, setNewTrocaData] = useState<Needs[]>(DataNeeds.troca);
    const [empréstimoData, setNewEmpréstimoData] = useState<Needs[]>(DataNeeds.empréstimo);
    const [mensagens , setNewMensagens] = useState<MessageContainer[]>([{deliveryUsername : 'Rodrigo', deliveryEmail : 'Rodrigo@gmail.com', messages : [{text : 'Olá Bernardo! Eu gostaria de realizar uma troca do seu carro desportivo pelo meu familiar! Poderiamos conversar?', user: false}]}]);
    const [categorys, setNewCategorys] = useState<{value : string, key : number}[]>(dataCategories);

    function setUser(user : {email : string, name : string, ssn : number}){
        setNewUser(user);
        return true;
    }

    function addOferta(oferta : Needs){
        if (!ofertaData.find((item) => item.name === oferta.name)){
            setNewOfertaData([...ofertaData, oferta]);
            return true;
        }
        return false;
    }

    function addTroca(troca : Needs){
        if (!trocaData.find((item) => item.name === troca.name)){
            setNewTrocaData([...trocaData, troca]);
            return true;
        }
        return false;
    }

    function addEmpréstimo(empréstimo : Needs){
        if (!empréstimoData.find((item) => item.name === empréstimo.name)){
            setNewEmpréstimoData([...empréstimoData, empréstimo]);
            return true;
        }
        return false;
    }

    function removeOferta(oferta : Needs){
        setNewOfertaData(ofertaData.filter((item) => item.name !== oferta.name));
    }

    function removeTroca(troca : Needs){
        setNewTrocaData(trocaData.filter((item) => item.image !== troca.name));
    }

    function removeEmpréstimo(empréstimo : Needs){
        setNewTrocaData(empréstimoData.filter((item) => item.name === empréstimo.name));
    }

    function createChat(deliveryUsername : string, deliveryEmail : string){
        let item = mensagens.find((value) => value.deliveryEmail === deliveryEmail);
        if (!item){
            item = {deliveryUsername : deliveryUsername, deliveryEmail : deliveryEmail, messages : []};
            setNewMensagens([...mensagens, item])
        }
        return item;
    }

    function addMessage(deliveryUsername : string, deliveryEmail : string, mensagem : Message){
        let index = mensagens.findIndex((value) => value.deliveryEmail === deliveryEmail);
        if (index !== -1){
            const newMesagens = mensagens;
            newMesagens[index].messages.push(mensagem);
            setNewMensagens(newMesagens);
        } else {
            const mensagemContainer = {deliveryUsername, deliveryEmail, messages : [mensagem]};
            setNewMensagens([...mensagens, mensagemContainer]);
        }
    }

    const value = {
        user : user,
        ofertaData : ofertaData,
        trocaData :  trocaData,
        empréstimoData : empréstimoData,
        mensagens: mensagens,
        categorys : categorys,
        setUser : setUser,
        addOferta : addOferta,
        addTroca : addTroca,
        addEmpréstimo : addEmpréstimo,
        removeOferta : removeOferta,
        removeTroca : removeTroca,
        removeEmpréstimo : removeEmpréstimo,
        addMessage : addMessage,
        createChat : createChat,
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;