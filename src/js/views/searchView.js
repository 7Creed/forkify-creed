import View from './View.js';

class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    // const self = this

    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
      //   this._clearInput()
      //   console.log('eehh!');
    });
    // }.bind(this));
  }
}
export default new SearchView();
