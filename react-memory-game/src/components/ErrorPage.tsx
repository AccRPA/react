interface Props {
    code: string
}

function ErrorPage({code}: Props){
    return <div>Error {code}</div>;
}

export default ErrorPage;