#!/usr/bin/python
# -*- coding: utf-8 -*-


def calculate_fuel(x):
    return (int(x) // 3) - 2


def calculate_fuel_com(x):
    result = x
    cond = calculate_fuel(x)
    while cond >= 0:
        result += cond
        cond = calculate_fuel(cond)
    return result


def read_file():
    result = 0
    with open('input.txt') as f:
        for linea in f:
            if linea.strip():
                value = calculate_fuel(linea)
                result = value
                result_rec = calculate_fuel_com(value)
    print(result + result_rec)


if __name__ == "__main__":
    read_file()
