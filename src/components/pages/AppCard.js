import React from 'react';
import {Link} from 'react-router-dom';
import {MdArrowForward} from 'react-icons/md';

const AppCard = ({id, logo, title, subtitle, summary}) => (
    <Link
        to={`/apps/${id}`}
        aria-label={`了解 ${title}`}
        className="flex h-full min-w-0 gap-4 rounded-2xl border border-slate-700
                   bg-gradient-to-br from-slate-800 to-slate-800/70 p-5 shadow-lg
                   transition-colors duration-150 hover:border-slate-400
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400
                   focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900
                   motion-reduce:transition-none sm:gap-5 sm:p-6"
    >
        <img
            src={logo}
            alt=""
            width="112"
            height="112"
            className="h-20 w-20 shrink-0 rounded-2xl object-cover sm:h-28 sm:w-28"
        />
        <div className="flex min-w-0 flex-1 flex-col">
            <h2 className="text-xl font-bold text-white sm:text-2xl">{title}</h2>
            <p className="mt-2 text-base text-slate-300">{subtitle}</p>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                {summary.replace(/\s+/g, ' ').trim()}
            </p>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5 text-sm">
                <span className="ml-auto inline-flex items-center gap-2 font-medium text-slate-200">
                    了解更多 <MdArrowForward aria-hidden="true" />
                </span>
            </div>
        </div>
    </Link>
);

export default AppCard;
