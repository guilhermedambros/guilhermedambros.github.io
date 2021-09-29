//(Math.abs(new Date(Date.now() - new Date("08/16/1991")).getUTCFullYear() - 1970))
const languages_options = [
    {
        value: 'ptbr',
        title: 'Português (BR)',
        icon: '',
    },
    {
        value: 'en',
        title: 'English (EUA)',
        icon: '',
    }
];
const languages = {
    ptbr: {
        icon : '',
        title : 'Português (BR)',
        resume : {
            current_position: 'Analista de Computação',
            cover_letter: {
                title: 'APRESENTAÇÃO',
                description: {
                    paragraphs: [
                        'Nascido no interior do estado do RS, na cidade de União da Serra. Iniciei minha graduação em 2009, na UPF. Movido pelo desafio, em 2012 estagiei no suporte em uma grande distribuidora de Passo Fundo por 7 meses. No ano seguinte, concluí a graduação e abri um CNPJ em sociedade com um colega da faculdade, até ser aprovado em um concurso na EMATER-RS. Uma empresa de grande porte que trabalha a nível estadual. Desde então, tive a oportunidade de trabalhar e crescer profissionalmente e pessoalmente.',
                        'Profissionalmente, me adapto aos diferentes cenários impostos e tenho grande capacidade de aprendizado e organização. Minhas principais habilidades técnicas estão concentradas em desenvolvimento web com PHP, LARAVEL, BOOTSTRAP, GIT, JAVASCRIPT, API REST, \'%SQL%\'. Além de desenvolvimento mobile em Android nativo. Também tive contato com flutter, ionic, Cake, Cypher, firebase, Joonla, Python, PWA, Docker, entre outros que provavelmente esqueci de mencionar. Tenho inglês intermediário, a falta da prática me fez perder um pouco a fluência mas posso dizer que me viro com tranquilidade.',
                        'Em 2021, passei a fazer parte do corpo de funcionários do Centro de Tecnologia da Informação e Comunicação do Estado do Rio Grande do Sul S.A (PROCERGS), o que tem me possibilitado contato com outras tecnologias e metodologias.', 
                        'Nesse momento, sigo buscando uma oportunidade de trabalho remoto, o qual me possibilite trabalhar com o que eu gosto de trabalhar, vivendo onde gosto de viver.'
                    ]
                } 
            },
            education: {
                title: 'EDUCAÇÃO',
                items: [
                    {
                        year: '2018',
                        institution_name: 'SCRUM study',
                        course_name: 'SCRUM FUNDAMENTALS CERTIFIED',
                        city: 'Online'
                    },
                    {
                        year: '2016',
                        institution_name: 'Universidade de Passo Fundo',
                        course_name: 'MBA em Gestão e Governança de TI',
                        city: 'Passo Fundo'
                    },
                    {
                        year: '2016',
                        institution_name: 'EF – Englishtown',
                        course_name: 'Intermediate English',
                        city: 'Online'
                    },
                    {
                        year: '2012',
                        institution_name: 'Universidade de Passo Fundo',
                        course_name: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
                        city: 'Passo Fundo'
                    }

                ]
            },
            career: {
                title: "CARREIRA",
                items:[
                    {
                        institution_name: 'PROCERGS',
                        local: 'Porto Alegre, RS',
                        position_name: 'Analista de computação',
                        between: 'Jun 2021 - Atual',
                        tasks: [
                            'Análise de requisitos.', 
                            'Análise e gerenciamento de demandas.',
                            'SCRUM events',
                            'API REST',
                            'PHP5.3, PHP5.6, PHP7, PGSQL, CENTOS7, HTML, Javascript, Symfony, Laravel, TFS, Redmine, ReactJS',
                        ]
                    },
                    {
                        institution_name: 'EMATER-RS/ASCAR',
                        local: 'Porto Alegre, RS',
                        position_name: 'Coordenador de núcleo de desenvolvimento de sistemas',
                        between: 'Jun 2019 - Jun 2021',
                        tasks: [
                            'Equipe de 10 colaboradores.',
                            'Mais de 50 sistemas (PHP, Java, VB, Flutter, Ionic, Senior.)',
                            'Gerenciamento de bancos de dados MSSQL e MYSQL.',
                            'Implantação de versionamento via GIT entre servidores de desenvolvimento, homologação e produção. Com GITLAB.',
                            'Implantação de desenvolvimento web com LARAVEL, NPM e NODEJS.',
                            'Migração de 30 sistemas PHP5.3 para PHP5.6 em uma nova estrutura de servidores Centos 7.',
                            'Implantação de uma nova extranet.',
                            'Participação no desenvolvimento de APP EMATER-RS Produtor, utilizando Flutter.',
                            'Participação no desenvolvimento dos sistemas, Gestão de serviços, Extranet, Urna Eletrônica, Informativo interno, Ipan Anual, projeto modelo, Ficha básica, utilizando LARAVEL.',
                            'Workshops internos.',
                            'Linguagens: PHP5.3, PHP5.6, PHP7, JAVA, AndroidX, Dart, HTML, Javascript.'
                        ]
                    },
                    {
                        institution_name: 'EMATER-RS/ASCAR',
                        local: 'Porto Alegre, RS',
                        position_name: 'Analista de sistemas',
                        between: 'Ago 2014 - Jun 2019',
                        tasks: [
                            'Responsável por aplicativo interno CONECTER e API REST de comunicação.',
                            'Responsável por sistema utilizado na classificação vegetal nos portos do RS e SC, SISCLAS.',
                            'Emissão, registro, remessa/retorno de boletos.',
                            'Responsável por sistema organizacional interno para solicitação de licenças/férias.',
                            'Responsável pelo sistema PBSM(Plano Brasil Sem Miséria)',
                            'Responsável pelo sistema PGS(Programa Gestão Sustentável)',
                            'Banco de dados MSSQL e SQLite.',
                            'Comuicação com API do Youtube.'
                        ]
                    },
                    {
                        institution_name: 'RG VIsual Code',
                        local: 'Guaporé, RS',
                        position_name: 'Sócio/Desenvolvedor',
                        between: 'Ago 2013 - Ago 2014',
                        tasks: [
                            'Desenvolvimento de aplicações web utilizando PHP, HTML, Javascript e PostgreSQL.',
                            'Questões burocráticas.'
                        ]
                    },
                    {
                        institution_name: 'ONIZ Distribuidora',
                        local: 'Passo Fundo, RS',
                        position_name: 'Estagiário - Suporte',
                        between: 'Jan 2012 – Jul 2012',
                        tasks: [
                            'Manutenção de computadores e Palms.',
                            'OS: Linux.',
                            'Comunicação direta com Claro, referente a linhas telefônicas da empresa.'
                        ]
                    },
                ]
            }
        },
    },
    en: {
        icon : '',
        title : 'English (EUA)',
        resume : {
            current_position: 'Computer Analyst',
            cover_letter: {
                title: 'COVER LETTER',
                description: {
                    paragraphs: [
                        'Dear,',
                        'I am a '+(Math.abs(new Date(Date.now() - new Date("08/16/1991")).getUTCFullYear() - 1970))+' year old Brazilian. Since 2014 I work with web development in large companies. During this period I had contact with several technologies and methodologies. This allowed me to grow professionally and personally.',
                        'Professionally, I adapt to different imposed scenarios and I have great learning and organization skills. My main technical skills are concentrated in web development with PHP, LARAVEL, BOOTSTRAP, GIT, JAVASCRIPT, REST API, \'%SQL%\'. In addition to mobile development on native Android. I also had contact with flutter, ionic, Cake, Cypher, firebase, Joonla, Python, PWA, Docker, among others that I probably forgot to mention. I have intermediate English, the lack of practice made me lose some fluency but I can communicate.',
                        'I\'m looking for a remote job opportunity that allows me to work with I like to work living where I like to live.'
                    ]
                } 
            },
            education: {
                title: 'EDUCATION',
                items: [
                    {
                        year: '2018',
                        institution_name: 'SCRUM study',
                        course_name: 'SCRUM FUNDAMENTALS CERTIFIED',
                        city: 'Online'
                    },
                    {
                        year: '2016',
                        institution_name: 'University of Passo Fundo',
                        course_name: 'MBA in IT Management and Governance',
                        city: 'Passo Fundo'
                    },
                    {
                        year: '2016',
                        institution_name: 'EF – Englishtown',
                        course_name: 'Intermediate English',
                        city: 'Online'
                    },
                    {
                        year: '2012',
                        institution_name: 'University of Passo Fundo',
                        course_name: 'Technology in Systems Analysis and Development',
                        city: 'Passo Fundo'
                    }

                ]
            },
            career: {
                title: "CAREER",
                items:[
                    {
                        institution_name: 'PROCERGS',
                        local: 'Porto Alegre, RS',
                        position_name: 'Computer Analyst',
                        between: 'Jun 2021 - Atual',
                        tasks: [
                            'Requirements Analysis.', 
                            'Demand analysis and management.',
                            'SCRUM events',
                            'API REST',
                            'PHP5.3, PHP5.6, PHP7, PGSQL, CENTOS7, HTML, Javascript, Symfony, Laravel, TFS, Redmine, ReactJS',
                        ]
                    },
                    {
                        institution_name: 'EMATER-RS/ASCAR',
                        local: 'Porto Alegre, RS',
                        position_name: 'Team Lead',
                        between: 'Jun 2019 - Jun 2021',
                        tasks: [
                            'Team of 10 employees.',
                            'More than 50 systems (PHP, Java, VB, Flutter, Ionic, Senior.)',
                            'Database Management MSSQL e MYSQL.',
                            'Implementation of versioning via GIT between development, stagging and production servers. With GITLAB.',
                            'Web development deployment with LARAVEL, NPM e NODEJS.',
                            'Migration of 30 PHP5.3 systems to PHP5.6 on a new Centos7 server structure.',
                            'Deployment of a new extranet.',
                            'Participation in the development of APP "EMATER-RS Produtor", using Flutter.',
                            'Participation in systems development, "Gestão de serviços", "Extranet", "Urna Eletrônica", "Informativo interno", "Ipan Anual", "Projeto modelo", "Ficha básica", with LARAVEL.',
                            'Internal workshops.',
                            'Languages: PHP5.3, PHP5.6, PHP7, JAVA, AndroidX, Dart, HTML, Javascript.'
                        ]
                    },
                    {
                        institution_name: 'EMATER-RS/ASCAR',
                        local: 'Porto Alegre, RS',
                        position_name: 'Systems Analyst',
                        between: 'Ago 2014 - Jun 2019',
                        tasks: [
                            'Responsible for internal application CONECTER and REST communication API.',
                            'Responsible for system used in plant classification in RS and SC ports, SISCLAS.',
                            'Issuance, registration, shipment/return of bills.',
                            'Responsible for internal organizational system for requesting licenses/vacations.',
                            'Responsible for the system "PBSM(Plano Brasil Sem Miséria)"',
                            'Responsible for the system "PGS(Programa Gestão Sustentável)"',
                            'Databases MSSQL e SQLite.',
                            'Integration with API do Youtube.'
                        ]
                    },
                    {
                        institution_name: 'RG VIsual Code',
                        local: 'Guaporé, RS',
                        position_name: 'Member/Web Developer',
                        between: 'Ago 2013 - Ago 2014',
                        tasks: [
                            'Development of web applications using PHP, HTML, Javascript and PostgreSQL.',
                            'Bureaucratic issues.'
                        ]
                    },
                    {
                        institution_name: 'ONIZ Distribuidora',
                        local: 'Passo Fundo, RS',
                        position_name: 'Intern - Support',
                        between: 'Jan 2012 – Jul 2012',
                        tasks: [
                            'Maintenance of computers and Palms.',
                            'OS: Linux.',
                            'Direct communication with Claro, regarding the company\'s telephone lines.'
                        ]
                    },
                ]
            }
        },
    },
};