import { Star } from "lucide-react";
import { motion } from "motion/react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
  reviewCount?: number;
  interactive?: boolean;
  onRate?: (rating: number) => void;
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  showNumber = false,
  reviewCount,
  interactive = false,
  onRate
}: StarRatingProps) {
  const sizeMap = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  const textSizeMap = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starNumber = index + 1;
    const isFilled = starNumber <= Math.floor(rating);
    const isPartial = starNumber === Math.ceil(rating) && rating % 1 !== 0;
    const fillPercentage = isPartial ? (rating % 1) * 100 : 0;

    return (
      <motion.div
        key={index}
        className="relative inline-block"
        whileHover={interactive ? { scale: 1.2 } : {}}
        whileTap={interactive ? { scale: 0.9 } : {}}
        onClick={() => interactive && onRate && onRate(starNumber)}
      >
        {/* Background star (unfilled) */}
        <Star
          className={`${sizeMap[size]} ${interactive ? 'cursor-pointer' : ''}`}
          style={{ color: 'rgba(139, 125, 107, 0.2)' }}
        />

        {/* Filled star */}
        {(isFilled || isPartial) && (
          <div
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: isPartial ? `${fillPercentage}%` : '100%' }}
          >
            <Star
              className={`${sizeMap[size]} fill-current`}
              style={{ color: '#f59e0b' }}
            />
          </div>
        )}
      </motion.div>
    );
  });

  return (
    <div className="inline-flex items-center gap-2">
      <div className="flex items-center gap-0.5">{stars}</div>

      {showNumber && (
        <span className={`${textSizeMap[size]} font-semibold text-foreground`}>
          {rating.toFixed(1)}
        </span>
      )}

      {reviewCount !== undefined && (
        <span className={`${textSizeMap[size]} text-muted-foreground`}>
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
}
