import Lexer

code = """
    код РАВНО 5 ПЛЮС 9 ПЛЮС ( 6 МИНУС 6 );
    КОНСОЛЬ код;
    переменная РАВНО код  ПЛЮС 3;
    КОНСОЛЬ переменная ПЛЮС код МИНУС 6;
"""

lexer = Lexer(code)

lexer.LexAnalysis()

print(lexer.tokenList)