const stats = gameObject()

function gameObject() {
  const stats = {
    "home": {
      "teamName": "Brooklyn Nets",
      "colors": ['Black', 'White'],
      "players": {
        'Alan Anderson': {
          "number": 0,
          "shoe": 16,
          "points": 22,
          "rebounds": 12,
          "assists": 12,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 1,
        },
        'Reggie Evans': {
          "number": 30,
          "shoe": 14,
          "points": 12,
          "rebounds": 12,
          "assists": 12,
          "steals": 12,
          "blocks": 12,
          "slamDunks": 7,
        },
        'Brook Lopez': {
          "number": 11,
          "shoe": 17,
          "points": 17,
          "rebounds": 19,
          "assists": 10,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 15,
        },
        'Mason Plumlee': {
          "number": 1,
          "shoe": 19,
          "points": 26,
          "rebounds": 12,
          "assists": 6,
          "steals": 3,
          "blocks": 8,
          "slamDunks": 5,
        },
        'Jason Terry': {
          "number": 31,
          "shoe": 15,
          "points": 19,
          "rebounds": 2,
          "assists": 2,
          "steals": 4,
          "blocks": 11,
          "slamDunks": 1,
        }
      },
    },
    "away": {
      "teamName": "Charlotte Hornets",
      "colors": ['Turquoise', 'Purple'],
      "players": {
        'Jeff Adrien': {
          "number": 4,
          "shoe": 18,
          "points": 10,
          "rebounds": 1,
          "assists": 1,
          "steals": 2,
          "blocks": 7,
          "slamDunks": 2,
        },
        'Bismak Biyombos': {
          "number": 0,
          "shoe": 16,
          "points": 12,
          "rebounds": 4,
          "assists": 7,
          "steals": 7,
          "blocks": 15,
          "slamDunks": 10,
        },
        'DeSagna Diop': {
          "number": 2,
          "shoe": 14,
          "points": 24,
          "rebounds": 12,
          "assists": 12,
          "steals": 4,
          "blocks": 5,
          "slamDunks": 5,
        },
        'Ben Gordon': {
          "number": 8,
          "shoe": 15,
          "points": 33,
          "rebounds": 3,
          "assists": 2,
          "steals": 1,
          "blocks": 1,
          "slamDunks": 0,
        },
        'Brendan Haywood': {
          "number": 33,
          "shoe": 15,
          "points": 6,
          "rebounds": 12,
          "assists": 12,
          "steals": 22,
          "blocks": 5,
          "slamDunks": 12,
        }
      },
    }
  }
  return stats;
}

function numPointsScored(name) {
  for (team in stats) {
    const teamObj = stats[team];
    for (const players in teamObj) {
      const playersObj = teamObj.players;
      for (const player in playersObj) {
        const playerObj = playersObj[player]
        if (player === name) {
          return playerObj["points"]
        }
      }
    }
  }
}

function shoeSize(name) {
  for (team in stats) {
    const teamObj = stats[team];
    for (const players in teamObj) {
      const playersObj = teamObj[players];
      for (const player in playersObj) {
        const playerObj = playersObj[player]
        if (player === name) {
          return playerObj["shoe"]
        }
      }
    }
  }
}

function teamColors(teamName) {
  for (team in stats) {
    const teamObj = stats[team];
    if (teamObj.teamName === teamName) {
      return teamObj.colors
    }
  }
}

function teamNames() {
  const teamNames = [];
  for (team in stats) {
    const teamObj = stats[team];
    teamNames.push(teamObj.teamName);
  }
  return teamNames;
}

function playerNumbers(teamName) {
  const teamNumbers = [];
  for (team in stats) {
    const teamObj = stats[team];
    if (teamObj.teamName === teamName) {
      const playersObj = teamObj.players;
      for (players in playersObj) {
        teamNumbers.push(playersObj[players]["number"])
      }
    }
  }
  return teamNumbers
}
function playerStats(name) {
  for (team in stats) {
    const teamObj = stats[team];
    for (const players in teamObj) {
      const playersObj = teamObj.players;
      for (const player in playersObj) {
        const playerObj = playersObj[player]
        if (player === name) {
          return playerObj
        }
      }
    }
  }
}

function bigShoeRebounds() {
  let max = 0 ;
  let rebound = 0;
  for(team in stats){    
    const playersObj = stats[team]["players"];
    for(player in playersObj){
      if( max < playersObj[player]["shoe"]){
        max = playersObj[player]["shoe"]
        rebound = playersObj[player]["rebounds"];
      }
    }
    return rebound
}}

function mostPointsScored(){
  let max = 0 ;
  let name;
  for(team in stats){    
    const playersObj = stats[team]["players"];
    for(player in playersObj){
      if( max < playersObj[player]["points"]){
        max = playersObj[player]["points"]
        name = player;
      }
    }
  }
  return name
}

function winningTeam(){
  const teamTotalPoints = function (team) {
    let total =0;
    for(player in stats[team]["players"]){
      total += stats[team]["players"][player]["points"]
    }
    return total
  }
  const homeTeamPoints = teamTotalPoints("home");
  const awayTeamPoints = teamTotalPoints("away");
  if(homeTeamPoints > awayTeamPoints){
    return stats["home"]["teamName"];
  }
  return stats["away"]["teamName"];
}
function playerWithLongestName(){
  let max = 0;
  let name;
  for(team in stats){    
    const playersObj = stats[team]["players"];
    for(player in playersObj){
      if( max < player.length){
        max = player.length
        name = player;
      }
    }
  }
  return name
}

function doesLongNameStealATon(){
  const longestName = playerWithLongestName();
  let max = 0 ;
  let bool;
  for(team in stats){    
    const playersObj = stats[team]["players"];
    for(player in playersObj){
      if( max < playersObj[player]["steals"]){
        max = playersObj[player]["steals"]
        bool = longestName === player;
      }
    }
  }
  return bool
}