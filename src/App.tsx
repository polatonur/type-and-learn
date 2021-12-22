import "./App.css";
import styled from "styled-components";
import getWord from "./data";
import React, { useMemo, useState } from "react";
import "animate.css";

const Container = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Word = styled.p`
  font-size: 2rem;
  margin-bottom: 30px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 2rem;
`;

function App() {
  const [word, setWord] = useState(getWord());
  const [typedText, setTypedText] = useState("");
  const [alert, setAlert] = useState<null | number>(null);
  const [passed, setPassed] = useState(false);
  useMemo(() => {
    const randomWord = getWord();
    setWord(randomWord);
  }, []);
  console.log("true");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const typedWord = e.target.value;
    if (word.slice(0, typedWord.length) === typedWord) {
      setTypedText(typedWord);
      if (typedWord === word) {
        setTypedText("");
        setPassed(true);
        setAlert(null);
        setWord(getWord());
      }
    } else {
      setAlert(typedText.length);
    }
  };

  return (
    <Container>
      <Word className="animate__animated animate__bounce">
        {word.split("").map((elem, index) => {
          return (
            <span
              key={index}
              style={{
                color:
                  index < typedText.length
                    ? "green"
                    : index === alert
                    ? "red"
                    : "black",
              }}
            >
              {elem}
            </span>
          );
        })}
      </Word>
      <Input
        className="animate__animated animate__jello"
        onChange={(e) => handleChange(e)}
        value={typedText}
      />
    </Container>
  );
}

export default App;
