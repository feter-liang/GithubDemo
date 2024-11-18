import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)
  const currentTime = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })

  return (
    <Router basename={import.meta.env.DEV ? '/' : '/githubdemo'}>
      <div style={{ 
        padding: '40px', 
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{ 
          color: '#646cff',
          fontSize: '2.5em',
          marginBottom: '20px'
        }}>
          React + Vite 部署測試
        </h1>
        
        <div style={{
          backgroundColor: '#f0f0f0',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <h2>部署狀態確認</h2>
          <p style={{ fontSize: '1.2em', color: '#333' }}>
            目前時間：{currentTime}
          </p>
        </div>

        <div style={{
          backgroundColor: '#e6f3ff',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <h3>互動測試</h3>
          <p>計數器：{count}</p>
          <button 
            onClick={() => setCount(count + 1)}
            style={{
              backgroundColor: '#646cff',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            增加計數
          </button>
        </div>

        <footer style={{ 
          marginTop: '40px', 
          color: '#666',
          borderTop: '1px solid #eee',
          paddingTop: '20px'
        }}>
          <p>這是一個簡單的部署測試頁面</p>
          <p>如果您看到這個頁面，表示部署已經成功！</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
