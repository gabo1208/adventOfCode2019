import System.IO  
import Control.Monad

main = do  
  contents <- readFile "dayOne.data"
  print $ sumAll contents

sumAll :: String -> Int
sumAll contents = sum $ map (recursiveFuel 0) $ map readInt $ lines contents
  where
    readInt = read :: String -> Int

recursiveFuel :: Int -> Int -> Int
recursiveFuel acc x | fuel <= 0 = acc
                    | otherwise = acc + fuel + recursiveFuel acc fuel
                      where fuel = ((div x 3) - 2)