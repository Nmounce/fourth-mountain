import React from "react";
import TypeWriter from "typewriter-effect";

function Type() {
    return (
        <TypeWriter
            options={{
                strings: [
                    "FULL STACK / WEB DEVELOPMENT / AND DESIGN"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
