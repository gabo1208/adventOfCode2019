import sys


INITIAL_LIST = []

class Operations:

    def __init__(self):
        self.switcher = {
            1: "sum",
            2: "mult",
            99: "halt"
        }
        self.LIST = []

    def numbers_to_operations(self, value, one=None, two=None):
        default = lambda one, two: print("Something goes wrong")

        if value not in self.switcher:
            default(one, two)
            sys.exit(1)
        else:
            method = getattr(self, self.switcher[value])
            return method(one, two)

    def sum(self, one, two):
        return one + two
    
    def mult(self, one, two):
        return one * two
    
    def halt(self, one, two):
        return "halt"

aoc_file = open("2input", "r")
lines = aoc_file.readlines()
for line in lines:
    INITIAL_LIST = [int(x) for x in line.split(",")]

gold_value = 0
operation = Operations()
one = 12
two = 2

pos_1 = 0
pos_2 = 0

while one < 100 and gold_value != 19690720:
    two = 2
    while two < 100 and gold_value != 19690720:
        aoc_list = list(INITIAL_LIST)
        aoc_list[1] = one
        aoc_list[2] = two
        idx = 0
        while idx < len(aoc_list):
            value = aoc_list[idx]
            pos_one = aoc_list[idx + 1]
            pos_two = aoc_list[idx + 2]
            result = operation.numbers_to_operations(value, aoc_list[pos_one], aoc_list[pos_two])
            if result == "halt":
                gold_value = operation.LIST[0]
                pos_1 = operation.LIST[1]
                pos_2 = operation.LIST[2]
                break
            aoc_list[aoc_list[idx +3]] = result
            operation.LIST = aoc_list
            idx += 4
        two += 1
    one += 1

print(gold_value)
print(pos_1, pos_2)