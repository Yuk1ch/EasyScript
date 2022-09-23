
class lexer{
  /**
  * @param {string} [thing] - column
  */
   static async columncheck(thing) {
    let  thing2 = thing.split('\n')
    const A = []
    for (var i = 0; i < thing2.length; i++) {
      if(thing2[i].includes('>>')){
     
      let thing3 = thing2[i].slice(0, thing2[i].indexOf(">>"))
     
      
      A.push(thing3)
      }else{
      A.push(`${thing2[i]}\n`)
      }
  }
    return A
  } // чек группу в тг
}
module.exports = lexer;