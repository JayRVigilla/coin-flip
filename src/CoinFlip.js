import React, { useState } from "react";


function CoinFlip() {
    const [face, setFace] = useState("null");
    const [flipCount, setFlipCount] = useState(0);
    const [headCount, setHeadCount] = useState(0);
    const [tailsCount, setTailsCount] = useState(0);


    function flip() {
        const coinFaces = ['heads', 'tails'];
        const randoIdx = Math.floor(Math.random() * coinFaces.length);
        setFace(coinFaces[randoIdx])
        setFlipCount(flipCount + 1)

        if (randoIdx === 0) {
            setHeadCount(headCount + 1)
        } else {
            setTailsCount(tailsCount + 1)
        }
        // QUESTION: are we updating for THIS flip? or previous
    }


    return (
        <div>
            <h6>Let's Flip a Coin!</h6>

            <p>{face}</p>
            <button onClick={flip}>Click to flip a Coin</button>

            <p> Out of {flipCount} flips</p>
            <p>Heads came up {headCount} times</p>
            <p>Tails came up {tailsCount} times</p>

        </div>
    )





}


export default CoinFlip