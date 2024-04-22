import './FoodItem.css'

function FoodItem(props){
    const imgUrl = props.type === 'random' 
    ? `${props.imgUrl}/${Number.parseInt(props.styles.width)}/${Number.parseInt(props.styles.height)}` 
    : `${props.imgUrl}`;
    return (
        <li>
            <span>{props.ingredient}</span>
            <img style={props.styles} src={imgUrl}></img>
        </li>
    );
}

export default FoodItem;