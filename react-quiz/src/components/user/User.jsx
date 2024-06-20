function User({data}){
    return <div>
            {(!!data?.avatar && String.fromCodePoint(data.avatar))} {data?.name}
        </div>;
}

export default User;