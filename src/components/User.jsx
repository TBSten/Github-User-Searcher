
function User({name,imgSrc,url}){
    return (
        <a className="user" href={url} target="_blank">
            <h3>{name}</h3>
            <img src={imgSrc} alt={"error :"+imgSrc}/>
        </a>
    ) ;
}

export default User ;

