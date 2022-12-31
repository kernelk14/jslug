import { SlugToken, SlugTypes, slug } from "./types.ts"
let ip: number = 0
export function isNumber(num: any) {
   if (typeof(num) != "string") return false
   return !isNaN(num) &&
      !isNaN(parseFloat(num))
}

export function checkEOF(prog: any) {
   if (slug.nextok == undefined) {
      slug.nextok = "EOF" 
   } else {
      slug.nextok = prog[ip+1]
   }  
}

export function errorPls(err: any) {
   throw Error, `${err}`
}
export default function lex(program: string) {
  // console.log(`Lexing: ${program}`)
  
  const prog: any = program.split(" ")
  if (prog.includes("\n")) {
    console.log("I saw a newline!!!!")
    prog.replace("\n", " ")
  }
  for (;ip < prog.length;) {
    const code: any = prog[ip]
    // console.log(code)

    if (code == '+') {
      slug.name = "Plus"
      slug.curtok = code
      slug.code = SlugToken.plus
    } else {
      console.log("Others Not Implemented.")
    }
    ip += 1
  }
}
