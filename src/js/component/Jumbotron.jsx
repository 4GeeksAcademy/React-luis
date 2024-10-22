import React from "react";

const Jumbotron = () => {
    return (<div className="jumbotron p-5 justify-content-center ">
        <h1 className="display-4 fs-1 fs-md-3">A Warm Welcome!</h1>
        <p className="lead fs-6 fs-md-5">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <p className="lead fs-6 fs-md-5">
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
      </div>)
}

export default Jumbotron;