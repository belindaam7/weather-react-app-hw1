import React from "react";

export default function Search() {
  return (
    <div className="search">
      <form action="search" class="form-search-city">
        <div class="form-search-city">
          <input
            type="text"
            name="search"
            placeholder="Need the weather? Enter your city here!"
            id="form-search-city"
          />
          <input type="submit" value="Search" class="search-city-button" />
        </div>
      </form>
    </div>
  );
}
