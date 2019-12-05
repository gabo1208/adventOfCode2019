def recursive_fuel_calculation(mass):
    fuel = (mass // 3) - 2
    if (fuel > 0):
        return fuel + recursive_fuel_calculation(fuel)
    else:
        return 0

f = open("1input", "r")
f1 = f.readlines()

total_fuel = 0
for line in f1:
    total_fuel += recursive_fuel_calculation(int(line))

print(total_fuel)