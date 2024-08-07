

const db = [
    {
        "name": "Dallas Mavericks",
        "logo": "https://1000marcas.net/wp-content/uploads/2020/03/Logo-Dallas-Mavericks-640x400.png",
        "players": ["Luka Doncic", "Klay Thomsonp", "Kyrie Irving", "Dereck Lively II", "Daniel Gafford", "P.J Washinton", "Maxi Kleber", "Jaden Hardy", "Quentin Grimes", "Dwight Powell", "Markieff Morris", "Dante Exum", "Naji Marshall", "Melvin Ajinca", "Alex Fudge", "A.J Lawson"]
    },
    {
        "name": "Denver Nuggets",
        "logo": "https://1000marcas.net/wp-content/uploads/2020/02/Denver-Nuggets-Logo-1.png",
        "players": ["Nicola Jokic", "Jamal Murray", "Aaron Gordon", "Christian Braun", "Michael Porter JR.", "DeAndre Jordan", "DaRon Holmes II", "Peyton Watson", "Justin Holiday", "Dario Saric", "Zeque Nnaji", "Jalen Pickett", "Hunter Tyson", "Trey Alexander", "Vlato Cancar", "P.J Hall", "Jay Huff", "Braxton Key"]
    },
    {
        "name": "Golden State",
        "logo": "https://images8.alphacoders.com/770/770774.png",
        "players": ["Stephen Curry", "Buddy Hield", "Draymond Green", "Jonathan Kuminga", "Brandin Podziemski", "Andrew Wiggins", "Kyle Anderson", "Quinten Post", "Lindy Waters III", "Kevon Looney", "Moses Moody", "Gary Payton II", "Lester Quiñones", "Recee Beekman", "Gui Santos", "Daeqwon Plowden", "De Anthony Melton", "Jerome Robinson", "Usman Garuba", "Trayce Jackson-Davis", "Pat Spencer"]
    },
    {
        "name": "Houston Rockets",
        "logo": "https://1000logos.net/wp-content/uploads/2017/12/Houston-Rockets-Logo-2003.jpg",
        "players": ["Jalen Green", "Fred VanVleet", "Jabari Smith Jr.", "Dillon Brooks", "Alperen Sengun", "Tari Eason", "Amen Thompson", "Jock Landale", "Cam Whitmore", "Kevin Porter Jr.", "Jae'Sean Tate", "Aaron Holiday", "Boban Marjanovic", "Jeff Green", "Reggie Bullock", "Darius Days", "Nate Hinton"]
    },
    {
        "name": "Los Angeles Lakers",
        "logo": "https://www.wallpaperflare.com/static/421/711/696/los-angeles-lakers-basketball-logo-sports-wallpaper.jpg",
        "players": ["LeBron James", "Anthony Davis", "D'Angelo Russell", "Austin Reaves", "Rui Hachimura", "Jarred Vanderbilt", "Malik Beasley", "Troy Brown Jr.", "Dennis Schröder", "Mo Bamba", "Jaxson Hayes", "Max Christie", "Christie"]
    },
    {
        "name": "Los Angeles Clippers",
        "logo": "https://pixelz.cc/wp-content/uploads/2019/04/los-angeles-clippers-nba-logo-uhd-4k-wallpaper.jpg",
        "players": ["Kawhi Leonard", "Paul George", "Russell Westbrook", "Marcus Morris", "Ivica Zubac", "Terance Mann", "Nicolas Batum", "Bones Hyland", "Robert Covington", "Amir Coffey", "Jason Preston", "John Wall"]
    },
    {
        "name": "Memphis Grizzlies",
        "logo": "https://pixelz.cc/wp-content/uploads/2019/04/memphis-grizzlies-nba-logo-uhd-4k-wallpaper.jpg",
        "players": ["Ja Morant", "Desmond Bane", "Jaren Jackson Jr.", "Dillon Brooks", "Santi Aldama", "Tyus Jones", "Luke Kennard", "Ziaire Williams", "David Roddy", "Kennedy Chandler", "Xavier Tillman", "John Konchar"]
    },
    {
        "name": "Minnesota Timberwolves",
        "logo": "https://pixelz.cc/wp-content/uploads/2019/04/minnesota-timberwolves-nba-logo-uhd-4k-wallpaper.jpg",
        "players": ["Anthony Edwards", "Karl-Anthony Towns", "Rudy Gobert", "Mike Conley", "Jaden Ivey", "Nikhil Alexander-Walker", "Jaylen Nowell", "Kyle Anderson", "Torian Prince", "Naz Reid", "Luka Garza", "Josh Minott", "Leonard Miller"]
    },
    {
        "name": "Atlanta Hawks",
        "logo": "https://wallpapercg.com/download/atlanta-hawks-wallpaper--18172.jpg",
        "players": ["Trae Young", "Dejounte Murray", "John Collins", "Clint Capela", "Bogdan Bogdanović", "Sadiq Bey", "AJ Griffin", "Jalen Johnson", "Onyeka Okongwu", "Aaron Holiday", "Frank Kaminsky", "Tyrese Martin", "Darius Bazley"]
    },
    {
        "name": "Boston Celtics",
        "logo": "https://pixelz.cc/wp-content/uploads/2019/04/boston-celtics-nba-logo-uhd-4k-wallpaper.jpg",
        "players": ["Jayson Tatum", "Jaylen Brown", "Marcus Smart", "Robert Williams III", "Al Horford", "Derrick White", "Malcolm Brogdon", "Bobby Portis", "Luke Kornet", "Sam Hauser", "Payton Pritchard"]
    },
    {
        "name": "Brooklyn Nets",
        "logo": "https://pixelz.cc/wp-content/uploads/2019/04/brooklyn-nets-nba-logo-uhd-4k-wallpaper.jpg",
        "players": ["Mikal Bridges", "Cam Johnson", "Spencer Dinwiddie", "Nick Claxton", "Dorian Finney-Smith", "Joe Harris", "Seth Curry", "Royce O'Neale", "Ben Simmons", "Day'Ron Sharpe", "David Duke Jr.", "Kessler Edwards"]
    },
    {
        "name": "Charlotte Hornets",
        "logo": "https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg",
        "players": ["LaMelo Ball", "Terry Rozier", "Gordon Hayward", "Mason Plumlee", "P.J. Washington", "James Bouknight", "Jalen Duren", "Mark Williams", "Kelly Oubre Jr.", "Brandon Miller", "Nick Richards"]
    },
    {
        "name": "Detroit Pistons",
        "logo": "https://cdn.freebiesupply.com/images/large/2x/detroit-pistons-logo-transparent.png",
        "players": ["Cade Cunningham", "Jaden Ivey", "Jalen Duren", "Isaiah Stewart", "Bojan Bogdanović", "Killian Hayes", "Alec Burks", "Saddiq Bey", "James Wiseman", "Marvin Bagley III", "Kevin Knox"]
    },
    {
        "name": "Indiana Pacers",
        "logo": "https://logos-world.net/wp-content/uploads/2020/05/Indiana-Pacers-emblem.jpg",
        "players": ["Tyrese Haliburton", "Benedict Mathurin", "Buddy Hield", "Miles Turner", "Jalen Smith", "Aaron Nesmith", "Daniel Theis", "Chris Duarte", "Isaiah Jackson", "Andrew Nembhard", "Jordan Nwora"]
    },
    {
        "name": "New Jersey Nets",
        "logo": "https://logos-world.net/wp-content/uploads/2020/05/Brooklyn-Nets-Logo.png",
        "players": ["Mikal Bridges", "Cam Thomas", "Spencer Dinwiddie", "Dorian Finney-Smith", "Nic Claxton", "Royce O'Neale", "Joe Harris", "Seth Curry", "Day'Ron Sharpe"]
    },
    {
        "name": "New York Knicks",
        "logo": "https://logolook.net/wp-content/uploads/2022/03/New-York-Knicks-Logo.png",
        "players": ["Jalen Brunson", "Julius Randle", "RJ Barrett", "Mitchell Robinson", "Evan Fournier", "Quentin Grimes", "Immanuel Quickley", "Josh Hart", "Miles McBride", "Obi Toppin", "Isaiah Hartenstein"]
    },
    {
        "name": "Philadelphia 76ers",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1200px-Philadelphia_76ers_logo.svg.png",
        "players": ["Joel Embiid", "James Harden", "Tyrese Maxey", "Tobias Harris", "P.J. Tucker", "De'Anthony Melton", "Montrezl Harrell", "Paul Reed", "Shake Milton", "Jaden Springer", "Daniel House Jr."]
    },
    {
        "name": "Toronto Raptors",
        "logo": "https://images5.alphacoders.com/116/1167220.png",
        "players": ["Fred VanVleet", "Pascal Siakam", "OG Anunoby", "Scottie Barnes", "Jakob Poeltl", "Gary Trent Jr.", "Precious Achiuwa", "Malachi Flynn", "Chris Boucher", "Delano Banton", "Svi Mykhailiuk"]
    },
    {
        "name": "Chicago Bulls",
        "logo": "https://wallpapers.com/images/featured/chicago-bulls-u40a79pcvprb4rrg.jpg",
        "players": ["Zach LaVine", "DeMar DeRozan", "Nikola Vučević", "Lonzo Ball", "Ayo Dosunmu", "Patrick Williams", "Coby White", "Andre Drummond", "Torrey Craig", "Dalen Terry", "Javonte Green"]
    },
    {
        "name": "Cleveland Cavaliers",
        "logo": "https://wallpapers.com/images/hd/cleveland-cavaliers-nba-logo-we2k1ezdest1cv93.jpg",
        "players": ["Darius Garland", "Donovan Mitchell", "Evan Mobley", "Jarrett Allen", "Caris LeVert", "Isaac Okoro", "Ricky Rubio", "Cedi Osman", "Dean Wade", "Sasha Killić", "Ty Jerome"]
    },
    {
        "name": "Milwaukee Bucks",
        "logo": "https://wallpapers.com/images/featured/milwaukee-bucks-logo-sytw2b5ni0t2ysga.jpg",
        "players": ["Giannis Antetokounmpo", "Khris Middleton", "Jrue Holiday", "Brook Lopez", "Grayson Allen", "Pat Connaughton", "Joe Ingles", "Bobby Portis", "Jevon Carter", "MarJon Beauchamp", "Jordan Nwora"]
    },
    {
        "name": "Miami Heat",
        "logo": "https://wallpapers.com/images/hd/watercolor-miami-heat-poster-p82jyd9x297z8tjv.jpg",
        "players": ["Jimmy Butler", "Bam Adebayo", "Tyler Herro", "Kyle Lowry", "Duncan Robinson", "Max Strus", "Gabe Vincent", "Caleb Martin", "Haywood Highsmith", "Jovic"]
    },
    {
        "name": "Orlando Magic",
        "logo": "https://mrwallpaper.com/images/hd/orlando-magic-emblem-in-black-324trxbzlvwaph8b.jpg",
        "players": ["Paolo Banchero", "Franz Wagner", "Wendell Carter Jr.", "Markelle Fultz", "Jalen Suggs", "Cole Anthony", "Jonathan Isaac", "Mo Bamba", "Chuma Okeke", "R.J. Hampton", "Bol Bol"]
    },
    {
        "name": "New Orleans Pelicans",
        "logo": "https://pixelz.cc/wp-content/uploads/2019/04/new-orleans-pelicans-nba-logo-uhd-4k-wallpaper.jpg",
        "players": ["Zion Williamson", "Brandon Ingram", "CJ McCollum", "Jonas Valančiūnas", "Herbert Jones", "Trey Murphy III", "Jose Alvarado", "Larry Nance Jr.", "Devonte' Graham", "Naji Marshall"]
    },
    {
        "name": "San Antonio Spurs",
        "logo": "https://images2.alphacoders.com/971/971129.jpg",
        "players": ["Victor Wembanyama", "Devin Vassell", "Keldon Johnson", "Zach Collins", "Malaki Branham", "Jeremy Sochan", "Romeo Langford", "Josh Richardson", "Tre Jones", "Charles Bassey"]
    },
    {
        "name": "Phoenix Suns",
        "logo": "https://pixelz.cc/wp-content/uploads/2019/04/phoenix-suns-nba-logo-uhd-4k-wallpaper.jpg",
        "players": ["Kevin Durant", "Devin Booker", "Bradley Beal", "Deandre Ayton", "Josh Okogie", "Torrey Craig", "Grayson Allen", "Jock Landale", "Damion Lee", "Keita Bates-Diop"]
    },
    {
        "name": "Utah Jazz",
        "logo": "https://wallpaper.forfun.com/fetch/07/0721bd29ac0767f999946fcac4372256.jpeg",
        "players": ["Lauri Markkanen", "Jordan Clarkson", "Collin Sexton", "Walker Kessler", "Talen Horton-Tucker", "Kelly Olynyk", "Ochai Agbaji", "John Collins", "Jarred Vanderbilt", "Simone Fontecchio"]
    },
    {
        "name": "Oklahoma City Thunder",
        "logo": "https://pixelz.cc/wp-content/uploads/2019/04/oklahoma-city-thunder-nba-logo-uhd-4k-wallpaper.jpg",
        "players": ["Shai Gilgeous-Alexander", "Josh Giddey", "Chet Holmgren", "Luguentz Dort", "Jalen Williams", "Aleksej Pokuševski", "Kenrich Williams", "Tre Mann", "Isaiah Joe", "Darius Bazley"]
    },
    {
        "name": "Portland Trail Blazers",
        "logo": "https://c4.wallpaperflare.com/wallpaper/616/151/822/basketball-portland-trail-blazers-logo-nba-hd-wallpaper-preview.jpg",
        "players": ["Damian Lillard", "Anfernee Simons", "Shaedon Sharpe", "Jusuf Nurkić", "Jerami Grant", "Matisse Thybulle", "Cam Reddish", "Jabari Walker", "Malcolm Brogdon", "Trenton Watford"]
    }
];

