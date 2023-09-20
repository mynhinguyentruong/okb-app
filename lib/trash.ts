// console.log("haha")
// * + 3 4 5
// - 3 * 4 5


function something(expressions: any) {
  const tokens = expressions.split(" ")
  const stack = []

  for (const token of tokens) {
    if (isNaN(token)) {
      stack.push([token])
    } else {
      if (stack[stack.length - 1].length < 3) {
        stack[stack.length - 1].push(token)
      } else {
        stack.push(token)
      }
    }
  }

  let str = ''
  for (const el of stack) {
    if (el.length === 3) {
      str += "(" + el.join("") + ")"
    }   
  }

  console.log({stack})
}

something("* + 3 4 5")
something("- 3 * 4 5")

function graph(expressions: string) {
  const tokens = expressions.split(" ")
  const map = new Map() 
  let pointer = ''
    for (const token of tokens) {
      if (isNaN(Number(token))) {
        map.set(token, [])        
        pointer = token
      } else {
        const val = map.get(pointer)
        map.set(pointer, [...val, token])
      }
    }

  console.log({map})

}

graph("* + 3 4 5")

const a = eval("3+ 4")
console.log(a)

function performCalculationOnArrayWithThreeElement(array: string[]) {
  switch(array[0]) {
    case "+":
      return Number(array[1]) + Number(array[2]) 
    case "-":
      return Number(array[1]) - Number(array[2]) 
    case "*":
      return Number(array[1]) * Number(array[2]) 
    case "/":
      return Number(array[1]) / Number(array[2]) 
  }
  return 0 // a number as result
}



