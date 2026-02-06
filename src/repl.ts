import type { State } from './state.js'

export function startREPL(state: State) {

  const { readline, commands } = state;

  readline.prompt();

  readline.on("line", async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      readline.prompt();
      return;
    }

    const commandName = words[0];

    const cmd = commands[commandName];
    if (!cmd) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      readline.prompt();
      return;
    }

    try {
      cmd.callback(state);
    } catch (e) {
      console.log(e);
    }

    readline.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}
