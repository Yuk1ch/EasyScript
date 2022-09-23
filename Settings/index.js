const fs = require('fs')
const lexer = require("./Settings/columncheck.js")
class EasyScript{
    constructor(codes){
        this.codes = codes
    }

    tokenize(){
        const length = this.codes.length
        let pos = 0
        let tokens = []
        const BUILT_IN_KEYWORDS = ["console", "variable"]

        const varChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_'

        let line = 1
        let column = 0

        while(pos < length){
            let currentChar = this.codes[pos]
            if(currentChar === " "){
                pos++
                column++
                continue
            }else if(currentChar === "\n"){
                line++
                column = 0
                pos++
                continue
            }else if(currentChar === '"'){
                let res = ""
                pos++
                column++
                while(this.codes[pos] !== '"' && pos < length){
                    res += this.codes[pos]
                    pos++
                    column++
                }
                if(this.codes[pos] !== '"'){
                    return {
                        error: `Unterminated string at line ${line} column ${column}`
                    }
                }
                pos++
                column++
                tokens.push({
                    type: "string",
                    value: res,
                })
            }else if(varChars.includes(currentChar)){
                let res = currentChar
                pos++
                column++
                while(varChars.includes(this.codes[pos]) && pos < length){
                    res += this.codes[pos]
                    pos++
                    column++
                }
                tokens.push({
                    type: BUILT_IN_KEYWORDS.includes(res) ? "keyword" : "keyword_custom",
                    value: res
                })
            }else if(currentChar === "="){
                pos++
                column++
                tokens.push({
                    type: "operator",
                    value: "eq"
                })
            }else{
                return {
                    error: `Unexpected character ${this.codes[pos]} at line ${line} column ${column}`
                }
            }
        }
        return {
            error: false,
            tokens
        }
    }

    parse(tokens){
        const len = tokens.length
        let pos = 0
        const vars = {}

        while(pos < len){
            const token = tokens[pos]
            if(token.type === "keyword" && token.value === "console"){
                if(!tokens[pos + 1]){
                    return console.log("Unexpected end of line")
                }
                let isVar = tokens[pos + 1].type === "keyword_custom"
                let isString = tokens[pos + 1].type === "string"
                if(!isString && !isVar){
                    return console.error(`Unexpected token ${tokens[pos + 1].type}`)
                }
                if(isVar){
                    if(!(tokens[pos + 1].value in vars)){
                        return console.error(`Undefined variable ${tokens[pos + 1].value}`)
                    }
                    console.log('\x1b[35m%s\x1b[0m', vars[tokens[pos + 1].value])
                }else{
                    console.log('\x1b[35m%s\x1b[0m', tokens[pos + 1].value)
                }
                pos += 2
            }else if(token.type === "keyword" && token.value === "variable"){
                const isCustomKW = tokens[pos + 1] && tokens[pos + 1].type === "keyword_custom"
                if(!isCustomKW){
                    if(!tokens[pos + 1]){
                        return console.error("Unexcepted end of line")
                    }
                    return console.error(`Excepted variable name in ${tokens[pos + 1].type}`)
                }
                const varName = tokens[pos + 1].value

                const isEq = tokens[pos + 2] && tokens[pos + 2].type === "operator" && tokens[pos + 2].value === "eq"
                if(!isEq){
                    if(!tokens[pos + 2]){
                        return console.error("Unexpected end of line")
                    }
                    return console.error(`Unexcepted end of line`)
                }

                const isString = tokens[pos + 3] && tokens[pos + 3].type === "string"
                if(!isString){
                    if(!tokens[pos + 3]){
                        return console.error("Unexcepted end of line")
                    }
                    return console.error(`Excepted string ${tokens[pos + 1].type} instead of token`)
                }

                if(varName in vars){
                    return console.error(`Variable ${varName} already exists!`)
                }
                vars[varName] = tokens[pos + 3].value
                pos += 4
            }else{
                return console.error(`Unexpected token ${token.type}`)
            }
          
        }
    }

    run(){
        const { tokens, error } = this.tokenize()
        if(error){
            return console.error(error)
        }
        this.parse(tokens)
    }
}


async function reades(es) {
  const content = fs.readFileSync(es, 'utf-8')
  const s2 = content.split(/\r?\n?\t/)
  const s1 = s2.join()

  const check = await lexer.columncheck(s1)
  return check
} 

const codes = reades('./index.es')

codes.then( x=> {
 
  const es = new EasyScript(`${x.join("")}`)
es.run()
})

