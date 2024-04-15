from flask import Flask
from flask_cors import CORS
from apis import api

app = Flask(__name__)
CORS(app)
api.init_app(app)

if __name__ == "__main__":
  port = 8080
  host = "localhost"
  app.run(debug=True, host="0.0.0.0", port=port)