import React from 'react'

// export default function IntroSection() {
//   return (
//     <section>
//       <h1 className='centered'>Существуют две основные трактовки понятия «текст»</h1>
//       <h3 className='centered' style={{ color: '#666' }}>
//         asdasdasdasdasdasd
//       </h3>
//     </section>
//   )
// }

export default function IntroSection() {
  return React.createElement('section', null, [
    React.createElement('h1', { className: 'centered', key: 1 }, 'RESULT'),
    React.createElement('h3', { className: 'centered', style: { color: '#666' }, key: 2 }, '55555555555555555555555'),
  ])
}
