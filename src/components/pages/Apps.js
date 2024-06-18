import React from 'react';
import AppCard from './AppCard';
import appsInfo from "../../data/appsInfo"; // 确保路径正确

const Apps = () => {
    const appsArray = Object.values(appsInfo);

    return (
        <div className="bg-slate-900  text-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center text-slate-100 mb-8">老刘自己做的App</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {appsArray.map((app) => (
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
