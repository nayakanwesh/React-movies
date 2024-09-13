import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cards, setCards] = useState([]);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (url && title) {
      setCards([...cards, { url, title }]);
      setUrl('');
      setTitle('');
    }
  };

  // Handle delete card
  const handleDelete = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <div className="App bg-success">
      <div className="container-fluid d-flex justify-content-between align-items-center" id="nav">
        <div className="h1">ToDoTonic</div>
        <div>
          <div className="btn btn-success">Sign in</div>
          <div className="btn btn-danger">Register</div>
        </div>
      </div>

      <main className="">
        <div className="container" id="card">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Create a Movie Card</h1>
              <form className="3" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" placeholder="Image URL" value={url} onChange={(e) => setUrl(e.target.value)} className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control"
                  />
                </div>
                <button id="btnclick" type="submit" className="btn btn-primary">Create Card</button>
              </form>

              <div className="card-container bg-success mt-4">
                {cards.map((card, index) => (
                  <div className="card mb-2" key={index}>
                    <img src={card.url} alt={card.title} className="card-image" />
                    <div className="card-body">
                      <h2 className="card-title">{card.title}</h2>
                      <button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
