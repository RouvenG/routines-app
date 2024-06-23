import { useState } from "react";


export default function Sidebar() {

    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => setIsExpanded(!isExpanded);

    return (
        <aside className={`flex-shrink-0 ${isExpanded ? 'w-64' : 'w-20'} bg-white text-gray-600 transition-width duration-300 shadow-lg`} >
            <div className="p-5 flex justify-end">
                <button onClick={toggleSidebar}>
                    {isExpanded ? (
                        <img src="/routine_logo.png" className="transition-transform duration-300 rotate-90" alt="Logo" style={{ width: '30px', height: '30px' }} />
                    ) : (
                        <img src="/routine_logo.png" className="transition-transform duration-300" alt="Logo" style={{ width: '30px', height: '30px' }} />
                    )}
                </button>
            </div>
            <ul className={`space-y-2 ${!isExpanded && 'hidden'}`}>
                <li>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100 m-4 rounded-lg">
                        {isExpanded && <span><b>My Routines</b></span>}
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100 m-4 rounded-lg">
                        {isExpanded && <span><b>Trash</b></span>}
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
    );
}