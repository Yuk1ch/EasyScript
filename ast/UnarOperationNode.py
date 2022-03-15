from ast import operator
import core.Tokens
from core.Tokens import Token
import ExpressionNode
from ExpressionNode import ExpressionNode

class UnarOperationNode:
    operator = Token
    operand = ExpressionNode
