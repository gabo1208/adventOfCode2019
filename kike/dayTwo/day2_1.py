from array import array

f = open("input.txt", "r")

opcode = list(map(int, f.read().split(",")))
opcode[1] = 12
opcode[2] = 2

for i in range(0, len(opcode), 4):

    if opcode[i] == 1:
        opcode[opcode[i + 3]] = opcode[opcode[i + 1]] + opcode[opcode[i + 2]]
    elif opcode[i] == 2:
        opcode[opcode[i + 3]] = opcode[opcode[i + 1]] * opcode[opcode[i + 2]]
    else:
        break

print("opcode", opcode)