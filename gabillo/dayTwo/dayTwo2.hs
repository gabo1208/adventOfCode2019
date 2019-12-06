import System.IO  
import Control.Monad

main = do  
  contents <- readFile "dayTwo.data"
  print $ tryResults 0 0 $ map readInt $ splitString ',' contents

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

setInputs :: Int -> Int -> [Int] -> [Int]
setInputs noun verb matrix = setNthElement (splitAt 1 (setNthElement (splitAt 2 matrix) noun)) verb

tryInputs :: Int -> Int -> [Int] -> [Int]
tryInputs 99 100 matrix = matrix
tryInputs noun 100 matrix = tryResult (noun + 1) 0 matrix matrix
tryInputs noun verb matrix = tryResult noun (verb + 1) matrix $ processIntCodes 0 True $ setInputs noun verb matrix

tryResult :: Int -> Int -> [Int] -> [Int] -> [Int]
tryResult noun verb matrix newMatrix | (newMatrix !! 0 == 19690720) = newMatrix
                           | otherwise = tryInputs noun verb matrix

tryResults :: Int -> Int -> [Int] -> [Int]
tryResults noun verb matrix = tryResult noun verb matrix matrix