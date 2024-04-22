import emojisList from '../emojisData';
import EmojiCard from './EmojiCard/EmojiCard';
import './EmojisContainer.css'

function EmojisContainer(){
    return (
        <div className="emojisContainer">
            {emojisList.map(item => {
                return <EmojiCard key={item.id} emoji={item}></EmojiCard>
            })}
        </div>
    )
}

export {EmojisContainer};