f = open("input.txt", "r")
output_expected = 19690720
original_opcode = list(map(int, f.read().split(",")))


def get_intcode(opcode_list, noun, verb):
    opcode = opcode_list.copy()
    opcode[1] = noun
    opcode[2] = verb

    for i in range(0, len(opcode), 4):

        if opcode[i] == 1:
            opcode[opcode[i + 3]] = opcode[opcode[i + 1]] + opcode[opcode[i + 2]]
        elif opcode[i] == 2:
            opcode[opcode[i + 3]] = opcode[opcode[i + 1]] * opcode[opcode[i + 2]]
        else:
            break

    return opcode[0]


for j in range(100):
    for k in range(100):
        output = get_intcode(original_opcode, j, k)
        if output == output_expected:
            print("noun: ", j)
            print("verb: ", k)
            print("Solution: ", 100 * j + k)
            break


