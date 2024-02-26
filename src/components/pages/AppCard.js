import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'; // React Router v6
import {MdMoreHoriz} from 'react-icons/md';

const AppCard = ({id, logo, title, subtitle, summary}) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false); // 新增状态来追踪鼠标悬浮状态

    const summaryLines = summary.split('\n');

    return (
        <div
            className="flex rounded-lg shadow-lg overflow-hidden my-4
               bg-gradient-to-r from-slate-800 to-slate-700
               hover:scale-105  hover:shadow-2xl
               transition-all duration-500 min-w-128"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-48 flex-shrink-0">
                <img src={logo} alt={`${title} Logo`} className="w-full h-full object-cover"/>
            </div>
            <div className="flex-1 p-4 flex flex-col justify-between">
                {/* 使用isHovered状态来切换显示标题/副标题或summary */}
                {!isHovered ? (
                    <div className="mt-1">
                        <h2 className="text-2xl font-bold text-white">{title}</h2>
                        <p className="text-slate-300 text-base mt-2">{subtitle}</p>
                    </div>
                ) : (
                    <div className="text-slate-300 text-sm mt-2">
                        {summaryLines.map((line, index) => (
                            <React.Fragment key={index}>
                                {line}{index < summaryLines.length - 1 && <br/>}
                            </React.Fragment>
                        ))}
                    </div>
                )}
                <button
                    className="self-end flex items-center justify-center bg-transparent hover:bg-slate-500 text-slate-300 hover:text-white p-2 rounded-full h-10 w-10"
                    onClick={() => navigate(`/app/${id}`)}
                >
                    <MdMoreHoriz size="1.5em"/>
                </button>
            </div>
        </div>
    );
};

export default AppCard;
