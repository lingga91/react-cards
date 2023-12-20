/**
 * card form component 
 * display form to record user input
 * @param handleClick - function to handle form submission
 * @param errorMsg - user input error message
 * @returns ui/form
 */

const Form = ({errorMsg,handleClick})=>{
    return (
        <form>
            <div className="form-group row">
                <label  className="col-sm-4 col-form-label">Number of Players:</label>
                <div className="col-sm-8">
                    <input type="number" className="form-control"  placeholder="Number of player" id="num_of_player"/>
                    <small id="passwordHelpBlock" className="form-text text-muted">
                        {errorMsg}
                    </small>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12">
                    <button type="submit" className="btn btn-primary float-right" onClick={handleClick}>Draw Now</button>
                </div>
            </div>
        </form>  
    )  
}

export default Form;