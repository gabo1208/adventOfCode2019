def recursion(x):
	if x == 0:
		return 0
	elif (x/3) < 2:
		return 0
	else:
		return ((x/3) - 2) + recursion((x/3)-2)


if __name__ == "__main__":
	file = open('data.txt', 'r')

	data = file.readlines()

	result = 0
	for d in data:
		result += recursion(int(d))

	print(result)