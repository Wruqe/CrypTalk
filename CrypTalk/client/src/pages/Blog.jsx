import ThoughtList from "../components/thoughtList";
import { useState } from "react";
export default function BlogList() {
  const [formData, setFormData] = useState({ username: "", thoughtText: "" });
  const handleChange = (event) => {
    const {name, value} = event.target; 
    setFormData ({...formData, [name]: value})
    console.log(formData)
  };
  const handleFormSubmit = (event) => {
    event.preventDefault()
    
  };
  return (
    <div className="m-3">
      <div className="card">
        <div className="card-body">
        <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="thoughtText" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control"
            id="textArea"
            rows="3"
            name="thoughtText"
            value={formData.thoughtText}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
        </div>
      </div>
      
      <ThoughtList />
    </div>
  );
}
