import { useState } from "react"
import axios from "axios"
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
       setPrompt((prevPrompt)=>({...prevPrompt,[name]:value}));
    }
    const handleSelect = (e)=>{
        setPrompt((prev)=>({...prev,visibility:e.target.value}));
        console.log(e.target.value);
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
      const response =   await axios.post('http://localhost:4000/prompt/create',prompt,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        if(response.status===200){
            alert ("Prompt created successfully");
        }
        setPrompt(newPrompt);
    }catch(error){
        console.error(error);
        alert("Failed to create prompt");
    }   
        
    }
return(
    <div className="create-prompt">
        <h2>Create New Prompt</h2>
        <input name="prompt" type="text" placeholder="Enter prompt here..." onChange={handleChange} value={prompt.prompt}/>
        <input name="label" type="text" placeholder="Enter label here..." onChange={handleChange} value={prompt.label}/>
        <select onChange={handleSelect}>
            <option value="">Select visibility...</option>
            <option value="public">Public</option>
            <option value="custom">Custom</option>
        </select>
        <input name="description" placeholder="Enter description here..." onChange={handleChange} value={prompt.description}/>
        <button onClick={handleSubmit}>Submit</button>
        </div>
)
}

export default CreatePrompt