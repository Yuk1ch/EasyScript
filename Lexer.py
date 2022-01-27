from re import RegexFlag
from tokenize import Token
import Tokens
from Tokens import Tokens
import TokenType
from TokenType import TokenTypeList

class Lexer:
    code = str(code)
    pos = int = 0
    tokenList = Token = []

    def __init__(self, code = str):
        self.code = code

def NextToken(self):
    if self.pos >= self.code.length:
        return False

def LexAnalysis(self):
    while NextToken == True:
        print("Token")
        return self.tokenList

    TokenTypesValues = object.values(TokenTypeList)
        

    for i in range(len(TokenTypesValues.length)):
        tokenType = TokenTypesValues[i]
        regex = RegexFlag("^" + tokenType.regex)
        result = self.code.substr(self.pos).match(regex)
        if result != None:
            token = Token(TokenType, result[0], self.pos)
            self.pos += result[0].length
            self.tokenList.push(token)
            return True

        print(f"An error occurred at position {self.pos}")
        return False