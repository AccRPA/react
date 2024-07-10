import './User.css';
import Score from '../score/Score';

function User({data, score, showScore, switchOrder, showYou}){
    const switchClass = switchOrder ? 'switch' : '';
    
    return <div className={`user ${switchClass}`}>
            {(!!data?.avatar && <span className="avatar">{String.fromCodePoint(data.avatar)}</span>)} 
            <div className={switchClass}>
                <span className="name">{data?.name} {!!showYou && '(You)'}</span>
                {showScore && <Score score={score}></Score>}
            </div>
        </div>;
}

export default User;