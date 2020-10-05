import { block } from "../utils";
import { TextBlock, TitleBlock } from "./block";

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }

  init() {
     this.$el.insertAdjacentHTML('afterbegin', this.template);
     this.$el.addEventListener('submit', this.add.bind(this))
  }

  get template() {
    return [
      block('title'),
      block('text')
    ].join('');
  }

  add(event) {
    event.preventDefault();
    const type = event.target.name,
          value = event.target.value.value,
          styles = event.target.styles.value;

    let newBlock = type === 'text' ?
      new TextBlock(value, {styles}) : 
      new TitleBlock(value, {styles});

    this.update(newBlock);
    event.target.value.value = '';
    event.target.styles.value = '';
  }
}

