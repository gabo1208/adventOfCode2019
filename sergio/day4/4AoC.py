X = 236491
Y = 713787

class Rules:
    def check_rules(self, digits):
        return self.adjacent_equals(digits) and self.only_increase(digits)

    def adjacent_equals(self, digits):
        rep = {}
        last = digits[0]
        tail = digits[1:]
        
        for i in tail:
            if i == last and i in rep:
                rep[i] +=1
            elif i == last and i not in rep:
                rep[i] = 2
            last = i
        
        for key in rep:
            if rep[key] == 2:
                return True
        
        return False

    def only_increase(self, digits):
        last = digits[0]
        for i in digits:
            if i < last:
                return False
            last = i
        return True

rules = Rules()
meet_criteria = []
for value in range(X, Y):
    digits = [int(i) for i in str(value)]
    if rules.check_rules(digits):
        meet_criteria.append(value)

print(meet_criteria)
print(len(meet_criteria))
