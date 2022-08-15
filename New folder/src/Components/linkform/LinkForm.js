import {useState} from "react";
import "./LinkForm.css";

const LinkForm = () => {
  const [input, setInput] = useState("");
  const [submittedLink, setSubmittedLink] = useState("");
  const [submitted, setSubmitted] = useState("false")

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  const handleBtnSubmit = () => {
    console.log("click");
    setSubmittedLink(input);
    setSubmitted(true);
  }

  return (
    <div className='center'>
        <p className='f3'>Let's see how many Links / Images you can submit</p>
        <div className='form center pa4 br3 shadow-5'>
            <input type="text" placeholder="Enter your link/image here" className='w-70 f4 center pa2' onChange={handleInputChange}/>
            <button className='w-30 bg-light-purple link white pointer ph4 pv2' onClick={handleBtnSubmit}>
              Submit
            </button>
        </div>
        {submitted && (
          <p className="f3 white">This is your Link: {submittedLink} </p>
        )}
    </div>
  )
}

export default LinkForm