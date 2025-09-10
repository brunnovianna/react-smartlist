function Skeleton() {
    return (
        <ul className="skeleton animate-pulse w-full">
            <li className="flex mt-6 mb-3 h-4">
                <div className="w-4 rounded-[3px] mr-4 bg-gray-200"></div>
                <div className="w-[450px] rounded-[3px] bg-gray-200 mr-3"></div>
            </li>
            
            <li className="flex mb-3 h-4">
                <div className="w-4 rounded-[3px] mr-4 bg-gray-200"></div>
                <div className="w-[650px] rounded-[3px] bg-gray-200 mr-3"></div>
            </li>
            <li className="flex mb-3 h-4">
                <div className="w-4 rounded-[3px] mr-4 bg-gray-200"></div>
                <div className="w-[230px] rounded-[3px] bg-gray-200 mr-3"></div>
            </li>
            <li className="flex mb-3 h-4">
                <div className="w-4 rounded-[3px] mr-4 bg-gray-200"></div>
                <div className="w-[180px] rounded-[3px] bg-gray-200 mr-3"></div>
            </li>
            <li className="flex mb-3 h-4">
                <div className="w-4 rounded-[3px] mr-4 bg-gray-200"></div>
                <div className="w-[350px] rounded-[3px] bg-gray-200 mr-3"></div>
            </li>
        </ul>
    );
}

export default Skeleton;