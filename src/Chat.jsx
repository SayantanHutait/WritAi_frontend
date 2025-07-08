import React, { useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter';

function Chat(prop) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [journal, setJournal] = useState("");
  

  const getPrompt = () => {
    setLoading(true);
    fetch(import.meta.env.VITE_GET_PROMPT_URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    })
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch prompt");
      return response.json();
    })
    .then((data) => {
      sessionStorage.setItem('prompt', data.prompt)
      setPrompt(data.prompt);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err.message);
      setLoading(false);
    });
  };

  const postPrompt = (text) => {
    setLoading(true);
    fetch(import.meta.env.VITE_POST_JOURNAL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      },
      body: JSON.stringify({ journal: text })
    })
    .then((response) => {
      if (!response.ok) throw new Error("Failed to submit journal");
      return response.json();
    })
    .then((data) => {
      setJournal(data.advice);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err.message);
      setLoading(false);
    });
  };

  useEffect(() => {
    const cachePage = sessionStorage.getItem('prompt');
    if(cachePage) {
      setPrompt(cachePage)
    }else {
      getPrompt();
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="container">

        {/* Prompt Display */}
        <div className="p-5" style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
          {loading && !prompt ? (
            <span>Loading...</span>
          ) : (
            <Typewriter
              key={prompt} // force re-render
              words={[prompt]}
              loop={1}
              typeSpeed={30}
              deleteSpeed={0}
              delaySpeed={500}
            />
          )}
        </div>

        {/* Journal Form */}
        <form className="p-5 pt-0" onSubmit={(e) => {
          e.preventDefault();
          postPrompt(e.target.text.value);
        }}>
          <div className="mb-3">
            <textarea
              className="form-control bg-dark text-white"
              id="journalEntry"
              rows="8"
              placeholder="Write your journal here..."
              name="text"
              onChange={(e) => {
                prop.setDraft(e.target.value)
              }}
              value={prop.draft}
              required
            ></textarea>
          </div>
          <div style={{ direction: "rtl" }}>
            <button type="submit" className="btn btn-secondary" style={{ borderRadius: "10px" }}>
              Submit
            </button>
          </div>
        </form>

        {/* Journal Advice Display */}
        <div className="container p-5" style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
          {loading && !journal ? (
            <span>Loading...</span>
          ) : (
            <Typewriter
              key={journal} // force re-render
              words={[journal]}
              loop={1}
              typeSpeed={30}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          )}
        </div>

      </div>
    </div>
  );
}

export default Chat;
