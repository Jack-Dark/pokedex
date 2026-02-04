import { createInterface } from "node:readline"
import { getCommands } from "./get_commands.js";

export function cleanInput(input: string): string[] {
  return input.toLowerCase().trim().split(/\s+/g).filter(Boolean)
}

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Which pokemon would you like to know about?\n',
  })

  rl.prompt()
  rl.on('line', async (input) => {
    const words = cleanInput(input);
    if (words.length) {
      const firstWord = words[0];
      const commands = getCommands();
      if (firstWord in commands) {
        commands[firstWord].callback({})
      } else {
        rl.prompt();
      }
    } else {
      rl.prompt();
      return;
    }
  })
}
