import React from 'react';
import AppCard from './AppCard'; // 确保路径正确

const Apps = () => {
    const appsData = [
        {
            id: "booktime",
            logo: "./booktime.jpg",
            title: "BookTime",
            subtitle:"您的阅读计时伴侣",
            summary: "我们改变不了人生的长度，但是却可以通过阅读改变人生的厚度。\n" +
                "BookTime 专为爱读纸质书的小伙伴打造，它是您安静的阅读计时伴侣，您可以通过它督促自己完成每日阅读打卡，持续跟踪自己的阅读时间。",
            storeUrl:"https://apps.apple.com/cn/app/booktime-您的阅读计时伴侣/id1600654269"
        },
        {
            id: "timebank",
            logo: "./timebank.jpg",
            title: "TimeBank",
            subtitle:"时间是你唯一拥有的东西",
            summary: "人生不过是两件事情的不断轮回：\n" +
                "SaveTime，积跬步，可至千里；\n" +
                "KillTime，休息一下，是为了再次出发。\n" +
                "有了 TimeBank 您将更全面的了解自己时间的分配，得出属于您的时间存款。",
            storeUrl:"https://apps.apple.com/cn/app/timebank-时间是你唯一拥有的东西/id6474505609"
        }
        // 可以根据需要添加更多应用
    ];

    return (
        <div className="bg-slate-900  text-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center text-white mb-8">老刘自己做的App</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {appsData.map((app) => (
                        <div key={app.id} className="app-card-container">
                            <AppCard {...app} />
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
};

export default Apps;
