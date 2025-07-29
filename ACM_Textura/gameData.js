// Dades de les èpoques per als popups (VERSIÓ TEXTURA)
const eraData = {
    0: {
        title: "EDAT MITJANA (s. IX – XV)",
        location: "Monestir Benedictí, Europa Central",
        year: "1180 D.C.",
        context: "L'Animus ha detectat memòries d'un avantpassat infiltrat en un monestir. La seva missió és entendre el teixit sonor d'una època on la música començava a guanyar capes.",
        objectives: [
            "Comprendre la textura monofònica.",
            "Investigar l'aparició de la primera polifonia (Organum).",
            "Recuperar el Fragment de la Textura Monofònica."
        ],
        threats: "Cavallers Templars custodien els secrets musicals del monestir.",
        musicInfo: "La textura bàsica és la monofonia (una sola línia melòdica). Més tard, apareix l'organum, una primera forma de polifonia on una segona veu es mou paral·lelament a la principal, creant un teixit més gruixut."
    },
    1: {
        title: "RENAIXEMENT (s. XV – XVI)",
        location: "Palau Medici, Florència",
        year: "1520 D.C.",
        context: "Sincronització amb una festa a Florència. El Renaixement desenvolupa un teixit musical complex on totes les veus tenen la mateixa importància, però un Assassí renegat vol robar aquest coneixement.",
        objectives: [
            "Analitzar la textura polifònica imitativa.",
            "Sobreviure a l'enfrontament amb l'assassí renegat.",
            "Recuperar el Fragment de la Polifonia."
        ],
        threats: "Assassí renegat treballant per Borgia, expert en l'art del contrapunt i el combat.",
        musicInfo: "La textura predominant és la polifonia imitativa. Totes les veus són igual d'importants i s'imiten entre elles, creant un teixit dens però equilibrat, com un tapís de fils entrellaçats."
    },
    2: {
        title: "BARROC (s. XVII – inicis XVIII)",
        location: "Palau de Versalles, França",
        year: "1685 D.C.",
        context: "Infiltració en un ball reial de Lluís XIV. La textura musical es polaritza: una melodia principal brilla sobre un acompanyament sòlid. Un espia Templar protegeix aquest secret.",
        objectives: [
            "Comprendre la textura de melodia acompanyada.",
            "Diferenciar-la del contrapunt barroc (fuga).",
            "Obtenir el Fragment de la Melodia Acompanyada."
        ],
        threats: "Espia Templar de rang superior, mestre de l'esgrima i de l'anàlisi musical.",
        musicInfo: "Neix la textura de melodia acompanyada. Una melodia principal destaca sobre un acompanyament (el baix continu). No obstant, la polifonia complexa sobreviu en formes com la fuga de Bach."
    },
    3: {
        title: "CLASSICISME (s. XVIII)",
        location: "Sala de Concerts, Viena",
        year: "1784 D.C.",
        context: "Un concert de Mozart a Viena. La textura musical busca la claredat i l'elegància absolutes. Un noble Templar sospita de la teva presència.",
        objectives: [
            "Identificar la textura homofònica clàssica.",
            "Analitzar la simplicitat de l'acompanyament (Baix d'Alberti).",
            "Recuperar el Fragment de la Textura Homofònica."
        ],
        threats: "Noble austríac amb connexions Templars, obsessionat amb l'ordre i la perfecció sonora.",
        musicInfo: "Predomina la textura homofònica (melodia acompanyada) de forma gairebé exclusiva. Es busca la claredat: una melodia principal molt clara i un acompanyament senzill i ordenat (acords, arpegis com el Baix d'Alberti)."
    },
    4: {
        title: "ROMANTICISME (s. XIX)",
        location: "Saló Parisenc, França",
        year: "1847 D.C.",
        context: "Saló íntim on Chopin interpreta obres apassionades. La textura es torna densa, rica i dramàtica, amb grans contrastos. Un Assassí renegat vol destruir aquesta expressivitat.",
        objectives: [
            "Comprendre la textura densa i contrastant del piano romàntic.",
            "Sobreviure a l'atac de l'assassí renegat.",
            "Obtenir el Fragment de la Textura Densa."
        ],
        threats: "Assassí renegat emocionalment inestable, que menysprea la complexitat textural.",
        musicInfo: "La textura es fa molt més rica, densa i variada. Hi ha grans contrastos, des de melodies solitàries fins a blocs massius d'acords. El piano permet crear múltiples capes sonores simultàniament."
    },
    5: {
        title: "AVANTGUARDA (1900–1970)",
        location: "Théâtre des Champs-Élysées, París",
        year: "29 Maig 1913",
        context: "Estrena escandalosa de 'La Consagració de la Primavera'. La textura es trenca en mil bocins: blocs de so, punts aïllats... Un Gran Mestre Templar vol aprofitar el caos.",
        objectives: [
            "Analitzar les noves textures experimentals (clusters, puntillisme).",
            "Derrotar el Gran Mestre Templar.",
            "Capturar el Fragment de la Textura Experimental."
        ],
        threats: "Gran Mestre Templar que vol utilitzar les textures caòtiques per al control mental.",
        musicInfo: "Es trenca amb les textures tradicionals. Apareixen el puntillisme (sons aïllats), els clusters (raïms de notes), la micropolifonia (masses sonores) i jocs amb el silenci."
    },
    6: {
        title: "ERA ELECTRÒNICA (1970–2010)",
        location: "Club Underground, South Bronx",
        year: "1979 D.C.",
        context: "Naixement del hip-hop. La textura es construeix per capes rítmiques i melòdiques (loops). Abstergo Industries vol utilitzar aquestes textures repetitives per hipnotitzar les masses.",
        objectives: [
            "Comprendre la textura per capes (layering).",
            "Sabotejar el pla d'Abstergo.",
            "Alliberar el Fragment de la Textura en Capes."
        ],
        threats: "Agent d'Abstergo amb tecnologia de manipulació sonora.",
        musicInfo: "En la música popular, la textura es basa en capes (layering): una secció rítmica (baix, bateria), una harmònica (guitarra, teclat) i la melodia principal. A l'electrònica, es basa en la superposició de loops."
    },
    7: {
        title: "ERA DIGITAL GLOBAL (2010–Avui)",
        location: "Megacitat Globalitzada",
        year: "Present",
        context: "Confrontació final. La textura de la música urbana actual és minimalista i atmosfèrica, jugant amb l'espai i el silenci. El Gran Mestre Suprem vol utilitzar aquest buit per dominar el món.",
        objectives: [
            "Comprendre la textura minimalista i atmosfèrica.",
            "Derrotar el líder suprem dels Templars.",
            "Obtenir el Fragment de la Textura Atmosfèrica."
        ],
        threats: "Gran Mestre Suprem amb tecnologia de creació de paisatges sonors hipnòtics.",
        musicInfo: "En estils com el trap, R&B alternatiu o pop actual, la textura sol ser minimalista i atmosfèrica. Pocs elements, molt processats amb efectes (reverb, delay) i un ús conscient de l'espai i el silenci."
    }
};

