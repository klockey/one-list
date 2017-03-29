if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

console.log('here')

const main = () => {
  const ulist = document.querySelector('ul.listOfCheckboxes')
  const oneList = document.querySelector('input[type=button]')
  const div = document.querySelector('div.container')
  const body = document.querySelector('body')

  oneList.addEventListener('click', (event) => {
    updateButton()
  })

  const updateButton = () => {
    console.log('updateButton')
    div.style.backgroundColor = 'red'
    body.style.backgroundColor = 'purple'
  }
}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
