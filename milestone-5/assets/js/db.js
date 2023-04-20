const contacts = [
  {
    name: 'Groot',
    avatar: 'groot.png',
    id: 0,
    inputMessage : "",
    answers : [
      "Io sono Groot",
      "Io sono Groooot!",
    ],
    messages: [
      {
        date: '10/01/2023',
        time: '12:25',
        message: 'Chi sei?',
        status: 'sent',
        dropdownVisible : false,
      },
      {
        date: '10/01/2023',
        time: '12:30',
        message: 'Io sono Groot',
        status: 'received',
        dropdownVisible : false,
      }
    ],
  },
  {
    name: 'Steve Rogers',
    avatar: 'captain-america.png',
    id: 1,
    inputMessage : "",
    answers : [
      "Non sono fedele a nulla se non al sogno americano",
      "Un soldato, anche se è un super soldato, è forte come i suoi ideali e come i suoi sogni",
      "Non abbiamo scelta. Quindi combattiamo e vinciamo. Non ci sono opzioni secondarie",
      "La forza del mio Paese non sta nelle sue fondamenta di mattoni e acciaio. Si trova nel cuore di coloro che hanno giurato di combattere per la loro libertà",
      "Non importa cosa succederà domani, promettimi solo una cosa, che resterai dove sei. Non come un soldato perfetto, ma come un brav'uomo",
    ],
    messages: [
      {
        date: '15/03/2023',
        time: '21:35',
        message: 'Tu non ti arrendi mai vero?',
        status: 'sent',
        dropdownVisible : false,
      },
      {
        date: '15/03/2023',
        time: '21:40',
        message: 'Ho tutto il giorno libero',
        status: 'received',
        dropdownVisible : false,
      }
    ],
  },
  {
    name: 'Tony Stark',
    avatar: 'ironman.png',
    id: 2,
    inputMessage : "",
    answers : [
      "Te l'ho detto. Non voglio unirmi alla tua boyband super segreta",
      "Non basta essere contrari, devi essere a favore di qualcosa di meglio",
      "Sono io, sono l'oggetto volante non identificato!",
      "A volte devi correre, anche prima di imparare a camminare",
      "Seguire le regole non è mai stato il mio stile",
      "Ho aperto gli occhi. Mi sono reso conto che devo offrire di più a questo mondo oltre alle cose che esplodono",
    ],
    messages: [
      {
        date: '28/03/2023',
        time: '10:10',
        message: 'Sei grosso con l\'armatura, senza quella cosa sei?',
        status: 'sent',
        dropdownVisible : false,
      },
      {
        date: '28/03/2023',
        time: '10:15',
        message: 'Un genio, miliardario, playboy, filantropo',
        status: 'received',
        dropdownVisible : false,
      }
    ],
  },
  {
    name: 'Thor',
    avatar: 'thor.png',
    id: 3,
    inputMessage : "",
    answers : [
      "I vostri avi la chiamavano magia e voi la chiamate scienza. Io provengo da un luogo dove sono la medesima cosa",
      "Se alcuni mortali arrivano senza essere stati invitati ad Asgard nel nome di coloro che credono di essere potenti, entro un'ora impareranno qual è il vero potere",
      "Mi serve un cavallo",
      "Questa forma mortale si è indebolita, mi occorre nutrimento!",
    ],
    messages: [
      {
        date: '12/05/2023',
        time: '14:32',
        message: 'Mi presti la Stormbreaker?',
        status: 'sent',
        dropdownVisible : false,
      },
      {
        date: '12/05/2023',
        time: '14:34',
        message: 'Come osi mandare un messaggio al figlio di Odino?',
        status: 'received',
        dropdownVisible : false,
      }
    ],
  },
  {
    name: 'Hulk',
    avatar: 'hulk.png',
    id: 4,
    inputMessage : "",
    answers : [
      "HULK SPACCA!",
      "Mi stai facendo arrabbiare. Non ti piacerà vedermi arrabbiato",
      "Piccolo umano!",
      "Hulk mangia testa Rhino. Testa non buona. Hulk pentito",
    ],
    messages: [
      {
        date: '07/06/2023',
        time: '17:16',
        message: 'Cosa fa Hulk?',
        status: 'sent',
        dropdownVisible : false,
      },
      {
        date: '07/06/2024',
        time: '18:04',
        message: 'HULK SPACCA!',
        status: 'received',
        dropdownVisible : false,
      }
    ],
  },
  {
    name: 'Peter Parker',
    avatar: 'spiderman.png',
    id: 5,
    answers : [
      "Qualunque cosa io faccia, e per quanto io mi sforzi, le persone che amo sono sempre quelle che pagano",
      "Da un grande potere, derivano grandi responsailità",
      "Il mio senso di ragno è in allerta!",
      "Sono le decisioni che ci rendono quello che siamo e possiamo sempre scegliere di fare la cosa giusta",
      "Se puoi fare qualcosa di buono per gli altri, hai l'obbligo di farlo",
    ],
    inputMessage : "",
    messages: [
      {
        date: '10/06/2023',
        time: '15:35',
        message: 'Peter puoi salutare i miei amici?',
        status: 'sent',
        dropdownVisible : false,
      },
      {
        date: '10/06/2023',
        time: '15:50',
        message: 'Un saluto dal vostro amichevole spiderman di quartiere!',
        status: 'received',
        dropdownVisible : false,
      }
    ],
  },
  {
    name: 'Natasha Romanoff',
    avatar: 'black-widow.png',
    id: 6,
    answers : [
      "Ho vissuto molte vite, ma non voglio fuggire dal passato",
      "A un certo punto bisogna scegliere tra quello che il mondo vuole che tu sia e chi sei veramente",
      "Volevo fare qualcosa di buono: essere più di una killer esperta",
      "Una volta non avevo niente. Poi ho avuto questo lavoro, questa famiglia. Ma niente dura per sempre",
      "Non sai tutto di me. Gli Avengers non erano la mia prima famiglia",
    ],
    inputMessage : "",
    messages: [
      {
        date: '22/09/2023',
        time: '11:32',
        message: 'Abbiamo dei conti in sospeso, dobbiamo tornare dove tutto è iniziato',
        status: 'received',
        dropdownVisible : false,
      },
      {
        date: '22/09/2023',
        time: '11:48',
        message: 'Che fortuna!',
        status: 'sent',
        dropdownVisible : false,
      },
      {
        date: '22/09/2023',
        time: '12:14',
        message: 'Una cosa è certa: sarà una bella rimpatriata',
        status: 'received',
        dropdownVisible : false,
      }
    ],
  },
  {
    name: 'T\'Challa',
    avatar: 'black-panther.png',
    id: 7,
    answers : [
      "Sono più le cose che ci uniscono, che quelle che ci dividono. In tempo di crisi, i saggi fanno ponti e gli stupidi innalzano barriere",
      "Un padre che non ha preparato suo figlio alla propria morte è un padre che ha sbagliato",
      "Wakanda per sempre!",
      "Nella mia cultura, la morte non è la fine",
    ],
    inputMessage : "",
    messages: [
      {
        date: '28/09/2023',
        time: '09:42',
        message: 'Hai attaccato il telefono in faccia alla regina?',
        status: 'sent',
        dropdownVisible : false,
      },
      {
        date: '28/09/2023',
        time: '09:56',
        message: 'Ho attaccato in faccia a mia madre',
        status: 'received',
        dropdownVisible : false,
      }
    ],
  },
  {
    name: 'Visione',
    avatar: 'vision.png',
    id: 8,
    answers : [
      "Cos'è il dolore se non l'amore che persiste?",
      "Sono stato una voce senza corpo, un corpo ma non umano e ora un ricordo, diventato realtà. Chissà cos'altro potrò essere",
      "Non sono Ultron. Non sono nemmeno Jarvis. Io sono...io sono",
      "Gli umani sono strani. Credono che l'Ordine e Caos siano in qualche modo opposti. E cercano di controllare ciò che non si può, ma c'è grazia nei loro fallimenti",
    ],
    inputMessage : "",
    messages: [
      {
        date: '14/10/2023',
        time: '22:10',
        message: 'Come hai fatto a sollevare il Mjolnir?',
        status: 'sent',
        dropdownVisible : false,
      },
      {
        date: '14/10/2023',
        time: '22:15',
        message: 'Con quella che credo nel vostro vocabolario si chiami "mano"',
        status: 'received',
        dropdownVisible : false,
      }
    ],
  },
  {
    name: 'Stephen Strange',
    avatar: 'doctor-strange.png',
    id: 9,
    answers : [
      "Qual era la nostra situazione in questo universo?",
      "Ho fatto quello che dovevo per proteggere il nostro mondo",
      "Dormammu! Sono venuto a patteggiare!",
      "Non c'è limite all'impossibile",
      "Apri la mente, cambia la realtà",
      "Metti in dubbio la realtà, cambia il tuo destino"
    ],
    inputMessage : "",
    messages: [
      {
        date: '11/12/2023',
        time: '13:52',
        message: 'Dormammu! Sono venuto a patteggiare!',
        status: 'received',
        dropdownVisible : false,
      },
      {
        date: '11/12/2023',
        time: '14:28',
        message: 'Mi sa che hai sbagliato chat',
        status: 'sent',
        dropdownVisible : false,
      },
      {
        date: '11/12/2023',
        time: '15:16',
        message: 'Ops, scusami!',
        status: 'received',
        dropdownVisible : false,
      }
    ],
  }
]

export {contacts}
