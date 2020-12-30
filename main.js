const linkedList = require('./linkedList')

function main() {
  let SLL = new linkedList

  SLL.insertFirst('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')

  SLL.insertLast('Tauhida')

  SLL.remove('Husker')

  SLL.insertBefore('Boomer', 'Athena')
  return SLL
}


// main()
console.log(main())