import SkeletonItem from "./SkeletonItem";

function Skeleton() {
    return (
        <ul className="skeleton animate-pulse w-full pt-6">
            <SkeletonItem width="450" />
            <SkeletonItem width="650" />
            <SkeletonItem width="230" />
            <SkeletonItem width="180" />
            <SkeletonItem width="350" />
        </ul>
    );
}

export default Skeleton;