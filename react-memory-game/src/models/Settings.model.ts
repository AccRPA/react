import { CardDisplayMode } from "./enum/CardDisplayMode.enum";

export class SettingsModel {
    public cardsAmount: number;
    public cardDisplayMode: CardDisplayMode;
    public cardTimeMsVisible: number;
    public showFireworks: boolean;

    constructor(){
        this.cardsAmount = 10; // 4, 6, 8, 10
        this.cardDisplayMode = CardDisplayMode.NUMBER;
        this.cardTimeMsVisible = 1.5; // 1.5s, 2s, 2.5s 3s
        this.showFireworks = true;
    }

}