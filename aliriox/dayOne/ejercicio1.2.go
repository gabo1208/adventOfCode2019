package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {
	fmt.Println("Ejercicio: 1.2")
	archivo, err := os.Open("./data.txt")
	defer archivo.Close()
	if err != nil {
		fmt.Println(err)
	} else {
		var result int
		scanner := bufio.NewScanner(archivo)
		for scanner.Scan() {
			line, _ := strconv.Atoi(scanner.Text())
			result = result + proccessLine(line)
		}
		fmt.Println(result)
	}
}

func proccessLine(line int) int {
	var acu int
	for line > 5 {
		line = line/3 - 2
		acu = acu + line
	}
	return acu
}

