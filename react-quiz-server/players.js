'use strict';

const statusList = {
    free: 0,
    playing: 1
};
let players = new Array();

function Player(id, name, avatar) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.status = statusList.free;
}

function addPlayer(id, name, avatar){
    players.push(new Player(id, name, avatar));
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
    (player && (player.status = statusList.free));
}

function getRandomFreePlayer(idToExclude){
    return players.filter(p => 
            p.id !== idToExclude && 
            p.status === statusList.free)
            ?.[0];
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
    setPlayerPlaying: setPlayerPlaying,
    setPlayerFree: setPlayerFree,
}