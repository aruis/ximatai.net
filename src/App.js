import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // 确保这个路径正确
import MainContent from './components/pages/MainContent'; // 调整为正确的路径
import Footer from './components/Footer'; // 确保这个路径正确
import Apps from './components/pages/Apps'; // 更新了导入路径
import BookRecommendations from './components/pages/BookRecommendations'; // 更新了导入路径
import About from './components/pages/About'; // 更新了导入路径
import AppDetails from './components/pages/AppDetails';
import './index.css'; // 确保你已设置好Tailwind CSS

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/apps" element={<Apps />} />
                        <Route path="/apps/:appId" element={<AppDetails />} />
                        <Route path="/book-recommendations" element={<BookRecommendations />} />
                        <Route path="/about" element={<About />} />
                        {/* 你可以根据需要添加更多路由 */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
