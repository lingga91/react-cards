
/**
 * card listing component 
 * display distributed cards in rows
 * @param cardList - array of cards drawn
 * @returns ui 
 */

const Listing = ({cardList})=>{
    if(cardList && cardList.length > 0) {
        //if cards exist display them in a rows
        return (
            <ul className="list-group">
                <li className="list-group-item active">Cards Drawn</li>
                {cardList.map((list)=>(
                                <li key={list}  className="list-group-item">{list}</li>
                ))}  
            </ul>  
        )
    }
    else{
        //if cards not exist tell user to draw
        return (
            <h5>Please input the number of players & draw</h5>
        )
    }
}

export default Listing;