import { Review } from "@/types/reviews";
import { Star, StarBorderRounded, StarHalfRounded, StarRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";

type Props = {
    review: Review;
}

export const ReviewItem = ({ review }: Props) => {
    const rating = Math.min(Math.max(review.stars, 0), 5);

    return (
        <div className="flex-none w-full max-w-75 h-full min-h-45 bg-white text-black rounded-xl p-6">
            <div className="flex items-center gap-3">
                {review.avatar !== '' ? review.avatar : <Avatar />}
                
                <h3 className="text-xl">{review.name}</h3>
            </div>
            <div className="-ml-1 my-2">
                {[1, 2, 3, 4, 5].map(star => {
                    if (rating >= star) {
                        return <StarRounded className="text-yellow-400" key={star} />;
                    }

                    if (rating >= star - .5) {
                        return <StarHalfRounded className="text-yellow-400" key={star} />;
                    }

                    return <StarBorderRounded className="text-yellow-400" key={star} />;
                })}
            </div>
            <p className="font-semibold">{review.review}</p>
        </div>
    );
}