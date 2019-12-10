def has_contiguous_only_2(num):
	aux = list(str(num))
	juntos = {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '0': 0,}
	count = 0

	for i, a in enumerate(aux[:len(aux)-1]):
		if a == aux[i+1]:
			if not juntos[str(a)]:
				juntos[str(a)] += 1
			juntos[str(a)] += 1


	if 2 in juntos.values():
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

	# # False
	# print(has_contiguous_only_2(5555555))
	# # False
	# print(has_contiguous_only_2(555444))
	# # True
	# print(has_contiguous_only_2(11144))
	
	for i in range(156218,652528):
		if only_increases(i):
			if has_contiguous_only_2(i):
				count += 1

	print(count)
