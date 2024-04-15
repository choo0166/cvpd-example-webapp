from pathlib import Path
from flask_restx import Resource, Namespace, reqparse
from werkzeug.datastructures import FileStorage

# Set the upload file path, only required when uploading to localhost
UPLOAD_FOLDER = str(Path(__file__).parents[1]) + "/uploads" 
 
ns = Namespace('upload', description="saves an uploaded CSV file for processing")

parser = reqparse.RequestParser()
parser.add_argument('file', type=FileStorage, location='files', required=True)

@ns.route('')
class Upload(Resource):
  @ns.expect(parser)
  def post(self):
    args = parser.parse_args()
    print(f"Args: {args}")
    try:
      doc = args.file
      print(f"Saving upload to {UPLOAD_FOLDER}")
      doc.save(UPLOAD_FOLDER + f"/{doc.filename}")
      return {"status": "success"}, 200, {'Content-Type': 'application/json'}
    except Exception as err:
      return {"error": str(err)}, 400, {'Content-Type': 'application/json'}


