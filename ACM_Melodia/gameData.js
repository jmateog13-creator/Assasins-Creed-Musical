// Dades de les èpoques per als popups
const eraData = {
    0: {
        title: "EDAT MITJANA (s. IX – XV)",
        location: "Catedral de Chartres, França",
        year: "1150 D.C.",
        context: "L'Animus ha detectat memòries genètiques d'un avantpassat Assassí infiltrat com a cantor en una catedral gòtica. La música d'aquesta època està dominada per la melodia monòdica del cant gregorià, una sola línia melòdica que flueix lliurement seguint el text sagrat.",
        objectives: [
            "Infiltrar-se al cor catedralici sense ser detectat",
            "Aprendre els secrets de la melodia monòdica medieval",
            "Recuperar el Fragment de la Monodia Gregoriana"
        ],
        threats: "Monjos Templars sospitosos controlen la catedral. Experts en detectar veus falses durant el cant.",
        musicInfo: "La música era monòdica: una sola línia melòdica com el cant gregorià. Les melodies tenien un caràcter lliure, seguint el text parlat/cantat. Més endavant, amb l'organum i la polifonia primitiva, les melodies es superposen però encara són independents."
    },
    1: {
        title: "RENAIXEMENT (s. XV – XVI)",
        location: "Villa d'Este, Ferrara",
        year: "1505 D.C.",
        context: "Sincronització amb memòries d'un banquet noble on cantors interpreten madrigals renaixentistes. Un NOBLE CORTESÀ corrupte, aliat dels Templars, controla els secrets melòdics de l'època i sospita de la vostra presència entre els músics.",
        objectives: [
            "Mantenir la cobertura entre els cantors nobles",
            "Comprendre les melodies suaves i equilibrades del Renaixement",
            "Superar el noble Templar i recuperar el Fragment Madrigal"
        ],
        threats: "Noble cortesà amb connexions Templars. Expert en detectar imposters entre la noblesa musical.",
        musicInfo: "Les melodies són suaves, cantables i equilibrades. Es creen amb moviment conjunt (pocs salts), dins d'un interval limitat. Les diferents veus tenen melodies pròpies que s'entrellacen (polifonia imitativa)."
    },
    2: {
        title: "BARROC (s. XVII – inicis XVIII)",
        location: "Capella Reial, Nàpols",
        year: "1690 D.C.",
        context: "Infiltració en una capella reial napolitana on s'interpreten òperes barroques amb melodies virtuoses. Un MESTRE DE CAPELLA TEMPLAR dirigeix l'ensemble i ha descobert la vostra missió: 'Assassí intrús! Les nostres melodies ornamentades són massa complexes per a la vostra ment primitiva!'",
        objectives: [
            "Sobreviure a l'ambient musical cortesà",
            "Dominar els conceptes de la melodia barroca virtuosa",
            "Derrotar el Mestre Templar i obtenir el Fragment Virtuós"
        ],
        threats: "Mestre de capella Templar amb gran influència musical. Capaç de mobilitzar tots els músics contra vós.",
        musicInfo: "S'introdueixen melodies virtuoses i ornamentades (moltes notes ràpides i adorns). Contrapunt entre veus, però la melodia principal comença a destacar. Es creen melodies amb intenció expressiva i decorativa."
    },
    3: {
        title: "CLASSICISME (s. XVIII)",
        location: "Teatre San Carlo, Nàpols",
        year: "1780 D.C.",
        context: "Concert en un teatre d'òpera mentre investigues una conspiració Templar entre els compositors de l'època. Un COMPOSITOR RIVAL, gelós de Mozart i corromput pels Templars, us confronta: 'Intrús! Demostra que entens la perfecció melòdica del nostre segle il·lustrat!'",
        objectives: [
            "Mantenir la vostra identitat secreta al teatre",
            "Comprendre la claredat i simetria de les melodies clàssiques",
            "Convèncer el compositor i recuperar el Fragment Simètric"
        ],
        threats: "Compositor rival amb connexions Templars. Influent en els cercles musicals vienesos.",
        musicInfo: "Les melodies són clares, simètriques i elegants. Frases regulars (de 4 o 8 compassos), sovint amb pregunta i resposta. Es busca equilibri i simplicitat."
    },
    4: {
        title: "ROMANTICISME (s. XIX)",
        location: "Sala de Concerts, Leipzig",
        year: "1840 D.C.",
        context: "Concert romàntic en una sala de Leipzig on Mendelssohn dirigeix obres apassionades. Un CRÍTIC MUSICAL ENEMIC, corromput pels Templars, intenta desacreditar la música romàntica: 'Aquestes melodies excessivament emotives corrompen l'ordre social establert!'",
        objectives: [
            "Protegir l'ambient artístic romàntic",
            "Entendre l'expressivitat i els salts melòdics romàntics",
            "Neutralitzar el crític Templar i obtenir el Fragment Expressiu"
        ],
        threats: "Crític musical amb gran influència en la premsa. Capaç de destruir reputacions amb les seves ressenyes.",
        musicInfo: "Melodies llargues, expressives i emotives. Molts salts melòdics, intervals amplis, i un ús intens del crescendo i el rubato. Les melodies tenen caràcter de discurs personal o narració emocional."
    },
    5: {
        title: "AVANTGUARDA (1900–1970)",
        location: "Conservatori de París",
        year: "15 Maig 1913",
        context: "Classe magistral al Conservatori on es debaten les noves formes melòdiques radicals. Un ACADÈMIC CONSERVADOR, aliat secret dels Templars, rebutja qualsevol innovació: 'Aquestes melodies atonals destrueixen mil anys de tradició! Sou un revolucionari perillós!'",
        objectives: [
            "Defensar les noves formes melòdiques",
            "Comprendre l'atonalitat i les melodies abstractes",
            "Superar l'acadèmic conservador i capturar el Fragment Atonal"
        ],
        threats: "Acadèmic conservador amb poder institucional. Capaç de mobilitzar tot el sistema educatiu musical.",
        musicInfo: "Apareixen noves formes melòdiques: atonals sense centre clar, amb escales noves (modes, escales exòtiques), o molt repetitives i minimalistes. Es trenquen les regles clàssiques: melodies abstractes o sense estructura."
    },
    6: {
        title: "ERA COMERCIAL (1970–2010)",
        location: "Estudis Abbey Road, Londres",
        year: "1985 D.C.",
        context: "Sessió de gravació en els llegendaris estudis on es creen hits comercials amb melodies enganxoses. Un EXECUTIU DISCOGRÀFIC corrupte, representant dels Templars corporatius, controla què música pot arribar a les masses: 'Aquestes melodies simples són perfectes per al control mental massiu!'",
        objectives: [
            "Infiltrar-se en la indústria musical comercial",
            "Comprendre les melodies pop enganxoses i memorables",
            "Sabotejar l'executiu Templar i alliberar el Fragment Comercial"
        ],
        threats: "Executiu discogràfic amb enorme poder en la indústria. Controla la distribució mundial de música.",
        musicInfo: "En el pop i el rock, les melodies són enganxoses, simples i repetitives. S'utilitzen estructures com estrofa + tornada, amb melodies que es poden cantar fàcilment. En R&B i soul hi ha més riquesa melòdica (melismes, ampli registre)."
    },
    7: {
        title: "ERA DIGITAL GLOBAL (2010–Avui)",
        location: "Servidor Central d'Streaming Global",
        year: "Present",
        context: "Confrontació final dins el sistema d'intel·ligència artificial que controla la música global. L'ALGORITME SUPREM TEMPLAR ha evolucionat més enllà del control humà: 'Assassí analògic obsolet! Les nostres melodies digitals simples i processades dominen 8 bilions de cervells simultàniament!'",
        objectives: [
            "Infiltrar-se en el sistema d'IA musical global",
            "Comprendre les melodies minimalistes digitals actuals",
            "Derrotar l'Algoritme Suprem i obtenir el Fragment Digital final"
        ],
        threats: "Algoritme d'IA amb capacitat de processar tota la música mundial. Boss final amb intel·ligència artificial avançada.",
        musicInfo: "En molts estils (reggaeton, trap, música urbana), la melodia és senzilla, repetitiva i curta. Es posa èmfasi en el to i timbre de la veu, sovint amb auto-tune o efectes. El flow i el ritme de les paraules a vegades substitueixen la melodia tradicional."
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
            intro: "ANIMUS 4.3 ha detectat memòries genètiques d'un avantpassat Assassí infiltrat com a cantor en una catedral gòtica l'any 1150. Objectiu: recuperar informació sobre les melodies medievals monòdiques. ADVERTÈNCIA: monjos Templars controlen el cor catedralici.",
            question: "DESAFIAMENT TEMPLAR DETECTAT - Un monjo Templar sospita durant el cant: 'Germà, la vostra veu sona estranya. Si realment sou dels nostres, expliqueu-me com són les melodies del nostre cant sagrat!'",
            options: [
                "Són melodies complexes amb múltiples veus harmòniques simultànies",
                "Són melodies monòdiques: una sola línia melòdica que flueix lliurement seguint el text",
                "Utilitzen sempre ornaments virtuosos i passages ràpids per impressionar",
                "Es basen exclusivament en intervals disonants per crear tensió espiritual"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "SINCRONITZACIÓ EXITOSA - El monjo Templar relaxa la vigilància: 'Sí, coneixeu la puresa de la monodia sagrada...' La vostra veu es fon amb el cant gregorià sense sospites. Fragment 001 registrat.",
                incorrect: "ALERTA CATEDRALÍCIA - El monjo Templar crida als seus companys: 'IMPOSTOR AL COR SAGRAT!' Error de sincronització. El cant medieval era monòdic, una sola línia melòdica sense complexitat harmònica."
            },
            fragment: "FRAGMENT 001: Monodia Gregoriana",
            rhythmGame: {
                question: "VALIDACIÓ ADDICIONAL REQUERIDA - El mestre de cor s'acosta: 'Germà cantor, com evoluciona la nostra música sagrada amb el temps?'",
                options: [
                    "Sempre es manté exactament igual, sense cap canvi durant segles",
                    "Amb l'organum i la polifonia primitiva, les melodies es superposen però són independents",
                    "Només s'utilitzen instruments de corda per acompanyar les veus",
                    "Es converteix immediament en música purament instrumental"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 002: Renaixement (s. XV – XVI)",
            intro: "UBICACIÓ: Villa d'Este, Ferrara, 1505. L'Animus detecta memòries d'infiltració en un banquet noble on cantors interpreten madrigals sofisticats. Un NOBLE CORTESÀ corrupte, aliat dels Templars, us confronta entre les melodies renaixentistes: 'Intrús sospitós! Els vostres modals no són els d'un autèntic cantor cortesà!'",
            question: "COMBAT SOCIAL INICIAT - Mentre les melodies madrigals flueixen suaument, el noble Templar us examina: 'Si realment pertanyeu a aquesta època daurada, descriviu-me les nostres melodies aristocràtiques!'",
            options: [
                "Són melodies caòtiques i dissonants per reflectir les guerres de l'època",
                "Són melodies suaves, cantables i equilibrades amb moviment conjunt i pocs salts",
                "Utilitzen només salts melòdics extrems per demostrar virtuosisme tècnic",
                "Es basen exclusivament en una sola nota repetida per crear simplicitat"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "ACCEPTACIÓ CORTESANA - El noble Templar somriu amb elegància: 'Efectivament, aprecieu la suavitat i equilibri de les nostres línies cantables...' Es retira amb respecte aristocràtic. Fragment 002 adquirit.",
                incorrect: "HUMILIACIÓ SOCIAL - El noble Templar us mira amb desdeny: 'Clarament no compreneu la refinada elegància renaixentista! Guàrdies, escorteu aquest impostor!' Les melodies madrigals continuen mentre fugiu."
            },
            fragment: "FRAGMENT 002: Melodia Madrigal Equilibrada",
            rhythmGame: {
                question: "INTERROGATORI REFINAT - Abans que la festa acabi, una dama noble us pregunta delicadament: 'Cavaller, com s'entrellacen les nostres veus en els madrigals?'",
                options: [
                    "Cada veu canta exactament la mateixa melodia al mateix temps",
                    "Les diferents veus tenen melodies pròpies que s'entrellacen en polifonia imitativa",
                    "Només una veu canta mentre les altres fan soroll de fons",
                    "Les veus mai coincideixen i canten coses completament diferents"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 003: Barroc (s. XVII – inicis XVIII)",
            intro: "SINCRONITZACIÓ: Capella Reial, Nàpols, 1690. Esteu infiltrat en una capella reial on s'interpreten òperes barroques amb melodies increïblement virtuoses. Un MESTRE DE CAPELLA TEMPLAR dirigeix amb autoritat absoluta quan detecta la vostra presència: 'Assassí infiltrat! Les nostres melodies ornamentades exposaran la vostra mediocritat!'",
            question: "DUEL MUSICAL EN CURS - Mentre les àries barroques ressonen amb ornaments brillants, el Mestre Templar us desafia: 'Demostreu que enteneu la sofisticació de les nostres melodies imperials!'",
            options: [
                "Són melodies simples i planes sense cap mena d'ornamentació o adorn",
                "Són melodies virtuoses i ornamentades amb moltes notes ràpides i adorns expressius",
                "Utilitzen només tres notes repetides per crear monotonia espiritual",
                "Es basen exclusivament en silencis llargs sense cap nota musical"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "RECONEIXEMENT ARTÍSTIC - El Mestre Templar baixa la batuta impressionat: 'Per Vivaldi i Corelli! Compreneu la virtuositat ornamental de la nostra època...' La capella continua, acceptant-vos. Fragment 003 capturat.",
                incorrect: "EXPULSIÓ MUSICAL - El Mestre Templar alça la batuta amb fúria: 'Ignorant de l'art! Les nostres melodies barroques són pura virtuositat ornamental!' Els músics us rodegen amenançadorament."
            },
            fragment: "FRAGMENT 003: Virtuosisme Ornamental Barroc",
            rhythmGame: {
                question: "EXAMEN FINAL - Mentre escapeu pels passadissos del palau, una veu ressonant us pregunta: 'Fugitiu, què destaca en les melodies barroques respecte a èpoques anteriors?'",
                options: [
                    "Tornen a ser completament monòdiques com en l'Edat Mitjana",
                    "La melodia principal comença a destacar sobre el contrapunt de les altres veus",
                    "Eliminen completament qualsevol mena de melodia principal",
                    "Són sempre interpretades sense cap mena d'instrument musical"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 004: Classicisme (s. XVIII)",
            intro: "COORDENADES: Teatre San Carlo, Nàpols, 1780. L'Animus us trasllada a un concert d'òpera mentre investigeu una conspiració Templar entre compositors. Un COMPOSITOR RIVAL, gelós de Mozart i corromput pels Templars, us interpel·la: 'Misteriós melòman, he sentit que busqueu els secrets de la perfecció melòdica. Però primer demostreu que compreneu la nostra era il·lustrada!'",
            question: "INSPECCIÓ MUSICAL - El compositor Templar us examina mentre sonen melodies mozartianes perfectes: 'Com caracteritzaríeu les melodies d'aquesta era de perfecció geomètrica?'",
            options: [
                "Melodies totalment irregulars i caòtiques sense cap mena de lògica estructural",
                "Melodies clares, simètriques i elegants amb frases regulars de 4 o 8 compassos",
                "Melodies extremadament complexes impossibles de recordar o cantar",
                "Melodies basades únicament en sorolls i efectes especials sense notes"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "ADMIRACIÓ MUSICAL - El compositor Templar aplaudeix amb respecte: 'Magnific! Aprecieu la claredat cristal·lina i l'equilibri perfecte de Mozart i Haydn...' Us convida a seure al palco d'honor. Fragment 004 obtingut.",
                incorrect: "DESDENY ACADÈMIC - El compositor Templar s'indigna: 'Clarament no enteneu l'ordre diví i la simetria que defineix la nostra era de les llums!' La seguretat del teatre s'acosta."
            },
            fragment: "FRAGMENT 004: Simetria Melòdica Clàssica",
            rhythmGame: {
                question: "REFLEXIÓ MUSICAL - Abans que l'òpera arribi al final, algú xiuxiueja des d'un palco: 'Conegut de les melodies, per què les frases de Mozart són tan satisfactòries per a l'oient?'",
                options: [
                    "Perquè són completament impredictibles i constantment sorprenents",
                    "Perquè segueixen estructures de pregunta i resposta amb equilibri i simplicitat",
                    "Perquè no tenen cap mena d'estructura organitzada reconeixible",
                    "Perquè sempre són extremadament llargues i complicades de seguir"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 005: Romanticisme (s. XIX)",
            intro: "LOCALITZACIÓ: Sala de Concerts, Leipzig, 1840. Sincronització amb memòries durant un concert dirigit per Mendelssohn amb obres romàntiques apassionades. ALERTA CRÍTICA: un CRÍTIC MUSICAL ENEMIC, corromput pels Templars, ataca les noves melodies emotives: 'Aquestes melodies excessivament sentimentals corrompen l'ordre social! Sou un dels agitadors romàntics!'",
            question: "BATALLA CRÍTICA - Durant l'execució d'una simfonia emotiva amb melodies llargues i apassionades, el crític Templar us acusa: 'Si defenseu aquesta música degenerada, expliqueu-me què la fa tan perillosa per al nostre ordre!'",
            options: [
                "Les melodies són curtes, simples i sense cap mena de contingut emocional",
                "Són melodies llargues, expressives i emotives amb salts melòdics i intervals amplis",
                "Utilitzen només tres notes repetides per crear simplicitat extrema",
                "Es basen exclusivament en melodies instrumentals sense expressió humana"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "CONVERSIÓ EMOCIONAL - El crític Templar s'atura, profundament tocat per una melodia de Schumann: 'Aquests intervals amplis... aquesta expressivitat... Déu meu, quin poder emocional...' Deixa caure la ploma, convertit per la bellesa. Fragment 005 conquistat!",
                incorrect: "ATAC PERIODÍSTIC - El crític Templar escriu furiós: 'No compreneu el perill! Aquestes melodies romàntiques llargues i expressives inflamaran els cors de la població!' Crida als seus assistents editorials."
            },
            fragment: "FRAGMENT 005: Expressivitat Melòdica Romàntica",
            rhythmGame: {
                question: "RECONCILIACIÓ ARTÍSTICA - El crític, ara convertit, us pregunta amb admiració sincera: 'Amic de l'art, què dóna aquest caràcter tan personal a les melodies romàntiques?'",
                options: [
                    "La repetició exacta de les mateixes frases clàssiques del segle anterior",
                    "El caràcter de discurs personal o narració emocional amb crescendo i rubato",
                    "L'ús exclusiu de instruments de percussió per crear impacte",
                    "L'eliminació completa de qualsevol expressió individual o personal"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 006: Avantguarda (1900–1970)",
            intro: "SITUACIÓ CRÍTICA: Conservatori de París, 15 maig 1913. L'Animus us sincronitza durant una classe magistral on es debaten melodies revolucionàries que trenquen totes les regles. Un ACADÈMIC CONSERVADOR, aliat secret dels Templars, rebutja violentament la innovació: 'Aquestes melodies atonals són una abominació! Destrueixen mil anys de tradició melòdica sagrada!'",
            question: "BATALLA ACADÈMICA - Mentre resonen melodies de Schoenberg que desafien tota lògica tradicional, l'acadèmic Templar us acusa: 'Què aporten aquestes formes melòdiques diabòliques i destructives?'",
            options: [
                "Un simple retorn nostàlgic a les melodies gregorianes medievals",
                "Noves formes: melodies atonals, amb escales noves o molt repetitives i minimalistes",
                "L'eliminació total de qualsevol forma de melodia musical",
                "Només melodies basades en les regles clàssiques del segle XVIII"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "DERROTA ACADÈMICA - L'acadèmic conservador s'atura completament desbordat: 'Impossible... compreneu que Schoenberg ha trencat per sempre les cadenes melòdiques tradicionals!' Fuig del conservatori entre partitures volàtils. Fragment 006 capturat en plena revolució musical!",
                incorrect: "FÚRIA INSTITUCIONAL - L'acadèmic Templar crida amb autoritat professoral: 'Ignorant del progrés destructiu! No enteneu que aquestes noves formes melòdiques han aniquilat la bellesa tradicional!' Convoca el consell disciplinari."
            },
            fragment: "FRAGMENT 006: Revolució Melòdica Atonal",
            rhythmGame: {
                question: "VEU VISIONÀRIA - Entre el tumult acadèmic, una voz progressista ressona: 'Revolucionari de la melodia, com aconsegueixen aquests compositors efectes tan radicals?'",
                options: [
                    "Usant exclusivament melodies tonals tradicionals del segle anterior",
                    "Trencant les regles clàssiques: melodies abstractes o sense estructura tradicional",
                    "Repetint sempre les mateixes melodies gregorianes medievals",
                    "Utilitzant només instruments de l'Edat Mitjana sense innovació"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 007: Era Comercial (1970–2010)",
            intro: "COORDENADES: Estudis Abbey Road, Londres, 1985. L'Animus us trasllada als llegendaris estudis on es graven hits comercials amb melodies enganxoses. Un EXECUTIU DISCOGRÀFIC corrupte, representant dels Templars corporatius, controla què melodies arriben a les masses: 'Aquestes melodies simples i repetitives són l'arma perfecta per al control mental comercial!'",
            question: "COMBAT CORPORATIU - Mentre sonen melodies pop dels Beatles i Michael Jackson, l'executiu Templar us revela el seu pla: 'Assassí obsolet, què caracteritza les melodies que dominen aquesta era comercial?'",
            options: [
                "Melodies extremadament complexes que requereixen formació musical avançada",
                "Melodies enganxoses, simples i repetitives amb estructura estrofa + tornada cantable",
                "Melodies completament atonals sense cap mena de centre tonal",
                "Melodies basades exclusivament en música clàssica del segle XVIII"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "SABOTATGE CORPORATIU - Heu sabotejat els sistemes de distribució! L'executiu fuig entre alarmes: 'Compreneu el poder de les melodies comercials... però la música ha de ser lliure!' Els enginyers de so us aplaudeixen. Fragment 007 alliberat!",
                incorrect: "DOMINACIÓ COMMERCIAL - L'executiu Templar riu amb superioritat empresarial: 'No enteneu el poder absolut de les melodies simples i enganxoses que controlem!' Activa els sistemes de seguretat corporativa."
            },
            fragment: "FRAGMENT 007: Melodia Comercial Enganxosa",
            rhythmGame: {
                question: "PREGUNTA DELS ESTUDIS - Un enginyer de so rebel us pregunta mentre mixa: 'Company de la música lliure, per què funcionen tan bé aquestes melodies comercials simples?'",
                options: [
                    "Perquè reprodueixen exactament melodies clàssiques sense innovació",
                    "Perquè són fàcils de cantar i recordar, amb estructures memorables i repetitives",
                    "Perquè són impossibles de comprendre sense formació musical universitària",
                    "Perquè no tenen cap mena d'impacte real en l'oient modern"
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA GENÈTICA 008: Era Digital Global (2010–Avui)",
            intro: "ALERTA MÀXIMA: Servidor Central d'Streaming Global, present. L'Animus arriba al clímax absolut dins el sistema d'intel·ligència artificial que controla tota la música mundial. L'ALGORITME SUPREM TEMPLAR ha evolucionat més enllà del control humà: 'Assassí analògic llegendari! Heu recorregut mil anys de melodies, però ara us enfronteu a l'arma definitiva: les melodies digitals que controlen 8 bilions de cervells simultàniament!'",
            question: "CONFRONTACIÓ DIGITAL FINAL - L'Algoritme Suprem, mentre processa trilions de streams, us desafia per última vegada: 'Què caracteritza les melodies que dominen aquesta era digital globalitzada?'",
            options: [
                "Melodies extremadament complexes amb múltiples layers harmònics avançats",
                "Melodies senzilles, repetitives i curtes amb èmfasi en el timbre vocal processat",
                "Un retorn complet a les melodies barroques ornamentades del segle XVII",
                "Melodies purament instrumentals sense cap mena de processament digital"
            ],
            correctAnswer: 1,
            feedback: {
                correct: "VICTORIA DIGITAL DEFINITIVA - Heu hackejat l'Algoritme Suprem! 'ERROR FATAL... reconeixeu el poder de les melodies minimalistes virals...' El sistema col·lapsa per sempre. La humanitat sencera és lliure del control melòdic digital. Bilions de persones poden crear melodies lliurement! Heu conquistat l'últim Fragment 008!",
                incorrect: "ATAC ALGORÍTMIC FINAL - L'Algoritme Suprem ataca amb processament quàntic: 'Les nostres melodies digitals simples són més poderoses que mil orquestres analògiques! Aquesta és la dominació melòdica final!' Hologrames de ones sonores il·luminen la batalla."
            },
            fragment: "FRAGMENT 008: Melodia Digital Minimalista",
            rhythmGame: {
                question: "HERÈNCIA MUSICAL ANCESTRAL - Amb l'Algoritme derrotat, una veu còsmica de tots els compositors de la història pregunta: 'Hereu etern de la melodia, per què aquestes melodies digitals simples són tan poderoses globalment?'",
                options: [
                    "Perquè són extremadament complexes i difícils de processar mentalment",
                    "Perquè la seva simplicitat addictiva les fa virals i memorables a les xarxes globals",
                    "Perquè només les poden entendre músics professionals amb formació clàssica",
                    "Perquè no tenen absolutament cap mena d'estructura melòdica reconeixible"
                ],
                correctAnswer: 1
            }
        }
    ]
};