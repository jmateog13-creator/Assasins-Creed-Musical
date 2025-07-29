// Dades de les èpoques per als popups
const eraData = {
    0: {
        title: "EDAT MITJANA (s. IX – XV)",
        location: "Monestir Benedictí, Europa Central",
        year: "1180 D.C.",
        context: "L'Animus ha detectat memòries genètiques d'un avantpassat Assassí infiltrat en un monestir benedictí durant l'apogeu del cant gregorià. Aquesta època està dominada per la música religiosa, on el ritme segueix la prosòdia del text sagrat sense pulsació regular.",
        objectives: [
            "Infiltrar-se al monestir sense ser detectat pels Templars",
            "Aprendre els secrets del cant gregorià",
            "Recuperar el Fragment del Ritme Lliure Gregorià"
        ],
        threats: "Presència Templar confirmada. Cavallers de l'Orde del Temple patrullen el complex monàstic.",
        musicInfo: "El cant gregorià flueix lliurement seguint el text, sense compàs fix. És música monofònica sagrada que marca l'espiritualitat medieval."
    },
    1: {
        title: "RENAIXEMENT (s. XV – XVI)",
        location: "Palau Medici, Florència",
        year: "1520 D.C.",
        context: "Sincronització amb memòries d'una festa del mecenes Lorenzo de' Medici. El Renaixement porta equilibri i elegància al ritme musical amb els madrigals, però la presència de Cesare Borgia ha corromput alguns Assassins.",
        objectives: [
            "Mantenir la cobertura durant la festa noble",
            "Comprendre l'equilibri rítmic renaixentista",
            "Derrotar l'assassí renegat i recuperar el Fragment Madrigal"
        ],
        threats: "Assassí renegat treballant per Borgia. Perillós i expert en combat amb dagues hidden.",
        musicInfo: "Els madrigals combinen perfectament text i música, alternant compassos binaris i ternaris amb elegància matemàtica."
    },
    2: {
        title: "BARROC (s. XVII – inicis XVIII)",
        location: "Palau de Versalles, França",
        year: "1685 D.C.",
        context: "Infiltració en un ball reial de Lluís XIV. La música barroca de Lully estableix l'ordre i la regularitat del compàs, mentre un espia Templar de rang superior protegeix els secrets musicals de la cort.",
        objectives: [
            "Navegar pels protocols de la cort reial",
            "Dominar els conceptes del baix continu barroc",
            "Superar l'espia Templar i obtenir el Fragment Suite Barroca"
        ],
        threats: "Espia Templar de rang superior amb accés a la seguretat reial. Expert en esgrima cortesana.",
        musicInfo: "El Barroc introdueix el compàs regular i el baix continu com a base estructural. Danses cortesanes i fugues marquen l'època."
    },
    3: {
        title: "CLASSICISME (s. XVIII)",
        location: "Sala de Concerts, Viena",
        year: "1784 D.C.",
        context: "Concert íntim de Wolfgang Amadeus Mozart mentre investigues una conspiració Templar a la cort imperial austríaca. El Classicisme perfecciona la simetria i claredat rítmica.",
        objectives: [
            "Mantenir l'elegància aristocràtica vienesa",
            "Comprendre la perfecció simètrica de Mozart",
            "Convèncer el noble-Templar i recuperar el Fragment Simetria Clàssica"
        ],
        threats: "Noble austríac amb connexions Templars. Influent a la cort imperial i sospitós de forastres.",
        musicInfo: "Mozart i Haydn perfeccionen frases simètriques de 4 o 8 compassos. Claredat, equilibri i elegància defineixen l'època."
    },
    4: {
        title: "ROMANTICISME (s. XIX)",
        location: "Saló Parisenc, França",
        year: "1847 D.C.",
        context: "Saló íntim on Frédéric Chopin interpreta obres de passió romàntica. El Romanticisme allibera el ritme per expressar emocions, però un assassí renegat amenaça la pau musical.",
        objectives: [
            "Protegir l'ambient artístic del saló",
            "Entendre la llibertat expressiva del rubato",
            "Pacificar l'assassí renegat i obtenir el Fragment Rubato"
        ],
        threats: "Assassí renegat emocionalment inestable. Perillós però sensible a la bellesa musical.",
        musicInfo: "El rubato permet flexibilitat temporal per transmetre emocions. Accelerando, ritardando i contrastos dramàtics defineixen l'expressivitat romàntica."
    },
    5: {
        title: "AVANTGUARDA (1900–1970)",
        location: "Théâtre des Champs-Élysées, París",
        year: "29 Maig 1913",
        context: "Estrena escandalosa de 'La Consagració de la Primavera' de Stravinsky. L'avantguarda trenca totes les normes musicals mentre un Gran Mestre Templar aprofita el caos per sembrar discòrdia.",
        objectives: [
            "Sobreviure al caos de l'estrena",
            "Comprendre la revolució rítmica de Stravinsky",
            "Derrotar el Gran Mestre Templar i capturar el Fragment Stravinsky"
        ],
        threats: "Gran Mestre Templar aprofitant el tumulte social. Expert en manipulació de masses.",
        musicInfo: "Stravinsky introdueix polirítmia, canvis de compàs constants i influències multiculturals. Destrucció creativa de les normes tradicionals."
    },
    6: {
        title: "ERA ELECTRÒNICA (1970–2010)",
        location: "Club Underground, South Bronx",
        year: "1979 D.C.",
        context: "Naixement del hip-hop amb DJ Kool Herc. Les màquines de ritme revolucionen la música, però Abstergo Industries veu una oportunitat de control mental a través dels beats electrònics.",
        objectives: [
            "Protegir la cultura hip-hop nascent",
            "Dominar la tecnologia de màquines de ritme",
            "Sabotejar Abstergo i alliberar el Fragment Hip-Hop"
        ],
        threats: "Agent d'Abstergo Industries amb tecnologia avançada. Representa els Templars corporatius moderns.",
        musicInfo: "Màquines de ritme, loops i beats repetitius defineixen una nova era. El hip-hop democratitza la creació musical urbana."
    },
    7: {
        title: "ERA DIGITAL GLOBAL (2010–Avui)",
        location: "Megacitat Globalitzada",
        year: "Present",
        context: "Confrontació final amb el Gran Mestre Suprem dels Templars. Els beats virals de reggaeton, dembow i trap controlen bilions de ments a través de les xarxes socials globals.",
        objectives: [
            "Enfrontar-se al líder suprem dels Templars",
            "Comprendre el poder dels ritmes virals",
            "Alliberar la humanitat i obtenir el Fragment Digital final"
        ],
        threats: "Gran Mestre Suprem amb tecnologia futurista. Boss final amb capacitats de manipulació global.",
        musicInfo: "Ritmes simples però addictius dominen les xarxes socials. Reggaeton, dembow i trap es tornen fenòmens virals globals."
    }
};

