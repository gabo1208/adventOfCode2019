class Graph:
    def __init__(self):
        self.dict = {}
        self.x = 0
        self.y = 0
        self.steps = 0

    def calc(self, orientation, value):
        method = getattr(self, orientation)
        method(value)

    def insert_pair(self, pair):
        self.steps += 1
        if pair not in self.dict and pair != (0,0):
            self.dict[pair] = (abs(pair[0]) + abs(pair[1]), self.steps)

    def R(self, value):
        new_x = self.x + value
        for value in range(self.x + 1, new_x + 1):
            pair = (value, self.y)
            self.insert_pair(pair)
        self.x = new_x

    def L(self, value):
        new_x = self.x - value
        i = self.x - 1
        while i >= new_x:
            pair = (i, self.y)
            self.insert_pair(pair)
            i -= 1          
        self.x = new_x

    def U(self, value):
        new_y = self.y + value
        for value in range(self.y + 1, new_y + 1):
            pair = (self.x, value)
            self.insert_pair(pair)
        self.y = new_y

    def D(self, value):
        new_y = self.y - value
        i = self.y - 1
        while i >= new_y:
            pair = (self.x, i)
            self.insert_pair(pair)
            i -= 1
        self.y = new_y

def iterate(graph, directions):
    for direction in directions:
        orientation = direction[0]
        value = int(direction[1:])
        graph.calc(orientation, value)

f = open("3input", "r")
f1 = f.readlines()

graph1 = Graph()
line = f1[0]
new_line = line.replace("\n", "")
directions = new_line.split(",")
iterate(graph1, directions)

graph2 = Graph()
line = f1[1]
new_line = line.replace("\n", "")
directions = new_line.split(",")
iterate(graph2, directions)

repeated_distances = []
for key in graph1.dict:
    if key in graph2.dict:
        repeated_distances.append(graph1.dict[key][1] + graph2.dict[key][1])
print(min(repeated_distances))
