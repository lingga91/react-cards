
import Form from './form'
import Listing from './cardlisting'
import cards from './data'
import { useState} from 'react';

function App() {  

  const [errorMsg,setErrorMsg]  = useState("") 
  const [cardList,setcardList]  = useState("") 

  //this function randomly sort the cards
  const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
  }; 
  
  /**
   * this function to handle form submission
   * get & validate user input
   * display validation error
   * perform card draw to n number fo players
   * update ui
   */
  function handleClick(e) { 
    e.preventDefault()
    setcardList('')
    shuffle(cards) 
    let elem = document.getElementById("num_of_player")
    let total_players = parseFloat(elem.value) //convert string to float number
    if (Number.isInteger(total_players) && total_players > 0){ //check number is integer and > 0
      setErrorMsg('') //unset error message
      let card_list = [] //array to store distributed cards 
      let index = 0 
      for (let i = 0; i < cards.length; i++) { //perform card draw
        if(index >= total_players){
          index=0
        }
        if(typeof card_list[index] === 'undefined'){
          card_list[index] = cards[i]
        }
        else{
          card_list[index] = cards[i]+','+card_list[index]
        }
        index++
      }
      setcardList(card_list) //update ui
    }
    else{
      //exit process & display error message
      setErrorMsg('Invalid Input!')
    }
  }


  return (
    <div className="row">
      <div className="col-md-6 offset-3">
        <Form errorMsg={errorMsg} handleClick={handleClick}/>
        <Listing cardList={cardList}/>
      </div>
    </div>
  );
}

export default App;
