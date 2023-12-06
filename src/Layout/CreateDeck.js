import React, { useState } from "react";
import {Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api/index.js";

function CreateDeck({ updateDecks }) {
  const [newDeck, setNewDeck] = useState({name: "", description: ""})
  const history = useHistory()
  
  const formChange = ({ target }) => {
        setNewDeck({...newDeck, [target.name]: target.value });
    }
    
    const formSubmit = async (event) => {
        event.preventDefault();
        const response = await createDeck(newDeck);
        history.push(`/decks/${response.id}`);
        updateDecks(1);
    }
    
  return (
    <div className="CreateDeck">
      <h1>Create Deck</h1>
      <form onSubmit={formSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={newDeck.name}
            onChange={formChange}
            placeholder="Deck Name"
            />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            value={newDeck.description}
            onChange={formChange}
            placeholder="Brief description of the deck."
            rows={5}
            />
        </div>
        <Link to="/" className="btn btn-secondary">Cancel</Link>
        <button type="submit" className="btn btn-primary">Submit</button>
     </form>
   </div>
  );
}
    
export default CreateDeck;    
