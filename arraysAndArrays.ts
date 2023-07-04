

type CellValue = 'X'|'O'|''

type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
    ['X','O','X'],
    ['O','X','O'],
    ['X','','O']
]

const arrayConError: GameBoard = [
    ['X','O','X', ''], //aqui tenemos error a proposito ya que estamos usando el type GameBoard y los array solo pueden tener 3 elementos y le pase un 4to elemento
    ['O','X','O'],
    ['X','','O']
]

