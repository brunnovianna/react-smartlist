function SkeletonItem ({ ...props }) {
    return (
        <li className="flex mb-3 h-4">
            <div className="w-4 rounded-[3px] mr-4 bg-gray-200"></div>
            <div className={`${ props.width } rounded-[3px] bg-gray-200 mr-3`}></div>
        </li>
    );
}

export default SkeletonItem;