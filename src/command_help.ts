import type { CLICommandCallback } from "./state";

export const commandHelp: CLICommandCallback = ({ commands }) => {
  console.log();
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  console.log();
  for (const cmd of Object.values(commands)) {
    console.log(`${cmd.name}: ${cmd.description}`);
  }
  console.log();
}
