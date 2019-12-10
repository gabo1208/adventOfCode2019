def has_contiguous(num):
	aux = list(str(num))

	for i, a in enumerate(aux[:len(aux)-1]):
		if a == aux[i+1]:
			return True

	return False

def only_increases(num):
	aux = list(str(num))

	for i, a in enumerate(aux[:len(aux)-1]):
		if a > aux[i+1]:
			return False

	return True


if __name__ == "__main__":
	count = 0

	for i in range(156218,652528):
		if only_increases(i):
			if has_contiguous(i):
				count += 1

	print(count)
