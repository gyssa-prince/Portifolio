import React, { useEffect, useState } from "react";
const Words = [
  'printf("Hello World!");',
  'cout("Hello World!");',
  'console.log("Hello World!");',
  'print("Hello World!");',
  'echo("Hello World!");',
];
var temp;
export default function Home() {
  const [word, setWord] = useState("");
  let i = 1;
  let pos = 0;
  useEffect(() => {
    setInterval(() => {
      setWord(Words[0].slice(0, i));
      if (i <= Words[0].length) {
        i++;
      } else {
        pos = pos + 1;
        if (pos == Words.length) {
          pos = 1;
        }
        temp = Words[0];
        Words[0] = Words[pos];
        Words[pos] = temp;
        i = 0;
      }
    }, 300);
  }, []);
  return (
    <div>
      <div className="hero">
        <h1>I TURN IDEAS INTO 0S AND 1S</h1>
        <p>
          <samp>
            {word}
            <span></span>
          </samp>
        </p>
        <div class="scroll">
          <h4>Scroll</h4>
          <div class="vl"></div>
        </div>
      </div>
      <div class="container"></div>
    </div>
  );
}
