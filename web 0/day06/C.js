var players = [
    {name: "Didier Drogba", club: "Chelsea"},
    {name: "Mbappe", club: "Paris Saint-Germain F.C."},
    {name: "Zlatan Ibrahimović", club: "Los Angeles Galaxy"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Antoine Griezmann", club: "Barcelona"},
]

  //1)
  let notChealsea = players.filter(function(player) {
      return player.club !== 'Chelsea'
    })

    2
    playerNamei = players.map(function(player){
           return player.name
         })
     
     //2.1)

     let playerNameu = players.map((player) => {
         return player.name
     })