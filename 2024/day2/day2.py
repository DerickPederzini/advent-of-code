import re

print("Red-Nosed Reports")

input = []

with open("input.txt") as file:
    s = file.read().strip()

ans = 0 
checker = True

for ls in s.split("\n"):
    ls = ls.replace(" ", ",")
    ls = re.sub(r'[,][,]', "", ls).split(',')
    ls = [int(s) for s in ls]
    for i in range(len(ls)):
        ls.sort()
        print("it", 1)
        while ls[i] >= ls[(i+1)] and checker:
            print("more")
            dif = ls[i] - ls[i+1]
            if 3 < dif < -3 or dif == 0:
                checker = False
            i+=1
        while ls[i] <= ls[(i+1)] and checker:
            print("less")
            dif = ls[i] - ls[i+1]
            print(dif)
            if 3 < dif < -3 or dif == 0:
                checker = False
            i+=1

        if checker: 
            ans += 1

print(ans)
