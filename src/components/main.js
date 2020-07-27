import React from "react";
function main() {
  return (
    <div className="main">
      <div className="search">
        <div>
          <input
            className="form"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div>
          <button className="btn btn-outline-success my-2 my-sm-2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default main;
