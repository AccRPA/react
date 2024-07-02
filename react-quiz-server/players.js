const statusList = {
    free: 0,
    playing: 1
};
const players = new Array();

function Player(id, name, avatar) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.status = statusList.free;
    this.ready = false;
    this.score = 0
}

function addPlayer(id, name, avatar){
    const player = new Player(id, name, avatar);
    players.push(player);
    return player;
}

function removePlayer(id){
    let index = !!id && players.findIndex(p => p.id === id);
    if (index >= 0){
        players.splice(index, 1);
    }
}

function getPlayer(id){
    return !!id && players.find(p => p.id === id);
}

function setPlayerPlaying(id){
    const player = getPlayer(id);
    (player && (player.status = statusList.playing));
}

function setPlayerFree(id){
    const player = getPlayer(id);
    (player && (player.status = statusList.free, player.ready = false, player.score = 0));
}

function getRandomFreePlayer(idToExclude){
    return players.filter(p => 
            p.id !== idToExclude && 
            p.status === statusList.free)
            ?.[0];
}

function totalFreePlayers(idToExclude){
    return players.filter(p => 
            p.id !== idToExclude && 
            p.status === statusList.free)?.length;
}

function totalPlayers(){
    return players.length;
}

export let Players = {
    addPlayer,
    removePlayer,
    getPlayer,
    getRandomFreePlayer,
    totalPlayers: totalPlayers,
    totalFreePlayers: totalFreePlayers,
    setPlayerPlaying: setPlayerPlaying,
    setPlayerFree: setPlayerFree,
}