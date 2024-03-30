import React, { useState } from "react";
import "./cal.css";

function Cal() {
  const [scr, setScr] = useState("");
  const [errorText, setErrorText] = useState("");

  function addToScr(val) {
    if ("/*-+%.".includes(val) && "/*-+%.".includes(scr[scr.length - 1])) {
      setScr(scr);
    } else if (scr === "" && "/*-+%.".includes(val)) {
      setScr(scr);
    } else {
      setScr(scr + val);
    }
    setErrorText("");
  }

  function evaluate() {
    try {
      setScr(eval(scr).toString());
      setErrorText("");
    } catch (e) {
      setErrorText("Please complete the expression!!!");
      console.log(e);
    }
  }

  function clearall() {
    setScr("");
    setErrorText("");
  }

  function clear() {
    setScr(scr.slice(0, scr.length - 1));
    setErrorText("");
  }

  return (
    <>
      <table cellPadding="1px">
        <tr>
          <td colSpan="4" className="par">
            <input type="text" placeholder="0" id="s" value={scr} readOnly />
            <p className="chi">{errorText}</p>
          </td>
        </tr>

        <tr>
          <td>
            <button id="ac" onClick={clearall}>
              AC
            </button>
          </td>
          <td>
            <button id="ce" onClick={clear}>
              CE
            </button>
          </td>
          <td>
            <button className="x" onClick={() => addToScr("/")}>
              /
            </button>
          </td>
          <td>
            <button className="x" onClick={() => addToScr("%")}>
              %
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button className="x" onClick={() => addToScr("1")}>
              1
            </button>
          </td>
          <td>
            <button className="x" onClick={() => addToScr("2")}>
              2
            </button>
          </td>
          <td>
            <button className="x" onClick={() => addToScr("3")}>
              3
            </button>
          </td>
          <td>
            <button className="x" onClick={() => addToScr("+")}>
              +
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button className="x" onClick={() => addToScr("4")}>
              4
            </button>
          </td>
          <td>
            <button className="x" onClick={() => addToScr("5")}>
              5
            </button>
          </td>
          <td>
            <button className="x" onClick={() => addToScr("6")}>
              6
            </button>
          </td>
          <td>
            <button className="x" onClick={() => addToScr("-")}>
              -
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button className="x" onClick={() => addToScr("7")}>
              7
            </button>
          </td>
          <td>
            <button className="x" onClick={() => addToScr("8")}>
              8
            </button>
          </td>
          <td>
            <button className="x" onClick={() => addToScr("9")}>
              9
            </button>
          </td>
          <td>
            <button className="x" onClick={() => addToScr("*")}>
              *
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button className="x" onClick={() => addToScr("0")}>
              0
            </button>
          </td>
          <td>
            <button className="x" onClick={() => addToScr("00")}>
              00
            </button>
          </td>
          <td>
            <button className="x" onClick={() => addToScr(".")}>
              .
            </button>
          </td>
          <td>
            <button id="eq" onClick={evaluate}>
              =
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default Cal;
