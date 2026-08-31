import { Product, Testimonial } from '../types';
import heroImg from '../assets/images/hero_amem_craft_1786541964758.jpg';
import artisanImg from '../assets/images/artisan_crafting_1786541978083.jpg';
import nossaSenhoraImg from '../assets/images/product_nossa_senhora_1786541988060.jpg';
import tercoImg from '../assets/images/product_terco_artesanal_1786542000412.jpg';
import saoJosemg from '../assets/images/product_sao_jose_1786542015682.jpg';
import anjoImg from '../assets/images/product_anjo_batismo_1786542027494.jpg';
import sagradoCoracaoImg from '../assets/images/product_sagrado_coracao_jesus.jpg';
import kitDevocaoImg from '../assets/images/product_mobile_anjos.jpg';
import dezenaimg from '../assets/images/product_dezena_azul.jpg';
import tercocasalImg from '../assets/images/product_terco_casal.jpg'; 
import jesusCrucificadoImg from '../assets/images/product_jesus_crucificado.jpg';
import carneirosImg from '../assets/images/product_mobile_carneiros.jpg';
import animalImg from '../assets/images/product_mobile_animais.jpg';
import nossaSenhorafatimaImg from '../assets/images/product_nsa_senhora_fatima.jpg';
import velaBatismoImg from '../assets/images/product_vela_batismo.jpg';
import lembrancaImg from '../assets/images/product_lembraca_sacramento.jpg';
import saoBentoImg from '../assets/images/product_sao_bento.jpg';
import ursoImg from '../assets/images/product_urso_naninha.jpg';
import girafaImg from '../assets/images/product_girafa.jpg';
import bailarinaImg from '../assets/images/product_bailarina.jpg';
import pandaImg from '../assets/images/product_panda.jpg';
import heroisImg from '../assets/images/product_herois.jpg';
import leaoImg from '../assets/images/product_leao.jpg';
import tercoFatimaImg from '../assets/images/product_terco_fatima.jpg';
import tercoPersonalizadoImg from '../assets/images/product_terco_personalizado.jpg';
import velaAparecidaImg from '../assets/images/product_vela_aparecida.jpg';
import velaDesatadoraImg from '../assets/images/product_vela_desatadora.jpg';
import SuporteVelaAparecidaImg from '../assets/images/product_suporte_vela.jpg';
import bonecaTrocaRoupaImg from '../assets/images/product_boneca_troca_roupa.jpg';
import bonecaPraiaImg from '../assets/images/product_boneca_praia.jpg';
import bonecoAdvogadoImg from '../assets/images/product_advogado.jpg';


export const ASSETS = {
  hero: heroImg,
  artisan: artisanImg,
  nossaSenhora: nossaSenhoraImg,
  terco: tercoImg,
  saoJose: saoJosemg,
  anjo: anjoImg,
  sagradoCoracao: sagradoCoracaoImg,
  mobile: kitDevocaoImg,
  dezena: dezenaimg,
  tercocasal: tercocasalImg,
  jesusCrucificado: jesusCrucificadoImg,
  carneiros: carneirosImg,
  animal: animalImg,
  nossaSenhoraFatima: nossaSenhorafatimaImg,
  velaBatismo: velaBatismoImg,
  lembranca: lembrancaImg,
  saoBento: saoBentoImg
};