// Dades principals del joc
const gameData = {
    currentChapter: 0,
    lives: 3,
    fragments: [],
    chapters: [
        {
            title: "MEMÒRIA GENÈTICA 001: Edat Mitjana (s. IX – XV)",
            intro: "ANIMUS 4.3 ha detectat memòries genètiques d'un avantpassat Assassí infiltrat en un monestir benedictí l'any 1180. Objectiu: recuperar informació sobre els ritmes musicals medievals. ADVERTÈNCIA: presència Templar confirmada al complex monàstic.",
            question: "DESAFIAMENT TEMPLAR DETECTAT - Un Cavaller Templar sospita de la vostra identitat: 'Intrús! Si realment pertanyeu a aquesta comunitat religiosa, expliqueu-me què caracteritza el ritme del cant sagrat!'",
            options: [
                "Segueix un compàs matemàtic estricte com la música profana dels trovadors",
                "Flueix lliurement seguint la prosòdia del text sagrat sense pulsació regular",
                "Sempre utilitza només compassos binaris regulars per facilitar l'aprenentatge",
                "Es basa en ritmes pagans d'origen àrab introduïts per les croades"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "SINCRONITZACIÓ EXITOSA - El Templar baixa la guàrdia: 'Veig que coneixeu els misteris sagrats del cant gregorià...' Passeu desapercebut. L'Animus ha registrat el Fragment 001 a la base de dades.",
                incorrect: "ALERTA MÀXIMA - El Cavaller Templar crida a la guàrdia: 'INTRÚS DETECTAT AL MONESTIR!' Error de sincronització. El cant gregorià segueix la prosòdia del text, no un compàs matemàtic fix."
            },
            fragment: "FRAGMENT 001: Ritme Lliure Gregorià",
            rhythmGame: {
                question: "VALIDACIÓ ADDICIONAL REQUERIDA - Un monjo ancià s'acosta amb sospita: 'Germà, com es diferencia el nostre cant sagrat dels ritmes mundans que sentim al mercat?'",
                options: [
                    "El cant gregorià té una pulsació molt marcada i regular com els tambors militars",
                    "El cant gregorià flueix com una oració parlada, seguint les paraules sagrades sense pressa temporal",
                    "El cant gregorià només utilitza instruments per marcar el ritme i guiar els cantors",
                    "El cant gregorià és sempre ràpid i alegre per demostrar la joia espiritual"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 002: Renaixement (s. XV – XVI)",
            intro: "UBICACIÓ: Florència, 1520. L'Animus detecta memòries d'infiltració en una festa del mecenes Lorenzo de' Medici. Els músics interpreten madrigals sofisticats quan el sistema identifica un ASSASSÍ RENEGAT treballant per Cesare Borgia: 'Germà traïdor! Borgia m'ha promès or suficient per a mil vides a canvi dels fragments del ritme!'",
            question: "COMBAT INICIAT - Mentre les vostres fulles hidden s'entrecreuen en duel mortal, l'assassí renegat us desafia: 'Si realment coneixes els secrets del Renaixement, digues-me què fa especial el seu ritme musical!'",
            options: [
                "Utilitza ritmes extremadament ràpids i violents per reflectir les guerres constants",
                "Cerca l'equilibri perfecte alternant compassos binaris i ternaris amb elegància matemàtica",
                "Abandona completament qualsevol estructura musical per abraçar el caos creatiu",
                "Només permet compassos ternaris per imitar simbòlicament la Santíssima Trinidad"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "VICTÒRIA CONFIRMADA - L'assassí renegat para el seu atac fatal: 'Per la barba d'Ezio Auditore... realment enteneu l'art renaixentista!' Es retira amb respecte professional. Fragment 002 adquirit.",
                incorrect: "PERILL CRÍTIC - L'assassí renegat riu amb malícia: 'Ignorant del Credo! El Renaixement cerca l'harmonia divina, no el caos destructiu!' Les seves dagues hidden brillen mortals a la llum dels canelobres."
            },
            fragment: "FRAGMENT 002: Equilibri Madrigal",
            rhythmGame: {
                question: "INTERROGATORI FINAL - Abans de desaparèixer entre la multitud de nobles, l'assassí derrotat murmura: 'Última prova, germà... explica'm com es relacionen ritme i text en un madrigal renaixentista...'",
                options: [
                    "El ritme ignora completament el significat emocional de les paraules cantades",
                    "El ritme segueix perfectament l'expressió, l'emoció i el significat poètic del text",
                    "Les paraules sempre van més ràpides que la música per crear tensió dramàtica",
                    "No existeix cap mena de relació conscient entre el ritme musical i el text poètic"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 003: Barroc (s. XVII – inicis XVIII)",
            intro: "SINCRONITZACIÓ: Palau de Versalles, 1685. Esteu infiltrat en un ball reial de la cort del Rei Sol Lluís XIV. La música barroca de Jean-Baptiste Lully ressona majestuosa pels salons daurats mentre perseguiu un ESPIA TEMPLAR de rang superior pels opulents passadissos. L'objectiu gira en combat: 'Alto, Assassí de l'ombra! Demostraré que els Templars som els veritables mestres de l'ordre musical!'",
            question: "DUEL EN CURS - L'espia Templar llueix amb espasa mentre la música de danses cortesanes continua: 'Digues-me, servent del caos, què aporta de nou aquesta gloriosa era barroca al ritme musical!'",
            options: [
                "Introdueix ritmes completament caòtics i aleatoris per trencar les normes antigues",
                "Estableix el compàs regular matemàtic i el baix continu com a base estructural absoluta",
                "Elimina totalment qualsevol noció de compàs per alliberar la música",
                "Prohibeix l'ús d'instruments, mantenint només les veus humanes pures"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "MISSIÓ REEIXIDA - L'espia Templar baixa la seva espasa reial amb elegància: 'Per Bach i Vivaldi! Veig que enteneu la geometria musical perfecta...' Fugiu pels jardins mentre ressonava una suite de danses. Fragment 003 capturat.",
                incorrect: "ALERTA VERMELLA - L'espia Templar ataca amb fúria aristocràtica: 'Neòfit ignorant! El Barroc domina l'ordre matemàtic i la regularitat absoluta del compàs!' La seva espasa canta mortalment a l'aire perfumat."
            },
            fragment: "FRAGMENT 003: Estructura Barroca",
            rhythmGame: {
                question: "FUGIDA PELS JARDINS - Mentre escapeu pels laberints de Versalles, una veu elegant ressona des de les ombres topiàries: 'Assassí del ritme, expliqueu-me com funciona aquest baix continu que tant estimem en aquesta època daurada!'",
                options: [
                    "És una melodia ornamental decorativa que apareix esporàdicament per embellir",
                    "És una base rítmica i harmònica constant que sustenta arquitectònicament tota l'obra musical",
                    "És exclusivament per a instruments de vent metall per crear pompa reial",
                    "És un simple decorat opcional sense importància estructural real"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 004: Classicisme (s. XVIII)",
            intro: "COORDENADES: Viena, 1784. L'Animus us trasllada a un concert íntim de Wolfgang Amadeus Mozart mentre investigeu una conspiració Templar a la cort imperial. Un NOBLE AUSTRÍAC amb mirada gelada s'acosta amb sospita: 'Cavaller misteriós, he sentit rumors que busqueu els antics secrets del ritme musical. Però primer heu de demostrar que enteneu la perfecció clàssica que Mozart representa!'",
            question: "INSPECCIÓ ARISTOCRÀTICA - El noble-Templar us examina amb els seus ulls blaus glacials mentre Mozart toca: 'Com es caracteritza el ritme en aquest període de perfecció geomètrica absoluta?'",
            options: [
                "Frases totalment irregulars i asimètriques sense cap mena de lògica compositiva",
                "Frases simètriques de 4 o 8 compassos, clares i transparents com el cristall vienès",
                "Ritmes completament lliures sense cap mena d'estructura matemàtica",
                "Exclusivament compassos ternaris per imitar les danses de vals cortesanes"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "RECONEIXEMENT IMPERIAL - El noble-Templar somriu amb respecte aristocràtic: 'Magnífico! Aprecieu la geometria perfecta de Mozart i Haydn com un veritable connoisseur...' Es retira sense violència. L'harmonia clàssica us ha salvat. Fragment 004 obtingut.",
                incorrect: "HUMILIACIÓ CORTESANA - El noble-Templar es burla amb desdeny imperial: 'Clarament no compreneu l'ordre diví i la simetria que defineix aquesta era de llums!' Els seus guàrdies imperials s'acosten amb alabardes."
            },
            fragment: "FRAGMENT 004: Simetria Clàssica",
            rhythmGame: {
                question: "ABANS DEL CLÍMAX MUSICAL - Abans que el concert de Mozart arribi al seu moviment final, algú us xiuxiueja subtilment a l'orella: 'Per què les frases musicals de Mozart són tan fàcils de memoritzar i tan perfectament equilibrades?'",
                options: [
                    "Perquè són completament impredictibles i constantment sorprenents per l'oient",
                    "Perquè segueixen patrons matemàtics simètrics i equilibrats basats en la proporció àuria",
                    "Perquè no tenen cap mena d'estructura organitzada ni lògica compositiva",
                    "Perquè sempre són extremadament llargues i complicades per desafiar la memòria"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 005: Romanticisme (s. XIX)",
            intro: "LOCALITZACIÓ: Saló parisenc, 1847. Sincronització amb memòries d'un Assassí en un saló íntim on Frédéric Chopin interpreta al piano obres d'una passió romàntica inigualable. ALERTA CRÍTICA: un ASSASSÍ RENEGAT irromp violentament trencant la màgia del moment: 'Prou de jocs sentimentals burgesos! Lliura'm els fragments del ritme o aquesta serà la teva última melankolia nocturna!'",
            question: "DUEL ENTRE MELODIES - Durant el combat mortal entre les notes emotives del piano Pleyel, l'assassí renegat crida amb passió criminal: 'Si realment entens l'ànima del Romanticisme, digues-me què caracteritza el seu ritme revolucionari!'",
            options: [
                "Rigidesa absoluta del tempo sense permetre cap mena de flexibilitat expressiva",
                "Expressivitat i llibertat emocional total: rubato, accelerando, ritardando com a eines d'emoció",
                "Només permet compassos binaris simples per facilitar la simplicitat melòdica",
                "Repetició mecànica i freda sense cap tipus de variació o contrast dinàmic"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "RENDICIÓ EMOCIONAL - L'assassí renegat para en sec, les dagues tremolant: 'El rubato... sí, l'emoció que flueix com les llàgrimes sobre les tecles...' Baixa les armes, profundament tocat per la bellesa musical. Chopin assenteix des del piano. Fragment 005 conquistat!",
                incorrect: "ATAC APASSIONAT - L'assassí renegat ataca amb fúria romàntica desbordant: 'No entens l'ànima que crema en cada nota expressiva! El ritme romàntic és llibertat emocional pura!' Les seves dagues brillen sota la llum daurada de les espelmes."
            },
            fragment: "FRAGMENT 005: Llibertat Rubato",
            rhythmGame: {
                question: "RECONCILIACIÓ MUSICAL - L'assassí, ara aliat i profundament tocat per l'emoció musical, us pregunta amb curiositat sincera mentre Chopin continua: 'Germà de l'ombra, què és exactament aquest rubato màgic que fa plorar al piano?'",
                options: [
                    "Tocar sempre exactament a tempo sense permetre cap desviació rítmica",
                    "Flexibilitat expressiva del tempo per transmetre emocions profundes i sentiments íntims",
                    "Tocar exclusivament notes llargues i lentes per crear monotonia hipnòtica",
                    "Eliminar completament qualsevol noció de ritme o pulsació musical"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 006: Avantguarda (1900–1970)",
            intro: "SITUACIÓ CRÍTICA: Théâtre des Champs-Élysées, París, 29 maig 1913. L'Animus us sincronitza durant l'estrena escandalosa de 'La Consagració de la Primavera' d'Igor Stravinsky. El públic protesta violentament, cadires volen per l'aire creant un caos total, quan apareix un GRAN MESTRE TEMPLAR: 'Aquest caos musical diabòlic és perfecte per sembrar discòrdia social! Aquest Stravinsky és el nostre aliat involuntari en la destrucció de l'ordre!'",
            question: "BATALLA APOCALÍPTICA - Mentre es desenvolupa un duel èpic entre la multitud enfurismada i la música primitivament salvatge, el Gran Mestre us grita per sobre del tumult: 'Què aporta aquesta avantguarda diabòlica i destructiva al ritme musical tradicional?'",
            options: [
                "Un simple retorn nostàlgic i conservador als ritmes medievals del passat",
                "Polirítmia revolucionària, canvis de compàs constants i influències salvatges de tots els continents",
                "L'eliminació total i definitiva del ritme musical per abraçar el silenci absolut",
                "Només compassos de 4/4 tradicionals per simplificar radicalment la música"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "DERROTA TEMPLAR - El Gran Mestre s'atura completament impressionat enmig del caos absolut: 'Per tots els diables de l'infern! Stravinsky... sí, has entès que ha trencat per sempre totes les cadenes musicals tradicionals!' Desapareix entre la multitud que crida histèricament. Fragment 006 capturat en plena revolució!",
                incorrect: "FÚRIA DESTRUCTIVA - El Gran Mestre Templar riu malèficament mentre esquiva una cadira voladora: 'Ignorant del progrés! No entens que aquesta revolució musical ha destruït mil anys de tradició harmònica!' La seva espasa reflecteix caòticament les llums del teatre en flames."
            },
            fragment: "FRAGMENT 006: Revolució Stravinsky",
            rhythmGame: {
                question: "VOZ MISTERIOSA - Entre el caos absolut del teatre amb el públic completament amotinat, una veu mística ressona des de les ombres teatrals: 'Assassí del ritme, com aconsegueix Stravinsky aquests efectes tan brutalment salvatges i primitivament poderosos?'",
                options: [
                    "Usant exclusivament instruments tradicionals europeus del segle XVIII",
                    "Combinant violentament diferents compassos i ritmes simultàniament com tribus primitives en guerra total",
                    "Tocant sempre amb dinàmica pianissimo per crear subtilesa extrema",
                    "Repetint obsessivament la mateixa melodia romàntica sentimental"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 007: Era Electrònica (1970–2010)",
            intro: "COORDENADES: South Bronx, Nova York, 1979. L'Animus us trasllada a un club underground on neix el hip-hop revolucionari. DJ Kool Herc manipula magistralment els plats quan apareix un AGENT D'ABSTERGO INDUSTRIES (Templars corporatius moderns): 'Els beats repetitius que escolten aquests joves són l'arma de control mental perfecta per al segle XXI! Aquesta música urbana hipnotitzarà les masses globalment!'",
            question: "COMBAT TECNOLÒGIC - Mentre lluiteu contra la tecnologia Templar d'última generació, l'agent d'Abstergo us pregunta amb arrogància corporativa gelada: 'Assassí obsolet del passat, què ha revolucionat completament el ritme musical entre 1970 i 2010?'",
            options: [
                "Un nostàlgic retorn conservador a la música medieval i religiosa del passat",
                "Màquines de ritme electròniques, loops digitals infinits i el poder hipnòtic dels beats de funk i hip-hop",
                "L'eliminació completa i definitiva dels instruments de percussió tradicionals",
                "Exclusivament música clàssica tocada per orquestres simfòniques europees"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "SABOTATGE REEIXIT - Heu sabotejat el dispositiu d'Abstergo amb habilitat assassina! L'agent fuig entre espurnes elèctriques: 'Compreneu el poder dels beats electrònics... Abstergo Industries recordarà aquesta humiliació!' Els DJs us saluden com un heroi del hip-hop. Fragment 007 alliberat!",
                incorrect: "SUPERIORITAT TECNOLÒGICA - L'agent d'Abstergo riu amb superioritat corporativa freda: 'No compreneu el poder absolut de la revolució electrònica que controlem!' El dispositiu s'intensifica perillósament amb llums blaves cegadores."
            },
            fragment: "FRAGMENT 007: Revolució Hip-Hop",
            rhythmGame: {
                question: "PREGUNTA DELS CARRERS - Un DJ local amb cadenes d'or us pregunta mentre mixa expertament: 'Yo hermano del ritme, què fa tan addictivament poderoses aquestes màquines de ritme que acabem d'inventar al gueto?'",
                options: [
                    "Només reprodueixen melodies clàssiques sense cap tipus d'innovació musical",
                    "Permeten crear beats repetitius i hipnòticament addictius que defineixen una generació sencera",
                    "Són exactament iguals que els instruments acústics tradicionals del passat",
                    "No tenen cap mena d'impacte real o significatiu en la cultura musical global"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 008: Era Digital Global (2010–Avui)",
            intro: "ALERTA MÀXIMA: Megacitat globalitzada, present. L'Animus arriba al clímax final absolut de la missió temporal. Heu recorregut mil anys de música quan apareix el GRAN MESTRE SUPREM DELS TEMPLARS amb tecnologia futurista: 'Assassí llegendari del Ritme! Heu viatjat per mil·lennis de música, però ara us enfronteu a l'arma definitiva: el beat viral que controla BILIONS de ments simultàniament a través de les xarxes socials globals!'",
            question: "CONFRONTACIÓ FINAL - El Gran Mestre Suprem, mentre lluita amb tecnologia d'un futur proper, us desafia per última vegada en tota la història musical: 'Què caracteritza els ritmes que dominen aquesta era digital globalitzada (2010-avui)?'",
            options: [
                "Complexitat rítmica extrema que requereix estudis musicals universitaris avançats",
                "Ritmes simples però hipnòticament addictius: reggaeton, dembow, trap que es tornen virals globalment",
                "Un retorn complet i nostàlgic als patrons barrocs del segle XVII",
                "Música exclusivament instrumental sense cap mena de veus humanes"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "VICTÒRIA DEFINITIVA - Heu derrotat per sempre el Gran Mestre Suprem! 'IMPOSSIBLE... coneixeu el poder addictiu del dembow viral...' cau derrotat per l'eternitat. La humanitat sencera és finalment lliure del control rítmic Templar. Milions de persones poden escoltar música lliurement! Heu conquistat l'últim Fragment 008!",
                incorrect: "ATAC APOCALÍPTIC - El Gran Mestre Suprem ataca amb fúria digital: 'Els nostres beats virals simples són més poderosos que mil exèrcits tradicionals! Aquesta és la nostra dominació final absoluta!' Projectors hologràfics il·luminen la batalla final."
            },
            fragment: "FRAGMENT 008: Dominació Digital",
            rhythmGame: {
                question: "VOZ ANCESTRAL - Amb el Gran Mestre Suprem derrotat per sempre, una veu ancestral de tots els músics de la història humana us pregunta: 'Hereu etern del ritme, per què aquests beats digitals aparentment simples són tan tremendament poderosos en l'era moderna globalitzada?'",
                options: [
                    "Perquè són extremadament complicats i difícils de comprendre musicalment",
                    "Perquè la seva simplicitat addictiva els fa memorables i virals a les xarxes socials globals",
                    "Perquè només els poden escoltar i entendre les generacions joves urbanes",
                    "Perquè no tenen absolutament cap mena d'estructura musical reconeixible"
                ],
                correctAnswer: 1
            }
        }
    ]
};