import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api/index";

function DeckList({ deck, updateDecks }) {
  const { id, name, description, cards } = deck;
  const cardsLength = cards.length;
  const history = useHistory();

  const deleteHandler = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete this deck? You will not be able to recover it."
      )
    ) {
      await deleteDeck(id);
      updateDecks(-1);
      history.go(0);
    } else {
      history.go(0);
    }
  };

  return (
    <div className="card w-75 mb-4 shadow-lg rounded-lg bg-white p-6">
      <div className="card-body">
        <div className="row px-3">
          <h5 className="card-title text-2xl font-bold">{name}</h5>
          <p className="ml-auto text-gray-600">{cardsLength} cards</p>
        </div>
        <p className="card-text text-gray-700">{description}</p>
        <div className="row mt-3 px-3">
          <Link to={`/decks/${id}`} className="btn btn-secondary">
            <i className="fa fa-eye" aria-hidden="true"></i> View
          </Link>
          <Link to={`/decks/${id}/study`} className="btn btn-primary ml-3">
            <i className="fa fa-bookmark" aria-hidden="true"></i> Study
          </Link>
          <button
            onClick={deleteHandler}
            name="delete"
            value={id}
            className="btn btn-danger ml-auto"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeckList;
