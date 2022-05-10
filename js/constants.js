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
                        'Sou apaixonado por ajudar as pessoas e o que me move é o desafio, tanto na minha vida profissional como pessoal. Sou formado em Análise e Desenvolvimento de Sistemas e recentemente concluí um MBA em Gestão de TI, o que aprimorou ainda mais meus conhecimentos em ITIL e COBIT. Com mais de seis anos de experiência em desenvolvimento de software, adquiri excelentes conhecimentos em linguagens de programação PHP, Java e Javascript e banco de dados MySQL / MSSQL. Também pude desenvolver meus conhecimentos em modelagem de banco de dados e dados. Atualmente trabalho na área de TI da empresa brasileira “PROCERGS”.',
                        'Fiquei muito orgulhoso quando implantei com sucesso o GIT em meu último trabalho, então o fluxo de trabalho foi melhorado e o desenvolvimento dos sistemas da empresa ficou mais dinâmico. Incentivei a utilização do sistema pelos meus colegas de trabalho por meio da elaboração de manuais e palestras ministradas por mim. Também participei do processo de implantação do LARAVEL na equipe de desenvolvimento, passei o conhecimento do framework por workshops, documentações específicas feitas por mim.'
                    ]
                } 
            },
            education: {
                title: 'EDUCAÇÃO',
                items: [
                    {
                        year: '2021',
                        institution_name: 'alura',
                        course_name: 'JAVA E ORIENTAÇÃO A OBJETOS',
                        city: 'Online'
                    },
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
                            'Eventos SCRUM, Azure DevOps, Jenkins, Redmine',
                            'API REST',
                            'Laravel, Spring, Symfony',
                            'PHP5.4, PHP5.6, PHP7, JAVA, HTML, Javascript, ReactJS',
                            'Oracle, PostgreSQL, SQL SERVER',
                            'CENTOS7'
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
                        institution_name: 'RG Visual Code',
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
                        'I am passionate about help people and what moves me is the challenge, both in my professional and personal life. I have a Associates degree in Analysis and System Development and I recently achieved an MBA degree in IT Management, which further improved my knowledge in ITIL and COBIT. Through my more than six years of experience in software development, I acquired an excellent knowledge in PHP, Java and Javascript programming languages and MySQL/MSSQL database. I was also able to develop my knowledge in database and data modeling. I am currently working in the IT area of the Brazilian company “PROCERGS”. ',
                        'I was very proud when I successfully deployed the GIT at my last job, so the workflow was improved and the development of the company systems became more dynamic. I encouraged the use of the system by my co-workers through the development of manuals and lectures given by me. Also I participated of LARAVEL implantation proccess at develop team, I passed the framework knowledge by workshops, specifics documentations made by me.'
                    ]
                } 
            },
            education: {
                title: 'EDUCATION',
                items: [
                    {
                        year: '2021',
                        institution_name: 'alura',
                        course_name: 'JAVA AND OBJECTS ORIENTATION',
                        city: 'Online'
                    },
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
                            'SCRUM events, Azure DevOps, Jenkins, Redmine',
                            'API REST',
                            'Laravel, Spring, Symfony',
                            'PHP5.4, PHP5.6, PHP7, JAVA, HTML, Javascript, ReactJS',
                            'Oracle, PostgreSQL, SQL SERVER',
                            'CENTOS7'
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
                            'Database Management SQL SERVER e MYSQL.',
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
                        institution_name: 'RG Visual Code',
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