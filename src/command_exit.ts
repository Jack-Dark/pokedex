import type { CLICommandCallback } from "./state";

export const commandExit: CLICommandCallback = ({ readline }) => {
  console.log("Closing the Pokedex... Goodbye!");
  readline.close();
  process.exit(0);
}