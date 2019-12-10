class IntCode():
	pristine_copy = []
	results = []
	verb = 0 
	noun = 0
	output = 0

	operations = {
		'1': "sum_operation",
		'2': "times_operation",
		'99': "halt_operation"
	}

	def read_data_from_file(self, filename="data.txt"):
		file = open(filename, "r")
		data = file.read().split(",")

		for d in data:
			self.pristine_copy.append(int(d))

	def set_output(self):
		self.output[0]

	def set_noun(self, value=0):
		self.noun = value

	def set_verb(self, value=0):
		self.verb = value

	def add_noun(self, value=1):
		self.noun += value

	def add_verb(self, value=1):
		self.verb += value

	def sum_operation(self, a, b, c):
		# Adds a + b and store it in c
		self.results[c] = a + b

	def times_operation(self, a, b, c):
		self.results[c] = a * b

	def halt_operation(self, **kwargs):
		print(self.results[0])
		exit()

	def operate(instruction, p_a, p_b, p_save):
		# p_* are pointers to direction.
		fuction = getattr(self, self.operations[instruction])
		function(
			self.pristine_copy[p_a],
			self.pristine_copy[p_b],
			self.pristine_copy[p_save]
		)

	def __str__(self):
		return self.pristine_copy.__str__


if __name__ == "__main__":
	int_code = IntCode()

	int_code.read_data_from_file()
	int_code
	# int_code.set_output()

	use_this_data = []
	aux = 0


	while int_code.verb <= 99:
		int_code.set_noun()
		while int_code.noun <= 99:
			use_this_data = list(int_code.pristine_copy)
			use_this_data[1] = int_code.verb
			use_this_data[2] = int_code.noun
			
			for i, di in enumerate(use_this_data):
				if i%4 != 0:
					continue

				if di == 1:
					a = use_this_data[i+1]
					b = use_this_data[i+2]
					c = use_this_data[i+3]
					aux = use_this_data[a] + use_this_data[b]
					use_this_data[c] = aux
				elif di == 2:
					a = use_this_data[i+1]
					b = use_this_data[i+2]
					c = use_this_data[i+3]
					aux = use_this_data[a] * use_this_data[b]
					use_this_data[c] = aux
				elif di == 99:
					if use_this_data[0] == 19690720:
						print(str(int_code.noun) +" - "+str(int_code.verb))
						raise "hue"

			int_code.add_noun()
		int_code.add_verb()
