import banner from './assets/banner.png'; 
import { TitleBlock, ImageBlock, ColumnsBlock, TextBlock } from './classes/block';


const text = 'Крутые сайты от разработчика';

export const model = [

  new TitleBlock('Конструктор сайтов на чистом JS', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem'
    }
  }),

  new ImageBlock(banner, {styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Это картинка'
  }),
  
  new ColumnsBlock([
    'Приложение на чистом JavaScript, без использования библиотек',
    'Используются принципы SOLID и ООП',
    'Любой другой текст'], 
    {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }), 
  
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  })
    
  
];
