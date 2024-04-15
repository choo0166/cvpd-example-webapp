from flask_restx import Api 
from .upload import ns as upload_ns
from .chart import ns as chart_ns

api = Api(
  title="CVPD webapp backend",
  version="1.0",
  description="API for CVPD webapp"
)

# add namespaces
api.add_namespace(upload_ns)
api.add_namespace(chart_ns)