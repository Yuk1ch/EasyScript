from ast import operator
import Tokens
from Tokens import Token
import ExpressionNode
from ExpressionNode import ExpressionNode

class UnarOperationNode:
    operator = Token
    operand = ExpressionNode
