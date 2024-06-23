import React, { useState } from 'react';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => setIsExpanded(!isExpanded);

    return (
        <div className="flex min-h-screen">
            <aside className={`flex-shrink-0 ${isExpanded ? 'w-64' : 'w-20'} bg-white text-gray-600 transition-width duration-300 shadow-lg`}>
                <div className="p-5 flex justify-end">
                    <button onClick={toggleSidebar}>{isExpanded ? '<' : '>'}</button>
                </div>
                <ul className={`space-y-2 ${!isExpanded && 'hidden'}`}>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100 m-4 rounded-lg">
                            {isExpanded && <span><b>Home</b></span>}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100 m-4 rounded-lg">
                            {isExpanded && <span><b>Settings</b></span>}
                        </a>
                    </li>
                    {/* Add other items similarly */}
                </ul>
            </aside>
            <main className="flex-grow p-24">
                <div className='flex flex-wrap space-y-10 space-y-10'>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
                        <div className="px-6 py-4 ">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">

                        <div className="px-6 py-4 ">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">

                        <div className="px-6 py-4 ">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">

                        <div className="px-6 py-4 ">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Sidebar;