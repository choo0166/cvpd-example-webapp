from pathlib import Path
from flask_restx import Resource, Namespace, reqparse
from utils.data_proc import process_data
import pandas as pd
import plotly
import plotly.express as px

# Set the upload file path, only required when uploading to localhost
UPLOAD_FOLDER = str(Path(__file__).parents[1]) + "/uploads" 

ns = Namespace('chart', description="generates a pie chart from a given csv file")

parser = reqparse.RequestParser()
parser.add_argument('file', type=str, location='args', required=True)
parser.add_argument('groupBy', type=str, location='args', required=True)
parser.add_argument('aggMetric', type=str, location='args', required=True)

@ns.route('')
class Chart(Resource):
  @ns.expect(parser)
  def get(self):
    args = parser.parse_args()
    print(f"Args: {args}")
    try:
      filepath = UPLOAD_FOLDER + f"/{args.file}"
      df = process_data(filepath)
      group_by_col = args.groupBy 
      agg_metric = args.aggMetric

      if group_by_col == "Year":
         df[group_by_col] = df['Date'].dt.year
      
      if agg_metric == "Sum":
         grouped_df = df.groupby(group_by_col)["Amount"].sum().reset_index()
      elif agg_metric == "Avg":
         grouped_df = df.groupby(group_by_col)["Amount"].mean().reset_index()
      elif agg_metric == "Min":
         grouped_df = df.groupby(group_by_col)["Amount"].min().reset_index()
      elif agg_metric == "Max":
         grouped_df = df.groupby(group_by_col)["Amount"].max().reset_index()
      
      fig = px.pie(grouped_df, names=group_by_col, values="Amount", width=600, height=400)
      return fig.to_html()
    except Exception as err:
      return {"error": str(err)}, 400, {'Content-Type': 'application/json'}
         
      
      


    
