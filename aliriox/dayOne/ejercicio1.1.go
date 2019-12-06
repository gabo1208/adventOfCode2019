package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {
	fmt.Println("Ejercicio: 1.1")
	archivo, err := os.Open("./data.txt")
	defer archivo.Close()
	if err != nil {
		fmt.Println(err)
	} else {
		var result int
		scanner := bufio.NewScanner(archivo)
		for scanner.Scan() {
			linea, _ := strconv.Atoi(scanner.Text())
			result = result + linea/3 - 2
		}
		println(result)

	}
}
