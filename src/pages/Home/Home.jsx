import React, { useState } from "react";

export default function Home() {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    return (
      <>
        <h1>Home - Jess Bakes</h1>
        <h2>Hello! Welcome to Jess Bakes! <br /> Thank you for visiting my page! </h2>

        <div>
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            QA
          </div>

          {isHovering && (
            <div>
              <h2>QA</h2>
            </div>
          )}
        </div>
        <div>
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            QB
          </div>

          {isHovering && (
            <div>
              <h2>QB</h2>
            </div>
          )}
        </div>
        <div>
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            QC
          </div>

          {isHovering && (
            <div>
              <h2>QC</h2>
            </div>
          )}
        </div>

      </>
    );
  }