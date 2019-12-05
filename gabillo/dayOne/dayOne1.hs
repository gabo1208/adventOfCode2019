import System.IO  
import Control.Monad

main = do  
  contents <- readFile "dayOne.data"
  print $ sumAll contents

sumAll :: String -> Int
sumAll contents = foldl (\acc a -> acc + (div a  3) - 2 ) 0 $ map readInt $ lines contents
  where
    readInt = read :: String -> Int

