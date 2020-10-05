import { row, col, css } from './utils'

function title(block) {
  const { tag = 'h1', styles } = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}
function image(block) {
  const { styles, imageStyles: iS, alt = '' } = block.options;
  return row(`<img style="${css(iS)}" src="${block.value}" alt="${alt}"/>`, css(styles));
}

function columns(block) {
  const styles = block.options.styles;
  const html = block.value.map(col).join('');
  return row(html, css(styles));
}

function text(block) {
  const styles = block.options.styles;
  return row(col(`<p>${block.value}</p>`), css(styles));
}



export const templates = {title,text,columns,image};