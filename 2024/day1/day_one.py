import re
print("Day 1 - Historian Hysteria")

input = []

with open("input.txt") as file:
    s = file.read().strip()

left = []
right = []

for ls in s.split("\n"):
    ls = ls.replace(" ", ",")
    ls = re.sub(r'[,][,]', "", ls).split(',')
    ls = [int(s) for s in ls]
    left.append(ls[0])
    right.append(ls[1])

left.sort()
right.sort()

# zip allows me to go through 2 iterables and combine them
# aggregates iterables for lists, tuples, etc
# so it creates a tuple, for list
# left[0] = [1], right[0] = [2] = zip = (1, 2)
# pretty neat

#part1
answer = sum(abs(l - r) for l, r in zip(left, right))
print("part 1 answer: ", answer)

score = [0] * len(left)
answer = 0

for i in range(len(left)):
    for r in range(len(left)):
        if left[i] == right[r]:
            score[i] += 1
    answer += left[i] * score[i]

print("part 2 answer: ", answer)









