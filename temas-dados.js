const TEMAS = {
    'saude-mental': {
        titulo: 'Saúde Mental',
        filmes: [
            { titulo: 'Divertida Mente', descricao: 'Síntese: Com a mudança para uma nova cidade, as emoções de Riley, que tem apenas 11 anos de idade, ficam extremamente agitadas. Uma confusão na sala de controle de seu cérebro deixa a Alegria e a Tristeza de fora, afetando a vida de Riley radicalmente..' }
        ],
        noticias: [
            { titulo: 'Como a arte pode ajudar a melhorar a saúde mental?', descricao: 'Estudos da OMS indicam que ouvir música, dançar, ir ao teatro ou a um museu pode trazer benefícios duradouros à saúde emocional, além de gerar impactos positivos na autoestima.', link: 'https://www.nationalgeographicbrasil.com/ciencia/2023/06/como-a-arte-pode-ajudar-a-melhorar-a-saude-mental' },
            { titulo: 'Crise de saúde mental: Brasil tem maior número de afastamentos por ansiedade e depressão em 10 anos', descricao: 'Dados de 2024 mostram que o país registrou mais de 470 mil afastamentos do trabalho por transtornos mentais. Trata-se do maior número desde 2014.', link: 'https://g1.globo.com/trabalho-e-carreira/noticia/2025/03/10/crise-de-saude-mental-brasil-tem-maior-numero-de-afastamentos-por-ansiedade-e-depressao-em-10-anos.ghtml' },
            { titulo: 'Alimentação não inflamatória e atividade física protegem saúde mental feminina', descricao: 'Pesquisador faz a ressalva de que é preciso fugir de “simplismos nutricionais”, e que o objetivo não é generalizar nem estigmatizar alimentos', link: 'https://jornal.usp.br/ciencias/alimentacao-nao-inflamatoria-e-atividade-fisica-protegem-saude-mental-feminina/' }
        ],
        leis: [
            { titulo: 'Lei nº 14819', descricao: 'Promover a saúde mental de estudantes, professores e demais integrantes da comunidade escolar.', link: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14819.htm' }
        ]
    },
    'inteligencia-artificial' : {
        titulo: 'Inteligência Artificial',
        noticias: [
            {titulo: 'Não é inteligência e não é artificial', descricao: 'Colunista avalia a inteligência artificial, alertando sobre o risco de concentrar tanto poder nas mãos de algumas poucas empresas', link: 'https://jornal.usp.br/radio-usp/nao-e-inteligencia-e-nao-e-artificial/'}
        ]
    },
    'segurança-alimentar': {
        titulo: 'Segurança Alimentar/Alimentação',
        noticias: [
            { titulo: 'Falta biodiversidade na dieta de 99% dos brasileiros', descricao: 'Mapeamento mostra que somente 1 em cada 100 brasileiros consome os chamados alimentos biodiversos, que incluem vegetais regionais, carnes de caça e cogumelos', link: 'https://jornal.usp.br/ciencias/falta-biodiversidade-na-dieta-de-99-dos-brasileiros/' },
            { titulo: 'Estudo destaca importância do programa de alimentação escolar para comércio familiar', descricao: 'Participação de pequenas empresas entre abastecedores do Programa Nacional de Alimentação Escolar contribui para a economia local e a manutenção da segurança alimentar de estudantes', link: 'https://jornal.usp.br/ciencias/estudo-destaca-importancia-do-programa-de-alimentacao-escolar-para-comercio-familiar/'},
            { titulo: 'Podcast “Comida que Sustenta” reflete sobre a insegurança alimentar na atualidade ', descricao: 'Novo episódio já está no ar e revela que o País entrou em situação alarmante e precisa de ações urgentes de combate à fome', link: 'https://jornal.usp.br/universidade/podcast-comida-que-sustenta-reflete-sobre-inseguranca-alimentar-na-atualidade/'}
        ]
    },
    'mundo-digital': {
        titulo: 'Mundo Digital/Inteligência Artificial',
        noticias: [
            {titulo: 'Não é inteligência e não é artificial', descricao: 'Colunista avalia a inteligência artificial, alertando sobre o risco de concentrar tanto poder nas mãos de algumas poucas empresas', link: 'https://jornal.usp.br/radio-usp/nao-e-inteligencia-e-nao-e-artificial/'}
        ]
    },
    'redes-sociais' : {
        titulo: 'Impactos Dos Usos De Redes Sociais',
        noticias: [
            {titulo: 'Diversas matérias sobre redes sociais', descricao:'',link: 'https://jornal.usp.br/tag/redes-sociais/'}
        ]
    },
    'consumo-excessivo' : {
        titulo: 'Consumismo',
        noticias: [
            { titulo: 'Notícias sobre consumismo',descricao:'', link: 'https://jornal.usp.br/tag/consumismo/'}
            
        ]   
    },
    'questões-climáticas' : {
        titulo: 'Questões Climáticas/Ambientais',
        noticias: [
            {titulo: 'Aumentam alternativas de transportes sustentáveis, mas poucas são acessíveis', descricao: 'Para Lucas Melo, apesar da inovação tecnológica, a melhor alternativa de sustentabilidade ainda são os transportes públicos elétricos', link: 'https://jornal.usp.br/atualidades/aumentam-alternativas-de-transportes-sustentaveis-mas-poucas-sao-acessiveis/'}
        ],
        videos: [
            {titulo: 'Incêndios transformam rios voadores em rios de fumaça, afirma professor Carlos Joly', link: 'https://www.youtube.com/watch?v=wPkrAcq3hBo'}
        ]
    },
    'envelhecimento-populacional' : {
        titulo: 'Envelhecimento Populacional',
        noticias: [
            {titulo: 'Crescimento da população idosa traz desafios para a garantia de direitos', descricao: 'Série de reportagens integra a campanha “Envelhecer é o nosso futuro” e destaca o preparo da sociedade diante do aumento da expectativa de vida', link: 'https://www.gov.br/mdh/pt-br/assuntos/noticias/2023/outubro/crescimento-da-populacao-idosa-traz-desafios-para-a-garantia-de-direitos'},
            {titulo: 'Diversas matérias sobre envelhecimento populacional' , link: 'https://jornal.usp.br/tag/envelhecimento-populacional/'}
        ]
    },
    'questões-de-gênero' : {
       noticias: [
            { titulo: 'Pobreza do tempo: políticas públicas ignoram trabalho não remunerado realizado em casa', descricao: 'Segundo Letícia Graça, a falta de acesso a dados de atividades de serviço domésticos de cuidar de idosos ou crianças intensifica a invisibilidade das pessoas e incapacidade de formulação de novas políticas', link: 'https://jornal.usp.br/radio-usp/pobreza-do-tempo-politicas-publicas-ignoram-trabalho-nao-remunerado-realizado-em-casa/'}
        ], 
       vídeos: [
           {titulo: 'Café Filosófico | Economia dos afetos e o fetiche neoliberal do desejo', link: 'https://www.youtube.com/watch?v=wojNMewE5QE'}
       ]
    }
};


