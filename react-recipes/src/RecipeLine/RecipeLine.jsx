function RecipeLine({title, content}){
    return (
        !!content &&
        <dl>
            <dt>
                {title}
            </dt>
            <dd>
                {content}
            </dd>
        </dl>
    );
}

export default RecipeLine;
