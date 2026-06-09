const Card = (props) => {
    return(
        <div className = "Card">
            <img className="Card-image" src={props.imgLink}/>
            <h3>{props.songName}</h3>
            <h5> {props.artist}</h5>

        </div>
    )
}

export default Card;