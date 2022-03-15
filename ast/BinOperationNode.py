from ast import operator
import imp
import ExpressionNode
from ExpressionNode import ExpressionNode
import Tokens
from Tokens import Token

class BinOperationNode:
    operator = Token
    leftNode = ExpressionNode
    rightNode = ExpressionNode

    def __init__(self, operator = Token, leftNode = ExpressionNode, rightNode = ExpressionNode):
        super()
        self.operator = operator
        self.leftNode = leftNode
        self.rightNode = rightNode
