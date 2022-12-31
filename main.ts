import lex from "./lex.ts" 
import parse from "./parse.ts"
import { program } from "./files.ts"
function main() {
  lex(program)
  parse(program)
}

main()
