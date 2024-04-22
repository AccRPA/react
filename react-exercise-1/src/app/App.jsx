import './App.css'
import Header from '../header/Header'
import FoodList from '../food-list/FoodList';

const currentDate = new Date();
const hour = currentDate.getHours();
const bkgStyle = {
    backgroundColor: '#FED898'
};

if (hour >= 20){
    bkgStyle.backgroundColor = '#9177BF';
    bkgStyle.color = '#EAE7EE';
}

function App(){
    return (
        <div id="app" style={bkgStyle}>
            <Header></Header>
            <FoodList></FoodList>
        </div>
    );
}

export default App;