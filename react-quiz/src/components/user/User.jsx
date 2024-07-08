import './User.css';

function User({data}){
    return <div className="user">
            {(!!data?.avatar && <span className="avatar">{String.fromCodePoint(data.avatar)}</span>)} 
            <span className="name">{data?.name}</span>
        </div>;
}

export default User;