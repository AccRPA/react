import FoodItem from "../food-item/FoodItem";

function FoodList(){
    const imgWith = 100;
    const imgHeight = 100;
    const imageStyles = {        
        width: `${imgWith}px`,
        height: `${imgHeight}px`,
        borderRadius: '50%'
    };
    
    return (
        <ul>
            <FoodItem ingredient="Bacon" styles={imageStyles} imgUrl="https://www.wellplated.com/wp-content/uploads/2023/06/Baked-bacon-in-the-oven.jpg"></FoodItem>
            <FoodItem ingredient="Jamon" styles={imageStyles} imgUrl="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/02/24/16457013001823.jpg"></FoodItem>
            <FoodItem ingredient="Noodles" styles={imageStyles} imgUrl="https://entrenosotros.consum.es/public/Image/2019/9/Noodles-Gambas-Consum--Mediana.jpg"></FoodItem>
            <FoodItem ingredient="Random" styles={imageStyles} imgUrl="https://picsum.photos/" type="random"></FoodItem>
        </ul>
    );
}

export default FoodList;