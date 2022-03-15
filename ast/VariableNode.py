import ExpressionNode
import core.Tokens
import core.Tokens
from core.Tokens import Token

class VariableNode:
    variable = Token

    def __init__(self, variable = Token):
        super()
        self.variable = variable
