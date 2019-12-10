class Cable():
	def __init__(self):
		self.horizontal = []
		self.vertical = []

	def recta_horizontal(self, x, y, low, up):
		aux = range(low, up, 1)
		self.horizontal.append((y, aux))

	def recta_vertical(self, x, y, low, up):
		aux = range(low, up, 1)
		self.vertical.append((x, aux))

	def __str__(self):
		return f"{self.horizontal} | {self.vertical}"

	def set_camino_cable(self, data):
		x = 0
		y = 0

		for d in data:
			direccion = d[0:1]
			aux = int(d[1:])

			if direccion == 'R':
				self.recta_horizontal(x, y, x, x+aux)
				x += aux
			elif direccion == "L":
				self.recta_horizontal(x, y, x-aux, x)
				x -= aux
			elif direccion == "U":
				self.recta_vertical(x, y, y, y+aux)
				y += aux
			elif direccion == "D":
				self.recta_vertical(x, y, y-aux, y)
				y -= aux

	def intersecta(self, otro_cable):
		intersecta = []

		for h_self in self.horizontal:
			for v_otro in otro_cable.vertical:
				if (v_otro[0] in h_self[1]) and (h_self[0] in v_otro[1]):
					intersecta.append((v_otro[0], h_self[0]))

		for v_self in self.vertical:
			for h_otro in otro_cable.horizontal:
				if (h_otro[0] in v_self[1]) and (v_self[0] in h_otro[1]):
					intersecta.append((v_self[0], h_otro[0]))

		return intersecta


def min_manhatan_dist(arr):
	minimum = 9999999999
	punto = (0, 0)
	
	for a in arr:
		aux = abs(a[0]) + abs(a[1])
		if minimum > aux:
			minimum = aux
			punto = a

	return (minimum, punto)


if __name__ == "__main__":
	file = open("data.txt")
	data = file.readlines()
	data1 = data[0].split(",")
	data2 = data[1].split(",")

	cable1 = Cable()
	cable2 = Cable()

	cable1.set_camino_cable(data1)
	cable2.set_camino_cable(data2)

	intersecciones = cable1.intersecta(cable2)
	intersecciones.pop(0)
	result = min_manhatan_dist(intersecciones)

	print(result)
