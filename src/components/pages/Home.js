import React from 'react';
import {FaEnvelope, FaGithub} from 'react-icons/fa';

const Home = () => {
    return (
        <div className="flex justify-center items-center mt-36 p-8 bg-slate-900 text-white mx-auto">
            <div className="flex justify-center w-full max-w-4xl">
                {/* 左边部分：头像 */}
                <div className="flex-none w-48 h-48 mr-8">
                    <img src="/avatar.jpg" alt="Avatar"
                         className="rounded-full w-full h-full object-cover border-4 border-white"/>
                </div>

                {/* 右边部分：个人信息 */}
                <div className="text-gray-200">
                    <div className="flex items-end mb-3">
                        <h2 className="text-4xl font-bold text-white">牧云踏歌</h2>
                        <span className="text-md text-gray-400 ml-3">什么都想学的老刘</span>
                    </div>

                    <p className="text-lg mb-3">看一辈子书，写一辈子代码，除此以外，再无他求。</p>
                    <p className="mb-3">编程 / 看书 / 摄影</p>
                    <p className="mb-3">中国矿业大学（2006-2010）</p>
                    <div className="flex items-center space-x-4">
                        <a href="https://github.com/aruis" className="hover:text-blue-400">
                            <FaGithub size="20"/>
                        </a>
                        <a href="mailto:eastern.howls0a@icloud.com" className="hover:text-blue-400">
                            <FaEnvelope size="20"/>
                        </a>
                        <a href="https://space.bilibili.com/24370353" className="hover:text-blue-400">
                            BiliBili
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
