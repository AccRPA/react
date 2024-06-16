import { v4 as uuidv4 } from 'uuid';

let players = new Map();
    
function Player(id, name, avatar) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.status = 'free';
}

function addPlayer(id, name, avatar){
    if (!players.has(id)){
        players.set(id, new Player(id, name, avatar));
        console.log(players.size);
    }
}

function removePlayer(id){
    if (players.has(id)){
        players.delete(id);
    }
}

function getPlayer(id){
    return players.get(id);
}

function getRandomFreePlayer(){
    return players.filter((_,v) => v.status === 'free')?.[0] ?? getDummyPlayer();
}

function getDummyPlayer(){
    return new Player(uuidv4(), 'Dummy', 'avatar_dummy');
}

export let Players = {
    addPlayer,
    removePlayer,
    getPlayer,
    getRandomFreePlayer
}