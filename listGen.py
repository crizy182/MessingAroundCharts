import random
import json

def rand_float_range(start, end):
    return random.random() * (end - start) + start

def years_list(count):
    years = []

    for idx in range(count):
      years.append(idx+1950)
    
    return years

def random_value(count):
    random_acum = []
    acum = 0
    for idx in range(count):
        acum += round(random.uniform(0.1, 5.7),0)
        random_acum.append(acum)
    

    for i in range(count):
        random_acum[i] = 100*random_acum[i]/random_acum[count-6]

    return random_acum

def diccionary(years, proms):
    data = {}

    for idx in range(len(years)):
        data[years[idx]]= proms[idx]
    
    return data
    
if __name__=='__main__':
    count = 10
    anuales = years_list(count)
    aleatorios = random_value(count)

    data = diccionary(anuales, aleatorios)
    print (json.dumps(data))