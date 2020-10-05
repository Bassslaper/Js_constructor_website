import banner from './assets/banner.png'; 

const text = 'Крутые сайты от разработчика';

export const model = [
  {type: 'title', value: 'Конструктор сайтов на чистом JS', options: {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem'
    }
  }},
  {
    type: 'image',
    value: banner,
    options: {
      styles: {
        padding: '2rem 0',
        display: 'flex',
        'justify-content': 'center'
      },
      imageStyles: {
        width: '500px',
        height: 'auto'
      },
      alt: 'Это картинка'
    }
  },
  {type: 'columns', value: [
    'Приложение на чистом JavaScript, без использования библиотек',
    'Используются принципы SOLID и ООП',
    'Любой другой текст'

  ], options: {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }},
    {
      type: 'text',
      value: text,
      options: {
        styles: {
          background: 'linear-gradient(to left, #f2994a, #f2c94c)',
          padding: '1rem',
          'font-weight': 'bold'
        }
      }
    }
  
];
