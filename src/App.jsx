import { useState, useRef } from "react";

import "./App.css";
import style from "./components/OutputBox.module.css";

import Header from "./components/Header";
import Textarea from "./components/Textarea";
import Warning from "./components/Warning";
import Button from "./components/Button";
import Container from "./components/Container";
import OutputBox from "./components/OutputBox";
import Footer from "./components/Footer";
import OutputContent from "./components/OutputContent";

function App() {
  const [text, setText] = useState("");
  const [outputText, setOutputText] = useState(<OutputContent />);

  const code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  const textareaRef = useRef();
  const outputRef = useRef();

  const handleKeyDown = (e) => {
    let tempText = e.target.value.split("");
    if (
      (tempText[tempText.length - 1] < "a" ||
        tempText[tempText.length - 1] > "z") &&
      tempText[tempText.length - 1] != " "
    ) {
      tempText.pop();
      e.target.value = tempText.join("");
    }
    setText(e.target.value);
    console.log(text);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputRef.current.innerText);
    setOutputText(<OutputContent />);
  };

  const handleCript = () => {
    let tempText = text;

    tempText = tempText.replace(/[^a-z\s]/g, '');
    

    for (let i = 0; i < code.length; i++) {
      tempText = tempText.replaceAll(code[i][0], code[i][1]);
    }


    if (text == "") {
      setOutputText(<OutputContent />);
    } else {
      setOutputText(
        <>
          <div className={style.placeholder}>
            <strong ref={outputRef} className={style.result}>
              {tempText}
            </strong>
            <Button
              classname="blue-button"
              value="Copiar"
              handleAction={handleCopy}
            />
          </div>
        </>
      );
    }
  };

  const handleDecript = () => {
    let tempText = text;

    tempText = tempText.replace(/[^a-z\s]/g, '');
    
    for (let i = 0; i < code.length; i++) {
      tempText = tempText.replaceAll(code[i][1], code[i][0]);
    }

    if (text == "") {
      setOutputText(<OutputContent />);
    } else {
      setOutputText(
        <>
          <div className={style.placeholder}>
            <strong ref={outputRef} className={style.result}>
              {tempText}
            </strong>
            <Button
              classname="blue-button"
              value="Copiar"
              handleAction={handleCopy}
            />
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <Container>
            <Header />
            <Textarea
              placeholder="Digite seu texto"
              handleChange={handleKeyDown}
              ref={textareaRef}
            />
            <Warning />
          </Container>
          <Container classname="container-button">
            <Button
              classname="blue-button"
              value="Criptografar"
              handleAction={handleCript}
            />
            <Button
              classname="white-button"
              value="Descriptografar"
              handleAction={handleDecript}
            />
          </Container>
        </div>

        <Container classname="container-output">
          <OutputBox content={outputText} />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
