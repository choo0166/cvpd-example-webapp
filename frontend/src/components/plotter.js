import { useSelector, useDispatch } from 'react-redux'
import { Select, Button, message } from 'antd'
import { setGroupBy, setAggMetric, setChart, setLoading } from '../reducers/plotReducer'
import { getChart } from '../services/plotterService'
/* 
Conditionally render this component only if a file is uploaded
*/

const Plotter = () => {
  const dispatch = useDispatch()
  const { file } = useSelector((state) => state.file)
  const { groupBy } = useSelector((state) => state.groupBy)
  const { aggMetric } = useSelector((state) => state.aggMetric)
  const { chart } = useSelector((state) => state.chart)
  const { loading } = useSelector((state) => state.loading)

  const handleClick = async () => {
    try {
      dispatch(setLoading(true))
      const queryParams = {
        file: file,
        groupBy: groupBy,
        aggMetric: aggMetric
      }
      const response = await getChart(queryParams)
      console.log(response)
      dispatch(setLoading(false))
      dispatch(setChart(response))
    } catch (err) {
      console.log(err)
      message.error("No response")
      dispatch(setLoading(false))
    }
  }

  if (file) {
    return (
      <div style={{ padding: "20px" }}>
        <Select 
          placeholder="Select column to group by"
          onChange={(value) => dispatch(setGroupBy(value))}
          options={
            [
              {
                value: "Year",
                label: "Year"
              },
              {
                value: "Category",
                label: "Category"
              }
            ]
          }
        >
        </Select>
        <Select
          style={{ marginLeft: "10px" }}
          placeholder="Select aggregation metric"
          onChange={(value) => dispatch(setAggMetric(value))}
          options={
            [
              {
                value: "Sum",
                label: "Sum"
              },
              {
                value: "Avg",
                label: "Average"
              },
              {
                value: "Min",
                label: "Minimum"
              },
              {
                value: "Max",
                label: "Maximum"
              }
            ]
          }
          >
        </Select>
        <Button
          style={{ marginLeft: "10px" }}
          type="primary"
          loading={loading}
          disabled={!groupBy || !aggMetric}
          onClick={handleClick}
        >
        Generate chart
        </Button>
        {chart && (
        <div style={{ padding: "20px" }}>
        <iframe srcDoc={chart} width="800pt" height="400pt"/>
        </div>)}
      </div>
    )
  } else {
    return null
  }
}

export default Plotter