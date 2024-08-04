export class Card {
    public value: number;
    public visible: boolean;
    public checked: boolean;
    public imageUrl: string | null;

    constructor(value: number){
        this.value = value;
        this.visible = false;
        this.checked = false;
        this.imageUrl = null;
    }
}
