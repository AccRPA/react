import { GameCore } from './GameCore';
import { Player} from './Player';

export function GameData() {
    this.userIsConnected = false;
    this.totalUsersConnected = 0;
    this.userData = new Player(),
    this.partnerData = null,
    this.userIsPlaying = false,    
    this.game = new GameCore()
};