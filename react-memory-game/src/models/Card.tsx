export class Card {
    public id: string;
    public value: number;
    public visible: boolean;
    public checked: boolean;
    public imageUrl: string | null;

    constructor(id: string, value: number){
        this.id = id;
        this.value = value;
        this.visible = false;
        this.checked = false;
        this.imageUrl = null;
    }
}
