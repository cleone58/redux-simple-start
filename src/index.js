import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyDtPQPJH1Bf5EP9Q5KgzEVkFSxwN3WDRLA";

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});
// Create a new component. This component should produce
//some HTML
const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
  );
}

// Take these component"s generated HTML and put it
// on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
