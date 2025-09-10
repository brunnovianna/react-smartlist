import SkeletonItem from "./SkeletonItem";

function Skeleton() {
    return (
        <ul className="skeleton animate-pulse w-full pt-6">
            <SkeletonItem width="w-[450px]" />
            <SkeletonItem width="w-[650px]" />
            <SkeletonItem width="w-[230px]" />
            <SkeletonItem width="w-[180px]" />
            <SkeletonItem width="w-[350px]" />
        </ul>
    );
}

export default Skeleton;