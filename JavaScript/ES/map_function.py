list(map(int, ['1', '2', '3']))

numbers = [0, 9, 99]

def add_one(number):
    return number + 1

list(map(add_one, numbers))  # [1, 10, 100]

new_numbers1 = list(map(add_one, numbers))
new_numbers2 = list(map(lambda n: n + 1, [0, 9, 99]))

print(new_numbers1, new_numbers2) # [1, 10, 100] [1, 10, 100]
