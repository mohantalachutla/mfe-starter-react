import { Rating } from "flowbite-react";
import _ from "lodash";

const RatingComponent = function ({ rating, total = 5 }) {
  return (
    <Rating>
      {_.range(1, total + 1, 1).map((index) => {
        return <Rating.Star filled={index <= rating} key={index} />;
      })}
      <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
        {rating} out of {total}
      </span>
    </Rating>
  );
};

export { RatingComponent as Rating };
