import csv, json

csvFilePath = 'USA/GDP_quarterly.csv'

jsonFilePath = 'USA/GDP_growth_quarterly.json'

data = {}

with open(csvFilePath) as csvFile:
  csvReader = csv.DictReader(csvFile)
  for rows in csvReader:
    year = rows['DATE'].split('-')[0]
    quarter = rows['quarter']
    GDP = rows['Growth']
    data[year+'-'+quarter]= GDP

with open(jsonFilePath, 'w') as jsonFile:
  jsonFile.write(json.dumps(data, indent=4))