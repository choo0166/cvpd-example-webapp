import { useSelector, useDispatch } from 'react-redux'
import { Upload, Button, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { setFile, setUploading } from '../reducers/uploadReducer'
import { backendApi } from '../services/uploadService'

const Handler = () => {
  const dispatch = useDispatch()

  const uploadProps = {
    name: "file",
    action: backendApi.defaults.baseURL,
    showUploadList: true,
    accept: "text/csv",
    maxCount: 1, 
    onChange(info) {
      if (info.file.status === "uploading") {
        dispatch(setUploading(true))
        return
      }
      if (info.file.status === "done") {
        const response = info.file
        if ("error" in response) {
          message.error("File upload failed")
        } else {
          message.success(`${info.file.name} uploaded successfully`)
          dispatch(setFile(info.file.name))
        } 
      } else if (info.file.status === "error") {
        message.error("File upload failed")
      }
      dispatch(setUploading(false))
    },
    beforeUpload(file) {
      console.log(file.type)
      const isCSV = file.type === "text/csv"
      if (!isCSV) {
        message.error("Unsupported file type")
        return false
      }
      return isCSV
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <Upload { ...uploadProps }>
        <Button icon={<UploadOutlined />}>Select CSV file</Button>
      </Upload>
    </div>
  )
}

export default Handler