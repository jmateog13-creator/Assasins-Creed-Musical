// Dades de les èpoques per als popups
const eraData = {
    0: {
        title: "EDAT MITJANA (s. IX – XV)",
        location: "Monestir Benedictí, Europa Central",
        year: "1180 D.C.",
        context: "L'Animus ha detectat memòries genètiques d'un avantpassat Assassí infiltrat en un monestir benedictí durant l'apogeu del cant gregorià. Aquesta època és dominada per la melodia monofònica, sense harmonia tal com l'entenem avui.",
        objectives: [
            "Infiltrar-se al monestir sense ser detectat pels Templars",
            "Comprendre l'origen de la música medieval monofònica",
            "Recuperar el Fragment de la Melodia Monofònica"
        ],
        threats: "Presència Templar confirmada. Cavallers de l'Orde del Temple patrullen el complex monàstic.",
        musicInfo: "Al principi no existia l'harmonia. Només hi havia melodia monofònica com el cant gregorià. Amb el temps apareixen les primeres formes d'harmonia: l'organum, que afegeix una segona veu en paral·lel."
    },
    1: {
        title: "RENAIXEMENT (s. XV – XVI)",
        location: "Palau Medici, Florència",
        year: "1520 D.C.",
        context: "Sincronització amb memòries d'una festa del mecenes Lorenzo de' Medici. El Renaixement porta el gran desenvolupament de la polifonia vocal, però la presència de Cesare Borgia ha corromput alguns Assassins.",
        objectives: [
            "Mantenir la cobertura durant la festa noble",
            "Comprendre la polifonia vocal renaixentista",
            "Derrotar l'assassí renegat i recuperar el Fragment Polifònic"
        ],
        threats: "Assassí renegat treballant per Borgia. Perillós i expert en combat amb dagues hidden.",
        musicInfo: "Gran desenvolupament de la polifonia vocal: moltes veus canten alhora però de forma equilibrada. Encara no hi ha acords com a base harmònica, però sí consonàncies i dissonàncies controlades."
    },
    2: {
        title: "BARROC (s. XVII – inicis XVIII)",
        location: "Palau de Versalles, França",
        year: "1685 D.C.",
        context: "Infiltració en un ball reial de Lluís XIV. La música barroca de Lully consolida el sistema tonal i l'harmonia funcional, mentre un espia Templar de rang superior protegeix els secrets musicals de la cort.",
        objectives: [
            "Navegar pels protocols de la cort reial",
            "Dominar els conceptes de l'harmonia funcional barroca",
            "Superar l'espia Templar i obtenir el Fragment Harmònic Funcional"
        ],
        threats: "Espia Templar de rang superior amb accés a la seguretat reial. Expert en esgrima cortesana.",
        musicInfo: "Naixement de l'harmonia funcional: es consolida el sistema tonal. Apareixen els acords majors i menors, i es donen noms als acords segons la seva funció: tònica, dominant, subdominant."
    },
    3: {
        title: "CLASSICISME (s. XVIII)",
        location: "Sala de Concerts, Viena",
        year: "1784 D.C.",
        context: "Concert íntim de Wolfgang Amadeus Mozart mentre investigues una conspiració Templar a la cort imperial austríaca. El Classicisme perfecciona l'harmonia clara, ordenada i lògica.",
        objectives: [
            "Mantenir l'elegància aristocràtica vienesa",
            "Comprendre la claredat harmònica de Mozart",
            "Convèncer el noble-Templar i recuperar el Fragment Clàssic"
        ],
        threats: "Noble austríac amb connexions Templars. Influent a la cort imperial i sospitós de forastres.",
        musicInfo: "Harmonia clara, ordenada i lògica. Acords triats per crear tensió i resolució: tònica-dominant-tònica. Frases musicals basades en progressions harmòniques regulars."
    },
    4: {
        title: "ROMANTICISME (s. XIX)",
        location: "Saló Parisenc, França",
        year: "1847 D.C.",
        context: "Saló íntim on Frédéric Chopin interpreta obres de passió romàntica. El Romanticisme enriqueix l'harmonia amb cromatisme i expressivitat, però un assassí renegat amenaça la pau musical.",
        objectives: [
            "Protegir l'ambient artístic del saló",
            "Entendre la riquesa harmònica cromàtica",
            "Pacificar l'assassí renegat i obtenir el Fragment Cromàtic"
        ],
        threats: "Assassí renegat emocionalment inestable. Perillós però sensible a la bellesa musical.",
        musicInfo: "L'harmonia es fa més rica, expressiva i cromàtica. Es comencen a utilitzar acords nous (com els de 7a disminuïda) i modulacions freqüents (canvis de tonalitat)."
    },
    5: {
        title: "AVANTGUARDA (1900–1970)",
        location: "Théâtre des Champs-Élysées, París",
        year: "29 Maig 1913",
        context: "Estrena escandalosa de 'La Consagració de la Primavera' de Stravinsky. L'avantguarda trenca el sistema tonal tradicional mentre un Gran Mestre Templar aprofita el caos per sembrar discòrdia.",
        objectives: [
            "Sobreviure al caos de l'estrena",
            "Comprendre la revolució harmònica de l'avantguarda",
            "Derrotar el Gran Mestre Templar i capturar el Fragment Atonal"
        ],
        threats: "Gran Mestre Templar aprofitant el tumulte social. Expert en manipulació de masses.",
        musicInfo: "Es trenca el sistema tonal tradicional. Apareixen noves formes harmòniques: música atonal (sense centre tonal), escales noves, modes antics, acords amb més de 4 notes."
    },
    6: {
        title: "ERA ELECTRÒNICA (1970–2010)",
        location: "Club Underground, South Bronx",
        year: "1979 D.C.",
        context: "Naixement del hip-hop amb DJ Kool Herc. L'harmonia es simplifica en molts estils populars, però Abstergo Industries veu una oportunitat de control mental.",
        objectives: [
            "Protegir la cultura hip-hop nascent",
            "Comprendre la simplicitat harmònica moderna",
            "Sabotejar Abstergo i alliberar el Fragment Popular"
        ],
        threats: "Agent d'Abstergo Industries amb tecnologia avançada. Representa els Templars corporatius moderns.",
        musicInfo: "En molts estils populars (pop, rock, funk, disco), l'harmonia es simplifica: es treballa amb acords bàsics repetits. El jazz-fusió manté una harmonia rica, però en música electrònica l'harmonia passa a segon pla."
    },
    7: {
        title: "ERA DIGITAL GLOBAL (2010–Avui)",
        location: "Megacitat Globalitzada",
        year: "Present",
        context: "Confrontació final amb el Gran Mestre Suprem dels Templars. L'harmonia minimalista de reggaeton, trap i música urbana controla bilions de ments a través de les xarxes socials globals.",
        objectives: [
            "Enfrontar-se al líder suprem dels Templars",
            "Comprendre l'harmonia minimalista actual",
            "Alliberar la humanitat i obtenir el Fragment Digital final"
        ],
        threats: "Gran Mestre Suprem amb tecnologia futurista. Boss final amb capacitats de manipulació global.",
        musicInfo: "En reggaeton, trap i música urbana, l'harmonia sovint es basa en una sola progressió repetida, o fins i tot un sol acord. L'harmonia és senzilla però eficaç, amb sons sintètics per crear climes i ambients."
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
            intro: "ANIMUS 4.3 ha detectat memòries genètiques d'un avantpassat Assassí infiltrat en un monestir benedictí l'any 1180. Objectiu: recuperar informació sobre l'harmonia musical medieval. ADVERTÈNCIA: presència Templar confirmada al complex monàstic.",
            question: "DESAFIAMENT TEMPLAR DETECTAT - Un Cavaller Templar sospita de la vostra identitat: 'Intrús! Si realment pertanyeu a aquesta comunitat religiosa, expliqueu-me com és l'harmonia del nostre cant sagrat!'",
            options: [
                "Utilitza acords complexos de 7a i 9a per crear riquesa harmònica",
                "Al principi no existeix harmonia, només melodia monofònica com el cant gregorià",
                "Sempre combina múltiples tonalitats simultàniament per crear tensió",
                "Es basa exclusivament en progressions d'acords moderns I-V-vi-IV"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "SINCRONITZACIÓ EXITOSA - El Templar baixa la guàrdia: 'Veig que coneixeu els misteris sagrats del cant monofònic...' Passeu desapercebut. L'Animus ha registrat el Fragment 001 a la base de dades.",
                incorrect: "ALERTA MÀXIMA - El Cavaller Templar crida a la guàrdia: 'INTRÚS DETECTAT AL MONESTIR!' Error de sincronització. A l'Edat Mitjana no existia harmonia com l'entenem avui, només melodia monofònica."
            },
            fragment: "FRAGMENT 001: Melodia Monofònica Gregoriana",
            rhythmGame: {
                question: "VALIDACIÓ ADDICIONAL REQUERIDA - Un monjo ancià s'acosta amb sospita: 'Germà, quan apareixen les primeres formes d'harmonia medieval?'",
                options: [
                    "Mai, sempre es manté la melodia monofònica sense canvis",
                    "Amb l'organum, que afegeix una segona veu en paral·lel a distància de 4a o 5a",
                    "Només quan s'introdueixen instruments elèctrics al monestir",
                    "Quan es comencen a utilitzar acords de jazz amb extensions"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 002: Renaixement (s. XV – XVI)",
            intro: "UBICACIÓ: Florència, 1520. L'Animus detecta memòries d'infiltració en una festa del mecenas Lorenzo de' Medici. Els músics interpreten polifonia vocal sofisticada quan el sistema identifica un ASSASSÍ RENEGAT treballant per Cesare Borgia: 'Germà traïdor! Borgia m'ha promès or suficient per a mil vides a canvi dels fragments de l'harmonia!'",
            question: "COMBAT INICIAT - Mentre les vostres fulles hidden s'entrecreuen en duel mortal, l'assassí renegat us desafia: 'Si realment coneixes els secrets del Renaixement, digues-me què caracteritza la seva harmonia!'",
            options: [
                "Utilitza exclusivament harmonia atonal sense cap centre tonal definit",
                "Gran desenvolupament de la polifonia vocal amb consonàncies i dissonàncies controlades",
                "Només permet melodia monofònica sense cap mena de superposició vocal",
                "Es basa únicament en progressions d'acords simples de tres notes"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "VICTÒRIA CONFIRMADA - L'assassí renegat para el seu atac fatal: 'Per la barba d'Ezio Auditore... realment enteneu l'art polifònic renaixentista!' Es retira amb respecte professional. Fragment 002 adquirit.",
                incorrect: "PERILL CRÍTIC - L'assassí renegat riu amb malícia: 'Ignorant del Credo! El Renaixement desenvolupa la polifonia vocal, no el caos atonal!' Les seves dagues hidden brillen mortals a la llum dels canelobres."
            },
            fragment: "FRAGMENT 002: Polifonia Vocal Renaixentista",
            rhythmGame: {
                question: "INTERROGATORI FINAL - Abans de desaparèixer entre la multitud de nobles, l'assassí derrotat murmura: 'Última prova, germà... l'harmonia renaixentista ja té acords ben definits?'",
                options: [
                    "Sí, utilitza acords triats amb funcions harmòniques clares com el Barroc",
                    "Encara no hi ha acords com a base harmònica, però l'harmonia suggereix tonalitat",
                    "Només utilitza acords de 7a disminuïda per crear tensió dramàtica",
                    "Es basa exclusivament en acords augmentats per sorprendre l'oient"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 003: Barroc (s. XVII – inicis XVIII)",
            intro: "SINCRONITZACIÓ: Palau de Versalles, 1685. Esteu infiltrat en un ball reial de la cort del Rei Sol Lluís XIV. La música barroca de Jean-Baptiste Lully ressona majestuosa pels salons daurats mentre perseguiu un ESPIA TEMPLAR de rang superior pels opulents passadissos. L'objectiu gira en combat: 'Alto, Assassí de l'ombra! Demostraré que els Templars som els veritables mestres de l'ordre harmònic!'",
            question: "DUEL EN CURS - L'espia Templar llueix amb espasa mentre la música de danses cortesanes continua: 'Digues-me, servent del caos, què aporta de nou aquesta gloriosa era barroca a l'harmonia musical!'",
            options: [
                "Elimina completament qualsevol noció d'harmonia per abraçar la melodia pura",
                "Consolida el sistema tonal i l'harmonia funcional amb acords majors i menors",
                "Introdueix exclusivament harmonia atonal i música dodecafònica",
                "Utilitza només escales exòtiques sense cap mena d'estructura tonal"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "MISSIÓ REEIXIDA - L'espia Templar baixa la seva espasa reial amb elegància: 'Per Bach i Vivaldi! Veig que enteneu l'arquitectura harmònica perfecta...' Fugiu pels jardins mentre ressonava una suite de danses. Fragment 003 capturat.",
                incorrect: "ALERTA VERMELLA - L'espia Templar ataca amb fúria aristocràtica: 'Neòfit ignorant! El Barroc consolida l'harmonia funcional i el sistema tonal!' La seva espasa canta mortalment a l'aire perfumat."
            },
            fragment: "FRAGMENT 003: Harmonia Funcional Barroca",
            rhythmGame: {
                question: "FUGIDA PELS JARDINS - Mentre escapeu pels laberints de Versalles, una veu elegant ressona des de les ombres topiàries: 'Assassí de l'harmonia, expliqueu-me què són aquests acords funcionals que tant estimem en aquesta època daurada!'",
                options: [
                    "Són acords aleatoris sense cap mena de relació o funció específica",
                    "Són acords amb funcions clares: tònica, dominant i subdominant per crear tensió i resolució",
                    "Són exclusivament acords dissonants per crear incomoditat constant",
                    "Són només decoracions melòdiques sense importància estructural"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 004: Classicisme (s. XVIII)",
            intro: "COORDENADES: Viena, 1784. L'Animus us trasllada a un concert íntim de Wolfgang Amadeus Mozart mentre investigeu una conspiració Templar a la cort imperial. Un NOBLE AUSTRÍAC amb mirada gelada s'acosta amb sospita: 'Cavaller misteriós, he sentit rumors que busqueu els antics secrets de l'harmonia musical. Però primer heu de demostrar que enteneu la perfecció clàssica que Mozart representa!'",
            question: "INSPECCIÓ ARISTOCRÀTICA - El noble-Templar us examina amb els seus ulls blaus glacials mentre Mozart toca: 'Com es caracteritza l'harmonia en aquest període de perfecció geomètrica absoluta?'",
            options: [
                "Harmonia caòtica i impredictible sense cap mena de lògica compositiva",
                "Harmonia clara, ordenada i lògica amb progressions regulars tònica-dominant-tònica",
                "Harmonia exclusivament cromàtica amb modulacions constants i extremes",
                "Harmonia basada únicament en dissonàncies per crear tensió perpètua"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "RECONEIXEMENT IMPERIAL - El noble-Templar somriu amb respecte aristocràtic: 'Magnífico! Aprecieu l'arquitectura harmònica de Mozart i Haydn com un veritable connoisseur...' Es retira sense violència. L'elegància clàssica us ha salvat. Fragment 004 obtingut.",
                incorrect: "HUMILIACIÓ CORTESANA - El noble-Templar es burla amb desdeny imperial: 'Clarament no compreneu l'ordre diví i la claredat que defineix aquesta era de llums!' Els seus guàrdies imperials s'acosten amb alabardes."
            },
            fragment: "FRAGMENT 004: Claredat Harmònica Clàssica",
            rhythmGame: {
                question: "ABANS DEL CLÍMAX MUSICAL - Abans que el concert de Mozart arribi al seu moviment final, algú us xiuxiueja subtilment a l'orella: 'Per què l'harmonia de Mozart és tan satisfactòria i equilibrada per a l'oient?'",
                options: [
                    "Perquè és completament impredictible i constantment sorprenent",
                    "Perquè segueix progressions harmòniques regulars basades en tensions i resolucions clares",
                    "Perquè no té cap mena d'estructura organitzada ni lògica compositiva",
                    "Perquè sempre és extremadament complexa i difícil de seguir"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 005: Romanticisme (s. XIX)",
            intro: "LOCALITZACIÓ: Saló parisenc, 1847. Sincronització amb memòries d'un Assassí en un saló íntim on Frédéric Chopin interpreta al piano obres d'una passió romàntica inigualable. ALERTA CRÍTICA: un ASSASSÍ RENEGAT irromp violentament trencant la màgia del moment: 'Prou de jocs sentimentals burgesos! Lliura'm els fragments de l'harmonia o aquesta serà la teva última nocturna!'",
            question: "DUEL ENTRE MELODIES - Durant el combat mortal entre les notes emotives del piano Pleyel, l'assassí renegat crida amb passió criminal: 'Si realment entens l'ànima del Romanticisme, digues-me què caracteritza la seva harmonia revolucionària!'",
            options: [
                "Harmonia simple i limitada als acords bàsics I-IV-V sense variacions",
                "Harmonia rica, expressiva i cromàtica amb acords nous i modulacions freqüents",
                "Harmonia exclusivament atonal sense cap centre tonal definit",
                "Harmonia basada únicament en escales pentatòniques orientals"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "RENDICIÓ EMOCIONAL - L'assassí renegat para en sec, les dagues tremolant: 'Els acords cromàtics... sí, l'expressivitat que flueix com les llàgrimes sobre les tecles...' Baixa les armes, profundament tocat per la bellesa musical. Chopin assenteix des del piano. Fragment 005 conquistat!",
                incorrect: "ATAC APASSIONAT - L'assassí renegat ataca amb fúria romàntica desbordant: 'No entens l'ànima que crema en cada harmonia expressiva! L'harmonia romàntica és riquesa cromàtica pura!' Les seves dagues brillen sota la llum daurada de les espelmes."
            },
            fragment: "FRAGMENT 005: Riquesa Cromàtica Romàntica",
            rhythmGame: {
                question: "RECONCILIACIÓ MUSICAL - L'assassí, ara aliat i profundament tocat per l'emoció musical, us pregunta amb curiositat sincera mentre Chopin continua: 'Germà de l'ombra, què són exactament aquests acords nous que fan plorar al piano?'",
                options: [
                    "Només els acords bàsics triats sense cap mena d'extensió harmònica",
                    "Acords de 7a disminuïda, cromàtics i amb modulacions expressives per transmetre emocions",
                    "Exclusivament acords augmentats per crear alegria constant",
                    "Només acords consonants per mantenir la pau harmònica absoluta"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 006: Avantguarda (1900–1970)",
            intro: "SITUACIÓ CRÍTICA: Théâtre des Champs-Élysées, París, 29 maig 1913. L'Animus us sincronitza durant l'estrena escandalosa de 'La Consagració de la Primavera' d'Igor Stravinsky. El públic protesta violentament, cadires volen per l'aire creant un caos total, quan apareix un GRAN MESTRE TEMPLAR: 'Aquest caos harmònic diabòlic és perfecte per sembrar discòrdia social! Aquest Stravinsky és el nostre aliat involuntari en la destrucció de l'ordre tonal!'",
            question: "BATALLA APOCALÍPTICA - Mentre es desenvolupa un duel èpic entre la multitud enfurismada i la música revolucionària, el Gran Mestre us grita per sobre del tumult: 'Què aporta aquesta avantguarda diabòlica i destructiva a l'harmonia musical tradicional?'",
            options: [
                "Un simple retorn nostàlgic i conservador a l'harmonia medieval del passat",
                "Trenca el sistema tonal tradicional: música atonal, escales noves i acords amb més de 4 notes",
                "L'eliminació total i definitiva de qualsevol forma d'harmonia musical",
                "Només acords triats tradicionals per simplificar radicalment la música"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "DERROTA TEMPLAR - El Gran Mestre s'atura completament impressionat enmig del caos absolut: 'Per tots els diables de l'infern! Stravinsky... sí, has entès que ha trencat per sempre totes les cadenes tonals tradicionals!' Desapareix entre la multitud que crida histèricament. Fragment 006 capturat en plena revolució harmònica!",
                incorrect: "FÚRIA DESTRUCTIVA - El Gran Mestre Templar riu malèficament mentre esquiva una cadira voladora: 'Ignorant del progrés! No entens que aquesta revolució harmònica ha destruït mil anys de tradició tonal!' La seva espasa reflecteix caòticament les llums del teatre en flames."
            },
            fragment: "FRAGMENT 006: Revolució Atonal",
            rhythmGame: {
                question: "VOZ MISTERIOSA - Entre el caos absolut del teatre amb el públic completament amotinat, una veu mística ressona des de les ombres teatrals: 'Assassí de l'harmonia, com aconsegueix Stravinsky aquests efectes tan brutalment revolucionaris?'",
                options: [
                    "Usant exclusivament harmonia tonal tradicional del segle XVIII",
                    "Combinant violentament atonalitat, poliacords i estructures harmòniques noves",
                    "Tocant sempre amb harmonia simple i consonant per crear pau",
                    "Repetint obsessivament les mateixes progressions harmòniques clàssiques"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 007: Era Electrònica (1970–2010)",
            intro: "COORDENADES: South Bronx, Nova York, 1979. L'Animus us trasllada a un club underground on neix el hip-hop revolucionari. DJ Kool Herc manipula magistralment els plats quan apareix un AGENT D'ABSTERGO INDUSTRIES (Templars corporatius moderns): 'L'harmonia simplificada que escolten aquests joves és l'arma de control mental perfecta per al segle XXI! Aquests loops harmònics bàsics hipnotitzaran les masses globalment!'",
            question: "COMBAT TECNOLÒGIC - Mentre lluiteu contra la tecnologia Templar d'última generació, l'agent d'Abstergo us pregunta amb arrogància corporativa gelada: 'Assassí obsolet del passat, què ha caracteritzat l'harmonia musical entre 1970 i 2010?'",
            options: [
                "Un nostàlgic retorn conservador a l'harmonia complexa medieval i barroca",
                "Simplificació harmònica: acords bàsics repetits, però amb varietat en jazz-fusió i rock progressiu",
                "L'eliminació completa i definitiva de qualsevol forma d'harmonia musical",
                "Exclusivament harmonia atonal i dodecafònica en tots els estils populars"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "SABOTATGE REEIXIT - Heu sabotejat el dispositiu d'Abstergo amb habilitat assassina! L'agent fuig entre espurnes elèctriques: 'Compreneu el poder de l'harmonia simplificada... Abstergo Industries recordarà aquesta humiliació!' Els DJs us saluden com un heroi del hip-hop. Fragment 007 alliberat!",
                incorrect: "SUPERIORITAT TECNOLÒGICA - L'agent d'Abstergo riu amb superioritat corporativa freda: 'No compreneu el poder absolut de la revolució harmònica simple que controlem!' El dispositiu s'intensifica perillósament amb llums blaves cegadores."
            },
            fragment: "FRAGMENT 007: Simplicitat Harmònica Popular",
            rhythmGame: {
                question: "PREGUNTA DELS CARRERS - Un DJ local amb cadenes d'or us pregunta mentre mixa expertament: 'Yo hermano de l'harmonia, per què funcionen tan bé aquests loops harmònics simples que acabem d'inventar al gueto?'",
                options: [
                    "Només reprodueixen harmonia clàssica sense cap tipus d'innovació musical",
                    "Perquè l'harmonia simple repetida és eficaç i deixa espai per al groove i la creativitat vocal",
                    "Són exactament iguals que l'harmonia complexa tradicional del passat",
                    "No tenen cap mena d'impacte real o significatiu en la cultura musical global"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 008: Era Digital Global (2010–Avui)",
            intro: "ALERTA MÀXIMA: Megacitat globalitzada, present. L'Animus arriba al clímax final absolut de la missió temporal. Heu recorregut mil anys de música quan apareix el GRAN MESTRE SUPREM DELS TEMPLARS amb tecnologia futurista: 'Assassí llegendari de l'Harmonia! Heu viatjat per mil·lennis de música, però ara us enfronteu a l'arma definitiva: l'harmonia viral que controla BILIONS de ments simultàniament a través de les xarxes socials globals!'",
            question: "CONFRONTACIÓ FINAL - El Gran Mestre Suprem, mentre lluita amb tecnologia d'un futur proper, us desafia per última vegada en tota la història musical: 'Què caracteritza l'harmonia que domina aquesta era digital globalitzada (2010-avui)?'",
            options: [
                "Harmonia extremadament complexa que requereix estudis musicals universitaris avançats",
                "Harmonia minimalista i atmosfèrica: sovint una sola progressió repetida o un sol acord",
                "Un retorn complet i nostàlgic als patrons harmònics barrocs del segle XVII",
                "Harmonia exclusivament instrumental sense cap mena de suport tecnològic"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "VICTÒRIA DEFINITIVA - Heu derrotat per sempre el Gran Mestre Suprem! 'IMPOSSIBLE... coneixeu el poder addictiu de l'harmonia minimalista viral...' cau derrotat per l'eternitat. La humanitat sencera és finalment lliure del control harmònic Templar. Milions de persones poden escoltar música lliurement! Heu conquistat l'últim Fragment 008!",
                incorrect: "ATAC APOCALÍPTIC - El Gran Mestre Suprem ataca amb fúria digital: 'La nostra harmonia viral simple és més poderosa que mil exèrcits harmònics tradicionals! Aquesta és la nostra dominació final absoluta!' Projectors hologràfics il·luminen la batalla final."
            },
            fragment: "FRAGMENT 008: Harmonia Minimalista Digital",
            rhythmGame: {
                question: "VOZ ANCESTRAL - Amb el Gran Mestre Suprem derrotat per sempre, una veu ancestral de tots els músics de la història humana us pregunta: 'Hereu etern de l'harmonia, per què aquesta harmonia digital aparentment simple és tan tremendament poderosa en l'era moderna globalitzada?'",
                options: [
                    "Perquè és extremadament complicada i difícil de comprendre musicalment",
                    "Perquè la seva simplicitat addictiva la fa memorable i viral a les xarxes socials globals",
                    "Perquè només la poden escoltar i entendre les generacions joves urbanes",
                    "Perquè no té absolutament cap mena d'estructura harmònica reconeixible"
                ],
                correctAnswer: 1
            }
        }
    ]
};