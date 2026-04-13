import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import appsInfo from "../../data/appsInfo";
import {marked} from 'marked';
import DOMPurify from 'dompurify';
import 'github-markdown-css/github-markdown.css';
import '../../markdown-dark.css';

const AppDetails = () => {
    const { appId } = useParams();
    const appDetails = appsInfo[appId];
    const [privacyPolicy, setPrivacyPolicy] = useState('');
    const hasStoreUrl = Boolean(appDetails?.storeUrl);
    const primaryUrl = appDetails?.primaryUrl || appDetails?.storeUrl;
    const primaryLabel = appDetails?.primaryLabel || (hasStoreUrl ? 'App Store' : '查看详情');

    useEffect(() => {
        // 假设你的Markdown文件放在public文件夹下，并以app的id命名
        fetch(`/app/privacy-policies/${appId}.md`)
            .then(response => response.text())
            .then(text => {
                const html = marked.parse(text);
                setPrivacyPolicy(DOMPurify.sanitize(html));
            });
    }, [appId]);


    return (
        <div className="bg-slate-900 text-white pb-8 pr-8 pl-8"> {/* Padding调整以提供更多空间 */}

            {/* App详细信息显示区 */}
            {appDetails ? (
                <>
                    {/* Logo显示区域 */}
                    <div className="flex justify-center w-full mt-16">
                        <img src={appDetails.logo} alt={`${appDetails.title} Logo`}
                             className="w-52 h-52 object-cover rounded-3xl shadow-2xl transform hover:scale-110 transition-transform duration-300 ease-in-out"/>
                    </div>

                    <div className="text-center mb-4 mt-4">
                        <ul className="flex flex-wrap justify-center gap-2">
                            {appDetails.platform.map((plat, index) => (
                                <li key={index} className="bg-gray-700 px-3 py-1 rounded-full text-xs">{plat}</li>
                            ))}
                        </ul>
                        {(appDetails.githubUrl || appDetails.availability) && (
                            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
                                {appDetails.githubUrl && (
                                    <a
                                        href={appDetails.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${appDetails.title} GitHub repository`}
                                        className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-3 py-1.5 text-slate-300 transition-colors hover:border-slate-300 hover:text-white"
                                    >
                                        <FaGithub size="1.05em" />
                                        <span>GitHub</span>
                                    </a>
                                )}
                                {appDetails.availability && (
                                    <span className="inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1.5 text-sky-300 ring-1 ring-inset ring-sky-400/20">
                                        {appDetails.availability}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                    {/* App详细信息区 */}
                    <div className="flex flex-col items-center justify-center mt-12 mb-12">
                        <h2 className="text-4xl font-bold mb-4">{appDetails.title}</h2>
                        <h3 className="text-2xl text-gray-300 mb-4">{appDetails.subtitle}</h3>
                        <p className="text-center text-gray-400 text-base whitespace-pre-line max-w-5xl mb-6">{appDetails.summary}</p>
                        <div className="flex flex-wrap justify-center gap-4 mb-20">
                            {hasStoreUrl && (
                                <a href={appDetails.storeUrl} target="_blank" rel="noopener noreferrer">
                                    <img src="/app-store-badge.svg" alt="View on App Store" className="w-32"/>
                                </a>
                            )}
                            {primaryUrl && !hasStoreUrl && (
                                <a
                                    href={primaryUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200"
                                >
                                    {primaryLabel}
                                </a>
                            )}
                            {appDetails.secondaryUrl && (
                                <a
                                    href={appDetails.secondaryUrl}
                                    className="inline-flex items-center rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-300 hover:text-white"
                                >
                                    {appDetails.secondaryLabel || '了解更多'}
                                </a>
                            )}
                        </div>

                        {appDetails.screenshot && (
                            <div className="w-full max-w-6xl mb-16">
                                <img
                                    src={appDetails.screenshot}
                                    alt={`${appDetails.title} screenshot`}
                                    className="w-full rounded-3xl border border-slate-700 shadow-2xl"
                                />
                            </div>
                        )}

                        {/* 隐私政策链接 */}
                        <div id="privacy-policy" className=" markdown-body max-w-5xl"
                             // style={{ backgroundColor: null }}
                             dangerouslySetInnerHTML={{__html: privacyPolicy}}/>

                        {/* 常见问题解答（FAQ） */}
                        {appDetails.qa && appDetails.qa.length > 0 && (
                            <div className="mt-8">
                                <h4 className="text-xl font-semibold text-gray-300 mb-4">常见问题</h4>
                                <ul className="list-disc list-inside text-gray-400 text-lg">
                                    {appDetails.qa.map((qa, index) => (
                                        <li key={index} className="mb-2">{qa}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <p className="text-center text-xl">App详情未找到。</p>
            )}

            <div className="flex justify-center items-center space-x-4 mb-12"> {/* 间距调整 */}
                {Object.entries(appsInfo).map(([id, app]) => (
                    <Link
                        key={id}
                        to={`/apps/${id}`}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ease-in-out ${appId === id ? 'bg-white text-slate-900' : 'text-gray-400 hover:text-white'}`}
                    >
                        {app.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AppDetails;
