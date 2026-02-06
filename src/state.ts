import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";


export type CLICommand = {
  name: string;
  description: string;
  callback: CLICommandCallback;
};

export type CLICommandCallback = (state: State) => void;

export type State = {
  readline: Interface,
  commands: Record<string, CLICommand>
}

export const initState = (): State => {
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Which pokemon would you like to know about?\n',
  });

  const commands = getCommands();

  return { readline, commands }

}