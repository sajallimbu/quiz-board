import './App.css'
import Dashboard from './screens/Dashboard'
import Title from './components/Title'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import QuizBoard from './screens/QuizBoard'

function App() {
    return (
        <Router>
            <Title />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/quizboard/:id" element={<QuizBoard />} />
            </Routes>
        </Router>
    )
}

export default App
