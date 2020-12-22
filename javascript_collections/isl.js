isl=[
    {name:"mumbaicity",mp:7,win:5,draw:1,lose:1,gf:11,ga:5},
    {name:"atk",mp:6,win:4,draw:1,lose:1,gf:7,ga:3},
    {name:"bengaluru",mp:6,win:3,draw:3,lose:0,gf:7,ga:4}
]

/* //print all team names only

isl.forEach(data =>console.log(data.name)); */

/* //print allteam name in uppercase

var names=isl.map(team=>team.name.toUpperCase()).forEach(name=>console.log(name)); */

/* //print whose win>3

isl.filter(team=>team.win>3).forEach(team=>console.log(team.name)); */

//print team played most games

var data=isl.map(team=>team.mp).
                       reduce((t1,t2)=>t1>t2?t1:t2);
isl.filter(team=>team.mp==data).forEach(team=>console.log(team.name));