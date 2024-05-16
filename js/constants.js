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
            current_position: 'Engenheiro de software',
            cover_letter: {
                title: 'APRESENTAÇÃO',
                description: {
                    paragraphs: [
                        'Sou um engenheiro de software brasileiro com uma sólida experiência em desenvolvimento web e liderança técnica. Desde o início da minha carreira em 2013, adquiri expertise em uma variedade de tecnologias, incluindo Laravel, PHP, Java, JavaScript, Spring Framework e GIT. Além disso, possuo ampla experiência em diversos bancos de dados, como Microsoft SQL Server, PostgreSQL, MySQL e Oracle Database. Minha experiência se estende também para o desenvolvimento de aplicativos Android e frameworks front-end, como Vue.js, React e Angular.',
                        'Atualmente, ocupo o cargo de tech lead em uma empresa brasileira que desenvolve softwares para o governo. Nesta posição, faço parte de uma equipe na entrega de projetos utilizando tecnologias como Java, Spring e Oracle Database, adotando metodologias ágeis, como Scrum, para garantir entregas eficientes e de alta qualidade.',
                        'Estou entusiasmado com a oportunidade de me envolver em projetos globais e vivenciar uma experiência multicultural. Acredito que minha experiência técnica e habilidades de liderança me posicionam de forma única para contribuir significativamente para o sucesso de qualquer equipe.'
                    ]
                } 
            },
            education: {
                title: 'EDUCAÇÃO',
                items: [
                    {
                        year: 'Em andamento',
                        institution_name: 'USP Esalq',
                        course_name: 'MBA em Engenharia de Software',
                        city: 'Online'
                    },
                    {
                        year: 'Em andamento',
                        institution_name: 'CCAA (Nível 5)',
                        course_name: 'Inglês para adultos',
                        city: 'Guaporé/RS'
                    },
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
                        city: 'Passo Fundo/RS'
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
                        city: 'Passo Fundo/RS'
                    }

                ]
            },
            career: {
                title: "CARREIRA",
                items:[
                    {
                        institution_name: 'PROCERGS',
                        local: 'Porto Alegre, RS',
                        position_name: 'Engenheiro de Software',
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
            current_position: 'Software Engineer',
            cover_letter: {
                title: 'COVER LETTER',
                description: {
                    paragraphs: [
                        'I am a Brazilian software engineer with a strong background in web development and technical leadership. Since the inception of my career in 2013, I have gained expertise across a range of technologies including Laravel, PHP, Java, JavaScript, Spring Framework, and GIT. Additionally, I have extensive experience with various databases such as Microsoft SQL Server, PostgreSQL, MySQL, and Oracle Database. My skill set extends to Android app development and front-end frameworks including Vue.js, React, and Angular.',
                        'Currently, I hold the position of tech lead at a Brazilian company specializing in software development for governmental entities. In this role, I lead a team in delivering projects using technologies such as Java, Spring, and Oracle Database, employing agile methodologies such as Scrum to ensure efficient and high-quality deliveries.',
                        'I am excited about the opportunity to engage in global projects and experience a multicultural environment. I believe my technical expertise and leadership skills uniquely position me to make significant contributions to any team success.'
                    ]
                } 
            },
            education: {
                title: 'EDUCATION',
                items: [
                    {
                        year: 'In Progress',
                        institution_name: 'USP Esalq',
                        course_name: 'MBA - Software Engineering',
                        city: 'Online'
                    },
                    {
                        year: 'In Progress',
                        institution_name: 'CCAA',
                        course_name: 'English (Level 5)',
                        city: 'Guaporé/RS'
                    },
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
                        position_name: 'Software Engineer',
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
