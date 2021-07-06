const math = require('mathjs')
const prompt = require('prompt')

const calculateResistence = async () => {
  const inputArr = []
  console.log('Informe os dados a seguir para calcular a resistência [Ω] usando a Segunda lei de Ohm:')
  prompt.start()
  console.log('Resistividade do condutor [Ω.m]')
  await prompt.get('P').then(({ P }) => inputArr.push(P))
  console.log('Comprimento [m]')
  await prompt.get('L').then(({ L }) => inputArr.push(L))
  console.log('Área transversal [m^2]')
  await prompt.get('A').then(({ A }) => inputArr.push(A))
  console.log(`inputArr`, inputArr)
  const [P, L, A] = inputArr
  const result = math.format(math.evaluate(`${P}* (${L} / ${A})`), { notation: 'exponential' })
  console.log(`Resultado: ${result}[Ω]`)
}

calculateResistence()
