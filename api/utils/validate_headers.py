import pandas as pd
from werkzeug.exceptions import BadRequest

REQUIRED_HEADERS = [
  "Date",
  "Category",
  "Amount"
]

def validate_headers(file):
  """
  Validates whether the uploaded CSV contains required headers
  """
  headers = pd.read_csv(file, nrows=0).columns.tolist()
  if len(REQUIRED_HEADERS) != len(headers):
    raise BadRequest("File headers must contain Date, Category and Amount")
  
  for header in REQUIRED_HEADERS:
    if header not in headers:
      raise BadRequest("File headers must contain Date, Category and Amount")

