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
processMatrix i b matrix newMatrix | b = processIntCodes (i + 1) (invalidOrHalt (head newMatrix)) $ intCode matrix newMatrix
                                   | otherwise = matrix

invalidOrHalt :: Int -> Bool
invalidOrHalt o = o < 1 || o > 2

setNthElem :: (foldable a) -> [a]

intCode :: [Int] -> [Int] -> [Int]
intCode matrix [o, x, y, p] | (o == 99) = matrix
                            | (o == 1) = splitAt p matrix
                            | (o == 2) = splitAt p matrix
                            | otherwise = []
  where () =  
