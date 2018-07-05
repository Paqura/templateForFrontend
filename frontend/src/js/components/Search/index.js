class Search {

  /**
   * * @constructor
   * * @param { string } labelClass - Класс кнопки с иконкой поиска, которая вызывает Блок поиска
   * * @param { string } searchBox - Класс Блока поиска
   * * @param { string } searchBoxStateClass - Состояние блока поиска видим/невидим
   */

  constructor(labelClass, searchBox, searchBoxStateClass) {
    this.state = false;
    this.label = document.querySelector(labelClass);
    this.searchBox = {
      node: document.querySelector(searchBox),
      stateClass: searchBoxStateClass
    };
    
    this.field = this.searchBox.node.querySelector('input');

    this.label.addEventListener('click', this.toggleSearchState.bind(this));
    this.searchBox.node.addEventListener('click', this.toggleSearchState.bind(this));
  }
  
  /**
   * * @toggleSearchState
   * * @return void
  */

  toggleSearchState ()  {
    this.state = !this.state;
    this.changeSearchView.call(this);
  }
  
  /**
   * * @changeSearchView
   * * @return void
  */

  changeSearchView () {
    if(!this.state) {
      this.searchBox.node.classList.add(this.searchBox.stateClass);
    } else {
      this.searchBox.node.classList.remove(this.searchBox.stateClass);
      this.field.focus();
    }
  }
}

export default Search;