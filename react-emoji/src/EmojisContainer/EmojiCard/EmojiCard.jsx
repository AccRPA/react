import './EmojiCard.css'

function EmojiCard(props){
    return (
        <div className="emojiCard">
            <h1>{props.emoji.symbol}</h1>
            <h3>{props.emoji.title}</h3>
            <div>{props.emoji.description}</div>
        </div>
    )
}

export default EmojiCard;