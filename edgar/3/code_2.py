class Cable():
	def __init__(self):
		self.camino = []
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
		x = 5000
		y = 5000

		for d in data:
			direccion = d[0:1]
			aux = int(d[1:])

			if direccion == 'R':
				self.recta_horizontal(x, y, x, x+aux)
				self.camino.append(('R', self.horizontal[-1]))
				x += aux
			elif direccion == "L":
				self.recta_horizontal(x, y, x-aux, x)
				self.camino.append(('L', self.horizontal[-1]))
				x -= aux
			elif direccion == "U":
				self.recta_vertical(x, y, y, y+aux)
				self.camino.append(('U', self.vertical[-1]))
				y += aux
			elif direccion == "D":
				self.recta_vertical(x, y, y-aux, y)
				self.camino.append(('D', self.vertical[-1]))
				y -= aux

	def intersecta(self, otro_cable):
		intersecta = []

		for h_self in self.horizontal:
			for v_otro in otro_cable.vertical:
				# print("Horizontal con vertical")
				# print(h_self)
				# print(v_otro)
				if (v_otro[0] in h_self[1]) and (h_self[0] in v_otro[1]):
					# print("Aqui")
					intersecta.append((v_otro[0], h_self[0]))

		for v_self in self.vertical:
			for h_otro in otro_cable.horizontal:
				# print("Vertical con horizontal")
				# print(v_self)
				# print(h_otro)
				if (h_otro[0] in v_self[1]) and (v_self[0] in h_otro[1]):
					# print("Alli")
					intersecta.append((v_self[0], h_otro[0]))

		return intersecta

	def pasos_al_punto(self, punto):
		distancia_al_punto = 0

		for c in self.camino:
			# print(distancia_al_punto)
			if c[0] == "D" or c[0] == "U":
				x = c[1][0] # Valor
				y = c[1][1] # Range
				
				if punto[0] == x and punto[1] in y:
					if c[0] == "D":
						# print("D")
						distancia_al_punto += abs(y[-1] + 1 - punto[1])
					elif c[0] == "U":
						# print("U")
						distancia_al_punto += abs(y[0] - punto[1])
					return distancia_al_punto

				distancia_al_punto += len(y)
			elif c[0] == "R" or c[0] == "L":
				y = c[1][0] # Valor
				x = c[1][1] # Range
				if punto[1] == y and punto[0] in x:
					if c[0] == "L":
						# print("L")
						distancia_al_punto += abs(x[-1] + 1 - punto[0])
					elif c[0] == "R":
						# print("R")
						distancia_al_punto += abs(x[0] - punto[0])
					return distancia_al_punto

				distancia_al_punto += len(x)

		return distancia_al_punto


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

	pasos1 = []
	pasos2 = []

	for i in intersecciones:
		auxi = cable1.pasos_al_punto((i[0], i[1]))
		pasos1.append(auxi)
		
		auxi = cable2.pasos_al_punto((i[0], i[1]))
		pasos2.append(auxi)


	total = []
	for i in range(0, len(pasos1)):
		total.append(pasos1[i] + pasos2[i])


	print(total)
