import React from "react";

function Landing() {
    return (
        <section className="h-[25vh] flex justify-center items-center prose prose-xl min-w-full hover:drop-shadow-lg shadow-cyan-300">
            <h1 className="">happy to see a dog lover ...
            <br />here's a reason/s to smile</h1>
            
            <h4 className="text-primary">powered by <a className="text-primary" href="https://random.dog/woof.json">random dog</a></h4>
        </section>
    )
}

export default Landing;