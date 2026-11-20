"use client";

const Error = ({error,reset}) => {
    return (
        <div className="ErrorPageContainer">
            <h3>
                {error.message}
            </h3>
            <button className="ErrorPageBtn" type="button" onClick={()=>reset()}>Try Again</button>
        </div>
    );
}
 
export default Error;