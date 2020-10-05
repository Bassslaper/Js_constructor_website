import banner from './assets/banner.png'; 

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
  {type: 'text', value: 'Some text'},
  {type: 'columns', value: [
    '11111',
    '2222',
    '333355'

  ]},
  {type: 'image', value: banner}
];
