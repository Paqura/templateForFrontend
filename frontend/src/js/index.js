import './polyfills';
import Search from './components/Search';

document.addEventListener('DOMContentLoaded', () => {
  new Search(
    '.js-search-label',
    '.search-box',
    'search-box_invisible'
  );
});
