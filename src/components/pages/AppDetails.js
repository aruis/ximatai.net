import React from 'react';
import { useParams } from 'react-router-dom';

const AppDetails = () => {
    let { appId } = useParams();

    // 基于appId获取App详情，这里简化处理，实际项目中可能需要从状态管理或API获取
    const appDetails = {
        title: "示例App",
        description: "这是App的详细介绍...",
        privacy: "这是App的隐私政策说明..."
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold">{appDetails.title}</h1>
            <p className="mt-4">{appDetails.description}</p>
            <h2 className="text-2xl font-bold mt-8">隐私政策</h2>
            <p className="mt-4">{appDetails.privacy}</p>
        </div>
    );
};

export default AppDetails;