export const PRODUCTS: Product[] = [
  //AMIGURUMI
  {
    id: 'nossa-senhora-aparecida',
    name: 'Nossa Senhora Aparecida em Amigurumi',
    subtitle: 'Manta em tom azul royal com bordados dourados feitos à mão',
    category: 'amigurumi',
    price: 189.90,
    image: nossaSenhoraImg,
    description: 'Santinha confeccionada com fio 100% algodão de altíssima qualidade, enchimento hipoalergênico e coroa artesanal dourada. Cada detalhe do manto é bordado com carinho e oração.',
    dimensions: 'Aprox. 24 cm de altura',
    materials: ['Fio 100% Algodão Mercerizado', 'Fibra Siliconada Antialérgica', 'Detalhes em Fio Dourado metálico', 'Base firme com suporte interno'],
    isPopular: true,
    isNew: false,
    customizationOptions: ['Coroa Dourada', 'Coroa Dourada',]
  },
  {
    id: 'sao-jose-com-menino-jesus',
    name: 'São José com Menino Jesus em Amigurumi',
    subtitle: 'São Jose com o menino Jesus em seu regaço, patrono e guardião dos lares.',
    category: 'amigurumi',
    price: 159.90,
    image: saoJosemg,
    description: 'Figura de São José com o menino Jesus em seu regaço, patrono e guardião dos lares.',
    dimensions: 'Aprox. 24 cm de altura',
    materials: ['Fio 100% Algodão', 'Detalhes em Fio Dourado metálico', 'Olhos com trava de segurança'],
    isPopular: true,
    isNew: true,
  
  },
    {
    id: 'Jesus Crucificado em Amigurumi',
    name: 'Jesus Crucificado em Amigurumi',
    subtitle: 'Linda Imagem de Jesus Crucificado em crochê artesanal, perfeita para decoração e devoção.',
    category: 'amigurumi',
    price: 119.00,
    image: jesusCrucificadoImg,
    description: '  Figura de Jesus Crucificado em crochê artesanal, feita com fio 100% algodão de alta qualidade e enchimento hipoalergênico. Ideal para presentear ou decorar seu espaço de oração.',
    dimensions: 'Aprox. 24 cm de altura',
    materials: ['Fio 100% Algodão', 'Cordão em Algodão Cru', 'Olhos com trava de segurança'],
    isPopular: true,
    isNew: true,
    customizationOptions: ['Cruz Madeira', 'Cruz em crochê',]
  },
    {
    id: 'imaculado-coracao-de-maria',
    name: 'Imaculado Coração de Maria Amigurumi',
    subtitle: 'Manto vermelho com auréola e detalhes do coração flamejante',
    category: 'amigurumi',
    price: 149.90,
    image: sagradoCoracaoImg,
    description: 'Representação carinhosa do Imaculado Coração de Maria. Peça rica em simbolismo com manto vermelho artesanal e bordados minuciosos do coração e coroa de espinhos.',
    dimensions: 'Aprox. 24 cm de altura',
    materials: ['Fio 100% Algodão', 'Bordados à mão em Fio de Ouro', 'Enchimento de Alta Densidade'],
    isPopular: false,
    isNew: true,
  
  },
    {
    id: 'nossa-senhora-de-fatima-amigurumi',
    name: 'Nossa Senhora de Fátima Amigurumi',
    subtitle: 'Manto branco com coroa dourada e detalhes do coração em joia',
    category: 'amigurumi',
    price: 179.90,
    image: nossaSenhorafatimaImg,
    description: 'Representação carinhosa de Nossa Senhora de Fátima. Peça rica em simbolismo com manto branco',
    dimensions: 'Aprox. 24 cm de altura',
    materials: ['Fio 100% Algodão Premium', 'Bordados à mão em Fio de Ouro', 'Enchimento de Alta Densidade'],
    isPopular: false,
    isNew: true,
    
  },
  {
    id: 'sao-bento-amigurumi',
    name: 'São Bento Amigurumi',
    subtitle: 'Habito preto, segurando a bíblia, cajado e medalha de São Bento',
    category: 'amigurumi',
    price: 149.90,
    image: saoBentoImg,
    description: 'Representação de São Bento monge cristão e o criador da Regra de Beeneditina, um guia famoso que une oração e trabalho..',
    dimensions: 'Aprox. 24 cm de altura',
    materials: ['Fio 100% Algodão', 'Bordados à mão em Fio de Ouro', 'Enchimento de Alta Densidade'],
    isPopular: false,
    isNew: true,
   
  },
  //TERÇOS
  {
    id: 'terco-artesanal-madeira-pedra',
    name: 'Terço comtemplativo com os misterios em cada dezena',
    subtitle: 'Feito com cordão encerado ultra resistente e cruz entalhada',
    category: 'tercos',
    price: 79.00,
    image: tercoImg,
    description: 'Acompanha saquinho em linho cru personalizado para armazenamento seguro.',
    materials: ['Pérolas Sintéticas de Alta Durabilidade', 'Cordão Encerado de Seda', 'Medalha em Metal'],
    isPopular: false,
    isNew: true,
  },
 
  {
    id: 'terco-de-pulso-perolas-artesanal',
    name: 'Pingente de Carro',
    subtitle: 'Delicado, prático e ideal para ser usado no seu veiculo',
    category: 'tercos',
    price: 44.90,
    image: dezenaimg, 
    description: 'Pingente de carro, perfeito para acompanhar a oração a qualquer momento do dia.',
    materials: ['Pérolas Sintéticas de Alta Durabilidade', 'Cordão Encerado de Seda', 'Medalha em Metal Ouro Velho'],
    isPopular: true,
    isNew: true,
    customizationOptions: ['Pérola Branca', 'Pérola Azul', 'Pérola Prata'] 
  },
  {
    id: 'terco-sao-bento-madeira-imbuia',
    name: 'Terço Casal',
    subtitle: 'Terço para os casais que rezam juntos',
    category: 'tercos',
    price: 74.90,
    image: tercocasalImg, 
    description: 'Terço robusto com contas de madeira nobre de imbuia escura, entremeio com a Medalha do Jubileu de São Bento e cruz em metal prateado envelhecido.',
    materials: ['Pérolas Sintéticas de Alta Durabilidade', 'Cordão Encerado de Seda', 'Medalha em Metal Ouro Velho'],
    isPopular: true,
    isNew: false,
    customizationOptions: []
  },
    {
    id: 'terco-nsa-fatima',
    name: 'Terço Fino',
    subtitle: 'Personalizamos com o nome',
    category: 'tercos',
    price: 44.90,
    image: tercoFatimaImg, 
    description: 'Uma peça de altíssima elegância confeccionada com cristais facetados e pérolas. Reflete a luz de forma suave, tornando o momento de oração ainda mais contemplativo.',
    materials: ['Pérolas Sintéticas de Alta Durabilidade', 'Cordão Encerado de Seda', 'Medalha em Metal Ouro Velho'],
    isPopular: false,
    isNew: true,
    customizationOptions: [ ]
  },
    {
    id: 'terco-personlizado',
    name: 'Terço Simples',
    subtitle: 'Personalizamos com o nome',
    category: 'tercos',
    price: 34.90,
    image: tercoPersonalizadoImg, 
    description: 'Uma peça de altíssima elegância confeccionada com cristais facetados e pérolas. Reflete a luz de forma suave, tornando o momento de oração ainda mais contemplativo.',
    dimensions: 'Comprimento total: 50 cm',
    materials: ['Perolas Sintéticas de Alta Durabilidade'],
    isPopular: false,
    isNew: true,
    customizationOptions: []
  },
  //SACRAMENTOS
  {
    id: 'porta-alianca-nossa-senhora-amigurumi',
    name: 'Porta aliança Nossa Senhora Amigurumi',
    subtitle: 'Porta alianças artesanal em crochê, ideal para casamentos e cerimônias religiosas',
    category: 'sacramento',
    price: 219.00,
    image: anjoImg,
    description: 'Porta alianças artesanal em crochê, ideal para casamentos e cerimônias religiosas.',
    dimensions: 'Aprox. 24 cm de altura',
    materials: ['Fio Algodão Suave Premium', 'Auréola com Fio Metalizado',],
    isPopular: true,
    isNew: false,
    
  },

   {
  id: 'vela-batismo-personalizada',
  name: 'Vela de Batismo Personalizada',
  subtitle: 'Lembrança inesquecível para batizado, primeira comunhão e nascimento',
  category: 'sacramento',
  price: 19.90,
  image: velaBatismoImg,
  description: 'Vela artesanal decorada com revestimento em corda de sisal, detalhes em mini estrelas prateadas, laço duplo em fita cetim dourada e renda branca rendada. Acompanha medalha metálica de Espírito Santo com oração do Santo Anjo gravada.',
  dimensions: 'Aprox. 25 a 30 cm de altura',
  materials: [ 'Vela de Parafina Branca','Corda de Sisal Natural','Fita de Cetim e Renda Guipir', 'Medalha Metálica Dourada (Espírito Santo / Santo Anjo)','Aplicação de Mini Estrelas'],
  isPopular: true,
  isNew: false,
  customizationOptions: [ ]
  },

 {
  id: 'kit-lembranca-fio-de-malha',
  name: 'Kit Lembrança Religiosa em Fio de Malha',
  subtitle: 'Lembrança delicada e artesanal para batizado, crisma e eventos especiais',
  category: 'sacramento',
  price: 14.90,
  image: lembrancaImg,
  description: 'Conjunto artesanal em crochê com fio de malha verde-sálvia. Inclui mini cestinho porta-objetos com tampa, mini vela aromática decorada e medalhão com pomba do Espírito Santo em relevo.',
  dimensions: 'Porta-objetos: aprox. 8 cm de diâmetro x 9 cm de altura | Medalhão: aprox. 8 cm de diâmetro',
  materials: ['Fio de Malha Premium Verde-Sálvia', 'Aplique do Espírito Santo em Resina/Gesso','Vela Aromática Decorativa','Fio de Sisal / Cordão Natural com Miçangas'],
  isPopular: true,
  isNew: true,
  customizationOptions: []
},
  //MÓBILES
  {
    id: 'móbile-infantil-Nsa Senhora e Anjos',
    name: 'Móbile: Nossa Senhora e Anjos em Crochê',
    subtitle: 'Seu bebe vai adorar o móbile artesanal com Nossa Senhora e Anjos em crochê, feito à mão com fios de algodão de alta qualidade.',
    category: 'mobile',
    price: 550.00,
    image: kitDevocaoImg,
    description: 'Móbile infantil com Nossa Senhora e Anjos em crochê, feito à mão com fios de algodão de alta qualidade. Ideal para decorar o quarto do bebê e estimular a percepção visual e tátil.',
    materials: ['Conjunto de produtos artesanais Amém'],
    isPopular: true,
    isNew: false,

  },

   {
    id: 'móbile-infantil-animais',
    name: 'Móbile: Animais em Crochê',
    subtitle: 'Móbile infantil com animais em crochê, feito à mão com fios de algodão de alta qualidade.',
    category: 'mobile',
    price: 249.90,
    image: animalImg,
    description: 'Móbile infantil com animais em crochê, feito à mão com fios de algodão de alta qualidade. Ideal para decorar o quarto do bebê e estimular a percepção visual e tátil.',
    materials: ['Conjunto de produtos artesanais Amém',],
    isNew: false,
   
  },

    {
  id: 'mobile-infantil-carneirinhos',
  name: 'Móbile de Berço Carneirinhos em Crochê',
  subtitle: 'Móbile infantil com carneirinhos, nuvens e corações em amigurumi',
  category: 'mobile',
  price: 219.90,
  image: carneirosImg,
  description: 'Móbile delicado para berço composto por ovelhinhas, nuvens fofinhas, esferas e um coração pendente em amigurumi. Confeccionado à mão em tons neutros e suaves (branco, bege e rosa claro), ideal para tranquilizar o bebê e enriquecer a decoração do quarto.',
 
  materials: ['Fio 100% Algodão Mercerizado','Enchimento de Manta Acrílica Hipoalergênica','Olhos com Trava de Segurança','Estrutura/Suporte Plástico Resistente para Berço'],
  isPopular: true,
  isNew: false,
  customizationOptions: []
},
  //BABY
 {
  id: 'urso-naninha-em-croche',
  name: 'Kit Urso Aviador + Naninha',
  subtitle: 'Conjunto encantador em amigurumi com urso aviador e naninha macia para o bebê',
  category: 'baby',
  price: 219.90,
  image: ursoImg,
  description: 'Kit fofinho composto por um Urso Aviador em crochê amigurumi (com touca, óculos estilo aviador e bermudinha azul) acompanhado de uma naninha de ursinho macia com paninho azul. Peças perfeitas para trazer aconchego na hora de dormir e decorar o quarto do bebê.',
  materials: ['Fio 100% Algodão Premium','Olhos com Trava de Segurança Antiasfixia', 'Enchimento de Manta Acrílica Hipoalergênica', 'Tecido de Algodão Macio para a Naninha'],
  isPopular: true,
  isNew: false,
  customizationOptions: []
},
 {
  id: 'girafa-em-croche',
  name: 'Amigurumi Girafa em Crochê',
  subtitle: 'Encantadora girafinha feita à mão em amigurumi para decoração e momentos de afeto',
  category: 'baby',
  price: 149.90,
  image: girafaImg,
  description: 'Girafinha artesanal confeccionada em crochê amigurumi com fios de algodão de alta qualidade. Apresenta detalhes bordados no corpo, hachuras no focinho e chifres em tom marrom. Uma peça carinhosa e segura para acompanhar o crescimento do bebê e decorar o quartinho.',
  materials: [
    'Fio 100% Algodão Premium (Amarelo Claro e Marrom)',
    'Olhos com Trava de Segurança Antiasfixia',
    'Enchimento de Manta Acrílica Hipoalergênica',
    'Detalhes Bordados à Mão'
  ],
  isPopular: true,
  isNew: false,
  customizationOptions: []
},
 {
  id: 'bailarina-em-croche',
  name: 'Amigurumi Boneca em Crochê',
  subtitle: 'Delicada boneca feita à mão em amigurumi para encantar e decorar',
  category: 'baby',
  price: 179.90,
  image: bailarinaImg,
  description: 'Boneca em amigurumi, confeccionada com fios de algodão macio. Apresenta coque clássico com lacinho, collant, tutu de filó rendado e sapatilhas de ballet. Uma peça poética e perfeita para presentear, brincar e ornamentar o quarto infantil.',
    materials: [
    'Fio 100% Algodão Premium',
    'Tule / Filó Suave para a Saia Tutu',
    'Olhos com Trava de Segurança Antiasfixia',
    'Enchimento de Manta Acrílica Hipoalergênica'
  ],
  isPopular: true,
  isNew: false,
  customizationOptions: [
    
  ]
},
  {
  id: 'panda-em-croche',
  name: 'Kit Naninha + Amigurumi Panda em Crochê',
  subtitle: 'Conjunto afetuoso de panda amigurumi com naninha combinando em crochê artesanal',
  category: 'baby',
  price: 219.90,
  image: pandaImg,
  description: 'Kit adorável composto por um ursinho panda em crochê amigurumi e uma naninha com cabecinha de panda e paninho macio. Confeccionado à mão em contraste clássico de preto e branco, traz aconchego para a hora do sono e compõe com charme a decoração do quarto do bebê.',
    materials: [
    'Fio 100% Algodão Premium (Preto e Branco)',
    'Olhos com Trava de Segurança Antiasfixia',
    'Enchimento de Manta Acrílica Hipoalergênica',
    'Tecido / Mantinha de Algodão Hipoalergênico'
  ],
  isPopular: true,
  isNew: false,
  customizationOptions: []
},
  {
    id: 'leao-em-croche',
    name: 'Leão Amigurumi em Crochê',
    subtitle: 'Majestoso e carismático leãozinho feito à mão com fios de algodão de alta qualidade',
    category: 'baby',
    price: 149.90,
    image: leaoImg,
    description: 'Leãozinho em crochê amigurumi confeccionado artesanalmente com fios macios e detalhes cuidadosos na juba. Perfeito para compor a decoração do quarto do bebê com tema safari e acompanhar as brincadeiras.',
    materials: [
      'Fio 100% Algodão Premium',
      'Olhos com Trava de Segurança Antiasfixia',
      'Enchimento de Manta Acrílica Hipoalergênica'
    ],
    isPopular: true,
    isNew: false,
    customizationOptions: [
      
    ]
  },
  {
    id: 'boneca-troca-roupas-em-croche',
    name: 'Boneca Troca Roupas em Crochê',
    subtitle: 'Boneca articulada em amigurumi com kit de 4 trocas de roupas artesanais',
    category: 'baby',
    price: 299.90,
    image: bonecaTrocaRoupaImg,
    description: 'Encantadora boneca em crochê projetada para estimular a imaginação e a coordenação motora. Acompanha 4 conjuntos completos de roupinhas removíveis e fáceis de vestir.',
       materials: [
      'Fio 100% Algodão Premium',
      'Olhos com Trava de Segurança Antiasfixia',
      'Enchimento de Manta Acrílica Hipoalergênica',
      'Botões e Acessórios Antiasfixia para as Roupas'
    ],
    isPopular: true,
    isNew: false,
    customizationOptions: [
    
    ]
  },
  {
    id: 'boneco-advogados-em-croche',
    name: 'Mini Mim Amigurumi Profissões',
    subtitle: 'Boneco amigurumi personalizado inspirado na pessoa, profissão ou estilo desejado',
    category: 'baby',
    price: 209.90,
    image: bonecoAdvogadoImg,
    description: 'Boneco artesanal feito sob medida para homenagear profissionais (advogados, médicos, professores, etc.) ou recriar traços marcantes de quem você ama. Uma lembrança afetiva e cheia de personalidade.',
    dimensions: 'Aprox. 20 a 25 cm de altura',
    materials: [
      'Fio 100% Algodão Premium',
      'Olhos com Trava de Segurança Antiasfixia',
      'Enchimento de Manta Acrílica Hipoalergênica',
      'Mini Acessórios Temáticos (Beca, Óculos, Livros)'
    ],
    isPopular: true,
    isNew: false,
    customizationOptions: [

    ]
  },
  {
    id: 'boneca-praia-em-croche',
    name: 'Boneca Temática Praia em Amigurumi',
    subtitle: 'Boneca de praia feita à mão com acessórios de verão em crochê',
    category: 'baby',
    price: 179.90,
    image: bonecaPraiaImg,
    description: 'Bonequinha temática cheia de charme vestida com roupinha de banho e acessórios de praia (chapéu de sol, boia e óculos). Peça perfeita para presentear e decorar ambientes infantis.',
    materials: [
    
    ],
    isPopular: true,
    isNew: false,
    customizationOptions: [
     
    ]
  },

  // VELAS
  {
    id: 'vela-decorativa-nossa-senhora-aparecida',
    name: 'Vela Gruta com Mini Nossa Senhora Aparecida',
    subtitle: 'Vela artesanal em formato de gruta com imagem delicada de Nossa Senhora Aparecida',
    category: 'velas',
    price: 44.90,
    image: velaAparecidaImg,
    description: 'Vela decorativa e devocional confeccionada artesanalmente no formato de gruta natural, abrigando uma imagem em miniatura de Nossa Senhora Aparecida. Traz serenidade, luz e fé para o seu altar ou lar.',
       materials: [
      'Cera Vegetal Eco-friendly / Parafina Especial',
      'Pavio de Algodão',
      'Mini Imagem Religiosa de Nossa Senhora Aparecida'
    ],
    isPopular: true,
    isNew: false,
    customizationOptions: [
      
    ]
  },
  {
    id: 'vela-decorativa-nossa-senhora-desatadora-dos-nos',
    name: 'Vela Gruta com Santo de Devoção',
    subtitle: 'Vela decorativa em formato de gruta com o seu Santo ou Santinha preferido',
    category: 'velas',
    price: 79.90,
    image: velaDesatadoraImg,
    description: 'Vela esculpida em formato de gruta projetada para homenagear a sua devoção. Abriga com delicadeza a imagem do seu Santo de devoção (como Nossa Senhora Desatadora dos Nós), iluminando seus momentos de oração.',
    dimensions: 'Aprox. 14 cm de altura x 10 cm de largura',
    materials: [
      'Cera Vegetal de Alta Qualidade',
      'Pavio de Algodão',
      'Imagem Esculpida do Santo de Devoção'
    ],
    isPopular: true,
    isNew: false,
    customizationOptions: [
    
    ]
  },
 
];
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Maria Clara Vasconcelos',
    city: 'São Paulo - SP',
    rating: 5,
    comment: 'A Nossa Senhora Aparecida superou todas as minhas expectativas! O trabalho é perfeito, dá para sentir o carinho e a oração em cada ponto. Minha mãe chorou ao receber.',
    productName: 'Nossa Senhora Aparecida em Amigurumi',
    date: '12 de Julho, 2026'
  },
  {
    id: 't2',
    author: 'Padre Antônio Resende',
    city: 'Belo Horizonte - MG',
    rating: 5,
    comment: 'Encomendei o São Francisco para abençoar o nosso altar da capela. As peças da Amém têm uma delicadeza e uma energia abençoada única. Parabéns pelo talento!',
    productName: 'São Francisco de Assis',
    date: '28 de Junho, 2026'
  },
  {
    id: 't3',
    author: 'Juliana e Renato',
    city: 'Curitiba - PR',
    rating: 5,
    comment: 'Compramos os anjinhos para lembrancinha de batizado da nossa filha. O atendimento no WhatsApp foi excepcional, entregaram dentro do prazo e as peças são encantadoras!',
    productName: 'Porta aliança Nossa Senhora Amigurumi',
    date: '04 de Agosto, 2026'
  }
];

export const BRAND_CONFIG = {
  name: 'Amém',
  tagline: 'fé que se faz à mão',
  instagramUrl: 'https://www.instagram.com/amem_artigosreligiosos/',
  instagramHandle: '@amem_artigosreligiosos',
  whatsappNumber: '5511999999999', // Placeholder standard WhatsApp
  whatsappFormatted: '+55 (11) 99999-9999',
  email: 'contato.amem.artigos@gmail.com',
  city: 'Ateliê em São Paulo - SP',
  shippingText: 'Enviamos para todo o Brasil com embalagem segura para presente'
};
