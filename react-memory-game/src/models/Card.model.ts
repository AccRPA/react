
export class CardModel {
    public id: string;
    public value: number;
    public visible: boolean;
    public checked: boolean;
    public emojiCode: number;
    public get emojiHtml(): string | null {
        return String.fromCodePoint(this.emojiCode);
    }

    constructor(id: string, 
        value: number, 
        emojiCode: number, 
        visible: boolean = false, 
        checked: boolean = false)
    {
        this.id = id;
        this.value = value;
        this.visible = visible;
        this.checked = checked;
        this.emojiCode = emojiCode;
    }
}