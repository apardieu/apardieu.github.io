/**
 * This config file contains the content of the page, i.e. the different
 * categories and their respective items.
 */
const content = [
  {
    "categoryName": {
      "en": "Work in Progress",
      "fr": "Projets en cours"
    },
    "content": [
      // {
      //   "title": {
      //     "en": "Western Polygon VR",
      //     "fr": "Western Polygon VR"
      //   },
      //   "description": {
      //       "en": ` Personnal project of a Rail Shooting Game that I'm doing on my free time to learn how to use the XR Toolkit of Unity. Picture is from " Polygon Western Frontier pack", an asset pack that I'm using to create this game
			// `,
      //     "fr": `Projet personnel de Rail Shooter en VR que je réalise sur mon temps libre pour prendre en main l'utilisation du XR Toolkit de Unity 2020. L'illustration vient du pack d'asset Unity "Polygon Western Frontier Pack" que j'utilise pour réaliser ce projet. 

      //            `
      //   },
      //   "date": "2020",
      //   "imagePath": "projects/vrshooter.png",
      //   "link": "https://assetstore.unity.com/packages/3d/environments/historic/polygon-western-frontier-pack-130564"
      // },
    ]
  },
  {
    "categoryName": {
      "en": "Realized Projects",
      "fr": "Projets terminés"
    },
    "content": [

      {
        "title": {
            "en": "Ion Odyssey",
            "fr": "Ion Odyssey"
          },
          "description": {
            "en": ` Game developped during "Scientific GameJam 2023" in Nancy. The theme of the game jam was to produce a game about a research subject of a Phd student. We developped a game about the journey of an ion that must avoid other ion while traveling in brain cells. 
               `,
            "fr": ` Jeu réalisé lors de la "Scientific GameJam 2023" à Nancy dont le thème était de réaliser un jeu en lien avec le sujet de thèse d'un doctorant. Avec mon équipe, nous avons réalisé un jeu mettant en scène un ion sodium qui doit trouver son chemin dans le corps humain en évitant les intéractions électromagnétiques avec d'autres ions. <br/><br/>J'étais chargé du développement du jeu ainsi que de l'initiation des membres de l'équipe à l'utilisaiton de Unity.
               `
          },
          "date": "2023",
          "imagePath": "projects/ion.png",
          "link": "https://fiera42.itch.io/ion-odyssey-debug"
      },

      {
        "title": {
            "en": "Hospital Mistakes Room",
            "fr": "Chambre des erreurs"
          },
          "description": {
            "en": `Serious game in VR used by nurses in hospital to learn how to find some risky situations in their patient's room. 
            <br/><br/>I developped this application with the "Risk Research" engine that I had already developped, and I added grabbing interactions.  You can click on picture to access a gameplay video.
               `,
            "fr": `Serious game en VR pour la formation des aides soignantes en milieu hospitalier. La "Chambre des erreurs" reprend un concept de formation hospitalier qui consiste à placer le soignant dans un environnement au sein duquel se trouve de nombreuses situations non conformes qu'il devra détecter afin d'assurer la qualité des soins.
            <br/><br/>Pour réaliser l'implémentation de cette application j'ai ré-utilisé l'outil des recherches de risque que j'ai précédemment développé en ajoutant des intéractions de saisies d'objets pour permettre au joueur d'observer plus facilement les éléments du décor pour trouver les erreurs. 
            <br/><br/>Cette application a été distribuée à plusieurs centres de formation et centres hospitaliers dans la région d'Aix-Marseille et Nice. Cliquez sur l'image pour voir une vidéo du gameplay du jeu.
  
               `
          },
          "date": "2022",
          "imagePath": "projects/cdm.png",
          "link": "https://2jprocess.sharepoint.com/sites/2JProcess/_layouts/15/stream.aspx?id=%2Fsites%2F2JProcess%2FDocuments%20partages%2FProduits%20standards%2FVR%2FCHAMBRE%5FDES%5FERREURS%2FTEASER%2FTeaser%5FChambre%5Fdes%5FErreurs%2Emp4&ga=1"
      },

      {
        "title": {
            "en": "Risk Searches",
            "fr": "Recherches de risques"
          },
          "description": {
            "en": ` Description in progres ...
               `,
            "fr": ` Ma principale réalisation au sein de l'entreprise 2JProcess a été la création d'un moteur permettant de réaliser différentes applications appelées "Recherches de risques". 
            <br/><br/>Ces serious game en VR visent à sensibiliser les utilisateurs aux situations à risques qu'ils peuvent trouver sur leur lieu de travail en les immergeant dans un environnement dans lesquels ils doivent retrouver ces situations à risques. Les joueurs doivent d'abord détecter le risque, spécifier sa nature et proposer une résolution parmis plusieurs possibles, le tout dans un temps impartis.
            <br/><br/>Lors de la réalisation de ce moteur j'ai travaillé sur les points suivants : 
            <br/>• Création des outils permettant la mise en place des environnements et des risques sur Unity
            <br/>• Déploiement des applications sur les casques VR Meta Quest 2, Pico Neo 2/3/4, HTC Vivre Pro ainsi que le déploiement d'une version PC
            <br/>• Création d'un outil de supervision sur tablette permettant à une personne extérieure de voir l'évolution en temps réel de la partie d'un joueur en VR
            <br/>• Conception et rédaction des documentations techniques à destination de l'équipe de production et des clients.
            <br/><br/> J'ai développé et supervisé la réalisation de 4 recherches de risques dans les environnements suivants : bureaux, entrepôt logistique, chantier et site industriel. Ces différentes applications ont été vendues à plusieurs centaines de licences à des organismes de formations et des clients grand comptes de l'entreprise.
            <br/><br/> Vous pouvez retrouver une vidéo promotionnelle en cliquant sur l'image ou voir une vidéo de gameplay en cliquant sur l'image du projet "Chambre des erreurs"



               `
          },
          "date": "2021 - 2023",
          "imagePath": "projects/rdr.png",
          "link": "https://2jprocess.sharepoint.com/sites/2JProcess/_layouts/15/stream.aspx?id=%2Fsites%2F2JProcess%2FDocuments%20partages%2FProduits%20standards%2FVR%2FRDR%5FBUREAU%2FTEASER%2FTeaser%5FRDR%5FBureau%2Emp4&ga=1"
      },

      {
			"title": {
				  "en": "Delta Race - Prototype",
				  "fr": "Delta Race - Prototype"
				},
				"description": {
					"en": `Hypercasual mobile game developed as part of a technical test for a job interview. I did everything on this game : Code, UI, Shader ... You can click on picture to access itch.io game page.
						 `,
				  "fr": `Jeu Hypercasual développé dans le cadre d'un test technique pour une offre d'emplois. J'ai tout réalisé sur ce projet : le code, l'UI, les shaders ... Le jeu est accessible sur itch.io en cliquant sur l'image.

						 `
				},
				"date": "2021",
				"imagePath": "projects/deltarace.png",
				"link": "https://apardieu.itch.io/delta-race"
			  },


 {
			"title": {
				  "en": "SpilledBeer Arena",
				  "fr": "SpilledBeer Arena"
				},
				"description": {
					"en": `SpilledBeer Arena is a medieval arcade football game, where fantastic folks fight each other with beer pints to control the realm. <br/><br/>
		This local computer game is currently developed by a team of 7 developpers as part of  video game development class. I was the team ScrumMaster but I also worked on several technical aspects of the game as character animations, movements coding, maps creation … 
						 `,
				  "fr": `SpilledBeer Arena est un jeu de foot médiéval typé arcade, dans lequel des peuples fantastiques s'affrontent à grands coups de choppes de bière pour asseoir leur domination sur le royaume.  <br/><br/>
		Ce jeu en multijoueur local a été réalisé par une équipe de 7 développeurs dans le cadre d'un cours de Maîtrise en jeux vidéo.<br/><br/> J'étais  le ScrumMaster de l'équipe, en charge de l'application de la méthodologie Scrum au sein du projet et j'ai participe également à différents aspects techniques du développement du jeu : animation des personnages, gestion des mouvements, création des cartes, ...<br/><br/>
		Le trailer est disponible en cliquant sur l'image du jeu.

						 `
				},
				"date": "2020",
				"imagePath": "projects/spilledbeer.png",
				"link": "https://youtu.be/NFB6-xOFh2Y"
			  },
              {
                  "title": {
                      "en": "CoolDown",
                      "fr": "CoolDown"
                  },
                  "description": {
                      "en": `Cool Down is a simple, but addictive game !<br/>

Keep your ice alive by dodging many obstacles !<br/>
Try not to melt before you get into your thirsty human's glass !<br/>

Use the pick-up items wisely to make your trip refreshing !`,
                      "fr": `Ce jeu a été réalisé avec Unity lors de la GameJam Ludum Dare 46, le 17 avril 2020, par 5 étudiants de maîtrise en "Conception de Jeux Vidéo" de l'Université du Québec à Chicoutimi. <br/><br/>
                Le jeu consiste à garder son glaçon intact en évitant les obstacles pour parvenir à la fin de la piste. <br/><br/>
            J'ai pour ma part travaillé sur tout le Level Design du jeu.
             
              `
                  },
                  "date": "2020",
                  "imagePath": "projects/cooldown.png",
                  "link": "https://antoria.itch.io/cooldown"

              },
      {
		  "title": {
          "en": "Beyond the last frontier",
          "fr": "Beyond the last frontier"
        },
        "description": {
            "en": `Beyond The Last Frontier is a survival/management game, centered around the survival of a traper in Northern Alaska. <br/><br/>The game features a crafting system, harvesting, shopping for equipment and selling ressources, traps for animal and hunting.

The game is a school project made at UQAC using an agile approach. We also wrote a complete Game Design Document before the actual development.`,
            "fr": `Beyond The Last Frontier est un jeu de gestion/survie, centré sur la vie d'un trappeur dans le nord de l'Alaska. <br/><br/>
                Le jeu embarque un système de craft, de récolte, de commerce d'équipements et de ressources, une gestion de la chasse et du piégeage. <br/><br/>
              Ce projet a été réalisé avec Unity sur 2 mois avec une équipe de 4 élèves dans le cadre d'un cours de "Conception de jeux vidéo". <br/><br/>
              J'ai pour ma part travaillé sur la partie graphique, la gestion de l'intelligence artificielle des animaux, la création des cartes, les intéractions du joueur avec l'environnement ... 
              `
        },
        "date": "2019",
        "imagePath": "projects/beyond.png",
        "link": "https://kathaersys.itch.io/beyond-the-last-frontier"

      }, {
          "title": {
              "en": "Pacman Adaptation",
              "fr": "Adaptation Pacman"
          },
          "description": {
              "en": `This pacman adaptation is the first project I created with Unity. <br/><br/>Realized in a week by a team of 3 students, this project has been realized "from scratch" to have some practice with Unity. I worked on graphical aspects, audio, movements ... `,
              "fr": `Cette adaptation du jeu Pacman constitue le premier projet que j’ai crée avec Unity.<br/><br/> Réalisé dans le cadre d’un cours de conception de jeux vidéos avec la participation de 3 autres étudiantes, ce projet a été réalisé « from scratch » sur une semaine et nous a permis de prendre en main le moteur Unity.<br/><br/>
              J’ai pour ma part travaillé sur une partie de la réalisation des éléments graphiques, la gestion des mouvements des collisions et du mouvement du personnage ainsi que l’intégration sonore du jeu.`
          },
          "date": "2019",
          "imagePath": "projects/pacman.png",
          "link": "https://apardieu.itch.io/pacman-adaptation"
      },


    ]
  }
]
