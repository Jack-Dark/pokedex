import { createInterface } from "node:readline"

export function cleanInput(input: string): string[] {
  return input.toLowerCase().trim().split(/\s+/g).filter(Boolean)
}

export function startREPL() {
  const int = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Which pokemon would you like to know about?\n',
  })

  int.prompt()
  int.on('line', (input) => {
    const words = cleanInput(input)
    if (words.length) {
      console.log(`Your command was: ${words[0]}`)
    } else {
      int.prompt()
    }
  })
}