const $selectTeam = document.getElementById("select-team");
const $selectPlayer = document.getElementById("select-player");
const $fragment = document.createDocumentFragment();

db.map(team => {
    console.log(team);
    console.log(team.players)
    // Crear un elmt option
    const $option = document.createElement("option");
    // Asignar el equipo como valor
    $option.value = team.name;
    // Asignar el equipo como texto
    $option.textContent = team.name;
    // Agregar el option al fragmen.to
    $fragment.append($option)
})
$selectTeam.append($fragment);




/*** Evento para agregar jugadores al seleccionar equipos ***/  
$selectTeam.addEventListener("change", (e) => {
    const selectTeamName = e.target.value
    const equipo = db.find(team => team.name === selectTeamName)
    console.log("Jugadores", equipo.players)
    $selectPlayer.innerHTML = '';
    
    // Asignar logo del equipo
    document.body.style.backgroundImage = `url(${equipo.logo})`;
    equipo.players.map(player => {
        // Crear un elmt option
    const $option = document.createElement("option");
    // Asignar el jugador como valor
    $option.value = player;
    // Asignar el jugador como texto
    $option.textContent = player;

    // Agregar el option al Select de la interfaz
    /* Usar innerHTML en lugar de append()*/
    $selectPlayer.append($option);
   
})
})


console.log($selectTeam.value)

team.player.map(player => {
    const $option = document.createElement("option");
    // Asignar el equipo como valor
    $option.value = player;
    // Asignar el equipo como texto
    $option.textContent = player;
    // Agregar el option al fragmento
    $selectPlayer.append($option)
    
})
const equipo = db.find(team => team.name === $selectTeam.value);
     if (equipo && equipo.players) {

         equipo.players.forEach(player => {
             const $option = document.createElement("option");
             $option.value = player;
             $option.textContent = player;
             $selectPlayer.appendChild($option);
         });
     }
