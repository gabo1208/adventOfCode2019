#!/usr/bin/python
# -*- coding: utf-8 -*-

result = 0
with open('input.txt') as f:
    for linea in f:
        if linea.strip():
            result += ((int(linea) // 3) - 2)
print(result)
