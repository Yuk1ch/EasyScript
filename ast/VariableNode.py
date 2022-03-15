import ExpressionNode
import Tokens
import Tokens
from Tokens import Token

class VariableNode:
    variable = Token

    def __init__(self, variable = Token):
        super()
        self.variable = variable