// Dades principals del joc (VERSIÓ TEXTURA)
const gameData = {
    currentChapter: 0,
    lives: 3,
    fragments: [],
    chapters: [
        {
            title: "MEMÒRIA 001: Edat Mitjana",
            intro: "ANIMUS: Sincronitzant memòria d'un monestir, 1180. Objectiu: analitzar la textura musical medieval. Alerta: presència Templar confirmada.",
            question: "Un Cavaller Templar us intercepta: 'Intrús! Si no sou un espia, descriviu la textura del nostre cant sagrat!'",
            options: [
                "Una melodia principal acompanyada per acords complexos de llaüt.",
                "És monofònica: una única línia melòdica cantada per tots a l'uníson.",
                "Un teixit dens de múltiples melodies independents i molt elaborades.",
                "Un ritme de percussió constant amb una melodia simple per sobre."
            ],
            correctAnswer: 1,
            feedback: {
                correct: "SINCRONITZACIÓ EXITOSA - El Templar assenteix: 'Correcte. La puresa d'una sola veu. Podeu passar.' Heu recuperat el secret de la monofonia.",
                incorrect: "ALERTA - El Templar desembaina l'espasa: 'Fals! La nostra música és una sola veu cap a Déu, no un embolic de sons! Guàrdies!'"
            },
            fragment: "FRAGMENT 001: Textura Monofònica",
            rhythmGame: {
                question: "Un monjo ancià us pregunta en veu baixa: 'Germà, i com evoluciona la nostra textura per fer-la més solemne i plena?'",
                options: [
                    "Afegint molts instruments de percussió.",
                    "Amb l'organum, afegint una veu paral·lela per crear un primer teixit polifònic.",
                    "Fent que la melodia sigui molt més ràpida i complexa.",
                    "Eliminant totes les veus menys una per donar-li més força."
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA 002: Renaixement",
            intro: "UBICACIÓ: Florència, 1520. Infiltració en una festa dels Medici. Un Assassí Renegat us enfronta: 'Els secrets del teixit polifònic seran meus!'",
            question: "Mentre dueleu, el renegat us repta: 'Si ets digne del Credo, digues-me com es teixeix la música en aquesta gloriosa època!'",
            options: [
                "Una veu principal molt clara i un acompanyament instrumental simple.",
                "És una polifonia on totes les veus tenen la mateixa importància i s'imiten.",
                "Sempre és una sola melodia, com a l'Edat Mitjana.",
                "Un so caòtic i experimental amb moltes dissonàncies."
            ],
            correctAnswer: 1,
            feedback: {
                correct: "VICTÒRIA - El renegat baixa la seva fulla: 'Entens l'equilibri... el teixit perfecte. Has guanyat.' Fragment de la polifonia recuperat.",
                incorrect: "PERILL - El renegat riu: 'Ignorant! El nostre art és l'equilibri de les veus, no el domini d'una sola! Ara moriràs!'"
            },
            fragment: "FRAGMENT 002: Textura Polifònica Imitativa",
            rhythmGame: {
                question: "Abans de fugir, el renegat pregunta: 'I quina és la sensació que produeix aquesta textura polifònica, Assassí?'",
                options: [
                    "Una sensació de buit i simplicitat extrema.",
                    "Un teixit ric, ple i fluid, on cap veu destaca sobre les altres.",
                    "Una melodia clara i fàcil de seguir per a tothom.",
                    "Un ritme molt marcat i ballable que convida a la dansa."
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA 003: Barroc",
            intro: "SINCRONITZACIÓ: Palau de Versalles, 1685. Un espia Templar us descobreix durant un ball reial: 'Assassí! Els secrets de la nova textura barroca estan sota la nostra custòdia!'",
            question: "L'espia us ataca amb el seu floret: 'Demostra el teu coneixement! Quina és la gran innovació textural de la nostra època?'",
            options: [
                "El retorn a la monofonia pura, eliminant totes les altres veus.",
                "La textura de melodia acompanyada, amb una melodia principal que brilla sobre un baix continu.",
                "La creació de textures exclusivament amb instruments de percussió.",
                "L'eliminació de la melodia per centrar-se només en el ritme."
            ],
            correctAnswer: 1,
            feedback: {
                correct: "MISSIÓ REEIXIDA - L'espia fa una reverència: 'Impressionant. Coneixeu la claredat de la melodia acompanyada.' Desapareix entre els cortesans. Fragment recuperat.",
                incorrect: "ALERTA - L'espia us acorrala: 'Incorrecte! No entens la polaritat entre la melodia i el baix! No ets digne d'aquest coneixement!'"
            },
            fragment: "FRAGMENT 003: Textura de Melodia Acompanyada",
            rhythmGame: {
                question: "Una dama de la cort us xiuxiueja: 'Monsieur, i què passa amb la vella polifonia en aquesta època tan moderna?'",
                options: [
                    "Desapareix per complet, es considera antiquada.",
                    "Sobreviu i assoleix la seva màxima perfecció en formes complexes com la fuga.",
                    "Només s'utilitza en la música militar per a les desfilades.",
                    "Es fusiona amb ritmes exòtics vinguts d'Amèrica."
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA 004: Classicisme",
            intro: "COORDENADES: Viena, 1784. Un noble Templar us observa durant un concert de Mozart. 'Foraster, la nostra música és un reflex de l'ordre i la raó. Demostreu que ho enteneu.'",
            question: "El noble us pregunta amb fredor: 'Com descriuríeu la textura de la música que sona, per assolir aquesta perfecció tan clara i elegant?'",
            options: [
                "És una textura polifònica molt densa, amb desenes de melodies entrellaçades.",
                "És una textura homofònica, amb una melodia principal clara i un acompanyament simple i ordenat.",
                "És una textura caòtica i imprevisible, plena de sorpreses constants.",
                "És una textura monofònica, on tots els instruments toquen la mateixa nota."
            ],
            correctAnswer: 1,
            feedback: {
                correct: "RECONEIXEMENT - El noble somriu lleugerament: 'Correcte. Claredat i equilibri. Sou un home de gust.' Us deixa en pau. Fragment obtingut.",
                incorrect: "HUMILIACIÓ - El noble es burla: 'Bàrbar! No teniu sensibilitat per a l'elegància i l'ordre! Guàrdies, traieu-me'l de davant!'"
            },
            fragment: "FRAGMENT 004: Textura Homofònica Clàssica",
            rhythmGame: {
                question: "Mentre marxeu, el noble afegeix: 'I quin recurs utilitza sovint l'acompanyament per a crear aquest fons tan regular i lleuger?'",
                options: [
                    "Acords molt densos i pesats tocats per tota l'orquestra.",
                    "El silenci absolut, deixant la melodia completament sola.",
                    "El Baix d'Alberti, un patró d'arpegis repetits que dona fluïdesa.",
                    "Ritmes de percussió molt forts i marcats."
                ],
                correctAnswer: 2
            }
        },
        {
            title: "MEMÒRIA 005: Romanticisme",
            intro: "LOCALITZACIÓ: Saló parisenc, 1847. Un Assassí Renegat interromp un concert de Chopin: 'Prou de sentimentalismes! El poder de la textura ha de ser meu!'",
            question: "L'assassí us ataca: 'L'ànima del Romanticisme està en el seu teixit sonor! Com és?'",
            options: [
                "És una textura simple i transparent, sempre fàcil de seguir.",
                "És una textura molt més densa, rica i plena de contrastos dramàtics que en èpoques anteriors.",
                "És idèntica a la textura del Classicisme, no hi ha cap canvi.",
                "Es basa exclusivament en el silenci, amb poques notes aïllades."
            ],
            correctAnswer: 1,
            feedback: {
                correct: "RENDICIÓ - L'assassí s'atura, emocionat: 'Sí... la densitat, la passió... ho entens.' Us lliura el fragment.",
                incorrect: "ATAC - L'assassí crida: 'No sents la tempesta de sons? La riquesa del teixit? No mereixes viure!'"
            },
            fragment: "FRAGMENT 005: Textura Densa i Contrastant",
            rhythmGame: {
                question: "Ja calmat, us pregunta: 'I quin instrument és el rei per crear aquestes textures tan plenes i complexes?'",
                options: [
                    "La flauta travessera, per la seva agilitat.",
                    "El triangle, pel seu so cristal·lí.",
                    "El piano, per la seva capacitat de tocar melodies i acompanyaments massius alhora.",
                    "La veu humana, cantant sempre en monofonia."
                ],
                correctAnswer: 2
            }
        },
        {
            title: "MEMÒRIA 006: Avantguarda",
            intro: "SITUACIÓ CRÍTICA: París, 1913. Estrena de 'La Consagració de la Primavera'. Un Gran Mestre Templar apareix entre el caos: 'Aquesta destrucció textural és la nostra arma definitiva!'",
            question: "El Gran Mestre us repta: 'Què està fent Stravinsky amb la textura tradicional, Assassí?'",
            options: [
                "Està tornant a la simplicitat de la monofonia gregoriana.",
                "Està experimentant amb noves textures com els clusters (raïms de so) i blocs sonors violents.",
                "Està copiant exactament la textura de Mozart per agradar al públic.",
                "Està fent que tota l'orquestra toqui la mateixa melodia a l'uníson."
            ],
            correctAnswer: 1,
            feedback: {
                correct: "DERROTA TEMPLAR - El Gran Mestre crida: 'Impossible! Has entès el poder de la textura com a massa sonora!' Desapareix. Fragment capturat.",
                incorrect: "FÚRIA - El Gran Mestre riu: 'Ignorant! No veus que ha convertit el teixit en una arma? El futur és nostre!'"
            },
            fragment: "FRAGMENT 006: Textura Experimental (Clusters)",
            rhythmGame: {
                question: "Una veu misteriosa us pregunta entre el tumult: 'I quina altra textura experimental utilitzen compositors com Webern, que sembla feta de punts sonors aïllats?'",
                options: [
                    "La melodia acompanyada tradicional.",
                    "La textura de 'puntillisme', on els sons apareixen com punts dispersos.",
                    "La polifonia imitativa del Renaixement.",
                    "La monofonia estricta."
                ],
                correctAnswer: 1
            }
        },
        {
            title: "MEMÒRIA 007: Era Electrònica",
            intro: "COORDENADES: South Bronx, 1979. Un agent d'Abstergo us enfronta en un club de hip-hop: 'Amb aquests loops, controlarem la textura de la seva realitat!'",
            question: "L'agent us ataca amb un dispositiu sonor: 'Com es construeix la textura en la música popular d'aquesta era, Assassí?'",
            options: [
                "És sempre una textura monofònica, amb un sol instrument.",
                "Es basa en la superposició de capes (layering): una base rítmica, una harmònica i la melodia.",
                "És una polifonia complexa amb 12 veus independents, com al Renaixement.",
                "No hi ha textura, només silenci."
            ],
            correctAnswer: 1,
            feedback: {
                correct: "SABOTATGE REEIXIT - L'agent crida: 'Ha entès el poder de les capes!' El seu dispositiu explota. Fragment alliberat.",
                incorrect: "CONTROL MENTAL - L'agent somriu: 'No entens com funciona el layering. Ara la teva ment és meva.'"
            },
            fragment: "FRAGMENT 007: Textura en Capes (Layering)",
            rhythmGame: {
                question: "Un DJ local us pregunta: 'Ei, germà! I a la música electrònica, com anomenem a aquestes capes que es repeteixen constantment?'",
                options: [
                    "Sonates.",
                    "Fugues.",
                    "Loops (bucles).",
                    "Àries."
                ],
                correctAnswer: 2
            }
        },
        {
            title: "MEMÒRIA 008: Era Digital",
            intro: "ALERTA MÀXIMA: Megacitat global, present. El Gran Mestre Suprem dels Templars us espera. 'Benvingut al final, Assassí. Benvingut a la meva textura... el buit controlat.'",
            question: "La batalla final comença. 'Com és la textura que domina el món a través de la música urbana actual, Assassí?'",
            options: [
                "És una textura extremadament densa i complexa, amb orquestres simfòniques completes.",
                "És una textura minimalista i atmosfèrica, amb pocs elements i un gran ús de l'espai i els efectes.",
                "És una rèplica exacta de la polifonia del Renaixement.",
                "És sempre monofònica, amb una sola veu cantant a cappella."
            ],
            correctAnswer: 1,
            feedback: {
                correct: "VICTÒRIA DEFINITIVA - El Gran Mestre es desintegra: 'No! Has comprès el poder del menys és més...' La humanitat és lliure. Fragment final recuperat!",
                incorrect: "DERROTA - El Gran Mestre riu: 'No entens el poder del buit, de l'atmosfera. És el llenç perfecte per al nostre control!'"
            },
            fragment: "FRAGMENT 008: Textura Minimalista i Atmosfèrica",
            rhythmGame: {
                question: "Una veu ancestral ressona: 'Hereu de la Textura, qui és el gran arquitecte d'aquests paisatges sonors en l'era digital?'",
                options: [
                    "El compositor que escriu la partitura en un pergamí.",
                    "El director d'orquestra amb la seva batuta.",
                    "El productor musical, que esculpeix el so i decideix quines capes sonen.",
                    "El cantant, que ho decideix tot de manera improvisada."
                ],
                correctAnswer: 2
            }
        }
    ]
};
