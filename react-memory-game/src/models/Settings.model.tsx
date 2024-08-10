import { CardDisplayMode } from "./enum/CardDisplayMode.enum";

export class SettingsModel {
    public cardsAmount: number;
    public cardDisplayMode: CardDisplayMode;
    public cardTimeMsVisible: number;
    public showFireworks: boolean;

    constructor(){
        this.cardsAmount = 10;
        this.cardDisplayMode = CardDisplayMode.NUMBER;
        this.cardTimeMsVisible = 2000;
        this.showFireworks = true;
    }

}