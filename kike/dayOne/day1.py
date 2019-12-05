import math

f = open("input.txt", "r")

modules = f.readlines()


def get_fuel(module_selected, previous_fuel):
    fuel = math.floor(module_selected / 3) - 2
    if fuel <= 0:
        return previous_fuel
    else:
        complete_fuel = previous_fuel + fuel
        return get_fuel(fuel, complete_fuel)


total_fuel = 0
for module in modules:
    total_fuel += get_fuel(int(module), 0)

print(total_fuel)
