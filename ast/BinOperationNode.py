from ast import operator
import ExpressionNode
from ExpressionNode import ExpressionNode
import core.Tokens
from core.Tokens import Token

class BinOperationNode:
    operator = Token
    leftNode = ExpressionNode
    rightNode = ExpressionNode

    def __init__(self, operator = Token, leftNode = ExpressionNode, rightNode = ExpressionNode):
        super()
        self.operator = operator
        self.leftNode = leftNode
        self.rightNode = rightNode
