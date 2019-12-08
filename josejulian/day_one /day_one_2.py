#!/usr/bin/python
# -*- coding: utf-8 -*-


def calculate_fuel(x):
    return (int(x) // 3) - 2


def calculate_fuel_com(x):
    result = 0
    cond = calculate_fuel(x)
    while cond > 0:
        result += cond
        cond = calculate_fuel(cond)
    return result


def read_file():
    result = 0
    with open('input.txt') as f:
        for linea in f:
            if linea.strip():
                result += calculate_fuel_com(int(linea))
    print(result)


if __name__ == "__main__":
    read_file()
