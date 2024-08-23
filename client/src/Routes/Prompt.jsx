import { useState } from "react"

const newPrompt = {
    prompt:"",
    label:"",
    visibility:"",
    actor:{
        username:""
    },
    description:"",
    sharedAccess:[]
}

const CreatePrompt = ()=>{
    const [prompt,setPrompt] = useState(newPrompt);
    const handleChange = (e)=>{
        const {name,value} = e.target;
       setPrompt((prevPrompt)=>({...prevPrompt,[name]:value,actor:{...prevPrompt.actor,[name]:value}}));
    }
    const handleSelect = (e)=>{
        setPrompt((prev)=>({...prev,visibility:e.target.value}));
        console.log(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        //submit prompt to API here
        console.log(prompt);
    }
return(
    <div className="create-prompt">
        <h2>Create New Prompt</h2>
        <input name="prompt" type="text" placeholder="Enter prompt here..." onChange={handleChange}/>
        <input name="label" type="text" placeholder="Enter label here..." onChange={handleChange}/>
        <select onSelect={handleSelect}>
            <option value="">Select visibility...</option>
            <option value="public">Public</option>
            <option value="custom">Custom</option>
        </select>
        <input name="username" type="text" placeholder="Enter actor username..." onChange={handleChange}/>
        <input name="description" placeholder="Enter description here..." onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
        </div>
)
}

export default CreatePrompt