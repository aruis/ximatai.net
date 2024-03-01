import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white text-center p-4">
            <p className="text-md">© 2024 戏码台. All rights reserved.</p>

            <div className="text-xs text-gray-300 flex items-center justify-center mt-2">
                <a className="text-xs text-gray-300" href="https://beian.miit.gov.cn">
                    苏ICP备2024057896号-2
                </a>
                <img src="beian.png" alt="备案图标" className="ml-4 mr-2 w-3"/> <a
                href="https://beian.mps.gov.cn/#/query/webSearch?code=32031102020027" rel="noreferrer"
                target="_blank">苏公网安备32031102020027号</a>
            </div>
        </footer>

    )
        ;
};

export default Footer;

