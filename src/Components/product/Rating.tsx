import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

interface RatingProps {
  value: number;
  reviews?: number;
}

export function Rating({ value, reviews }: RatingProps) {
  const maxStars = 5;
  const filledStars = Math.min(Math.max(value, 0), maxStars);

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {Array.from({ length: maxStars }, (_, i) =>
          i < filledStars ? (
            <StarOutlinedIcon
              key={i}
              fontSize="small"
              className="text-amber-400"
            />
          ) : (
            <StarBorderOutlinedIcon
              key={i}
              fontSize="small"
              className="text-zinc-300"
            />
          )
        )}
      </div>

      {reviews ? (
        <span className="text-gray-600 text-sm">({reviews})</span>
      ) : (
        <span className="text-gray-600 text-sm">(0)</span>
      )}
    </div>
  );
}
