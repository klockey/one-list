if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const main = () => {
  // const ulist = document.querySelector('ul.listOfCheckboxes')
  // const liElement = document.createElement('li')
  const oneList = document.querySelector('input[type=button]')
  const div = document.querySelector('div.container')
//  const body = document.querySelector('body')
  let x = []
  let i = 0

  oneList.addEventListener('click', (event) => {
    updateButton()
  })

  const updateButton = () => {
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = 'todo' + i++
    // x.push(0)
    // console.log(x)
    x.push(checkbox)
    console.log(x)
  //  console.log(checkbox.name)
    div.appendChild(checkbox)
  }

console.log( x.forEach(function (element) { document.querySelector('input[name=' + element.name + ']').addEventListener('click', (event) => { console.log('hello') }) })
})

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
