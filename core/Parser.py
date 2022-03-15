import TokenType
import Lexer
from Lexer import TokenTypeValues
import Tokens
from Tokens import Token

class Parser:
    tokens = Token = []
    pos = int = 0
    scope = any = {}

    def __init__(self, tokens = Token):
        self.tokens = tokens


def match(self, expected = TokenType):
    Token | None
    if self.pos < self.tokens.length:
        currentToken = self.tokens[self.pos]
        if expected.find(type >= type.name == currentToken.type.name):
            self.pos += 1
            return currentToken
    return None

def require(self, expected = TokenType):
    try:
        token = self.match(expected)
    except:
        print(f"At position {self.pos} is expected {expected[0].name}")

    return token
