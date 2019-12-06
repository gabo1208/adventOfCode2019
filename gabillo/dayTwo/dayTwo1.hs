import System.IO  
import Control.Monad

main = do  
  contents <- readFile "dayTwo.data"
  print $ processIntCodes 0 True $ map readInt $ splitString ',' contents

splitString :: Char -> String -> [String]
splitString _ [] = []
splitString c buffer = firstWord : splitString c rest
  where firstWord = takeWhile(/=c) buffer
        rest = drop (length firstWord + 1) buffer

readInt = read :: String -> Int

processIntCodes :: Int -> Bool -> [Int] -> [Int]
processIntCodes _ _ [] = []
processIntCodes i b matrix = processMatrix i b matrix newMatrix
  where newMatrix = drop (i * 4) matrix

processMatrix :: Int -> Bool -> [Int] -> [Int] -> [Int]
processMatrix i b matrix newMatrix | b = processIntCodes (i + 1) (validOp (head newMatrix)) $ intCode matrix newMatrix
                                   | otherwise = matrix

validOp :: Int -> Bool
validOp o = o == 1 || o == 2

setNthElement :: ([a], [a])-> a -> [a]
setNthElement (xs, ys) x = xs ++ [x] ++ (tail ys)

intCode :: [Int] -> [Int] -> [Int]
intCode matrix (o:x:y:p:xs) | (o == 99) = matrix
                            | (o == 1) = setNthElement (splitAt p matrix) (matrix !! x + matrix !! y)
                            | (o == 2) = setNthElement (splitAt p matrix) (matrix !! x * matrix !! y)
                            | otherwise = []
intCode matrix _ = matrix
