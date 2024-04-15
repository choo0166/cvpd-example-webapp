import pandas as pd
from functools import cache
from .validate_headers import validate_headers

@cache
def process_data(file):
  """
  Checks datatypes of columns and cleans the data for
  downstream processing tasks 
  """
  # Validate required headers and remove rows with null values
  validate_headers(file)
  df = pd.read_csv(file, parse_dates=['Date'], dayfirst=True)
  # Check datatype matching
  expected_data_types = {'Date': 'datetime64[ns]', 'Category': 'object', 'Amount': 'float64'}
  for col, dtype in expected_data_types.items():
      if df[col].dtype != dtype:
          raise ValueError(f"Invalid datatype for column '{col}'. Expected '{dtype}'.")
  # Drop null values
  df.dropna()

  return df


