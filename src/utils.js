export function row(content, styles = '') {
  return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content) {
  return `<div class="col">${content}</div>`;
}

export function css(styles = {}) {

  /*Вариант 1*/
  // const keys = Object.keys(styles);
  // const array = keys.map(key => {
  //   return `${key}: ${styles[key]}`;
  // });
  // return array.join(';'); 

  /* Рефакторинг */
  const toString = key => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toString).join(';');
}



