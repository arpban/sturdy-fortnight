/** @jsxImportSource theme-ui */
import { Text, Flex } from "theme-ui";

const Review: React.FC<{ review: Review }> = ({ review }) => (
  <Flex sx={{ alignItems: "center" }} mt={`12px`}>
    <Text
      sx={{
        fontWeight: "bold",
        fontSize: 2,
      }}
    >
      {review.rating}
    </Text>
    {review.comment && (
      <Text
        sx={{
          fontSize: 2,
          color: "text.light",
          ml: 2,
        }}
      >
        {review.comment}
      </Text>
    )}
  </Flex>
);

export default Review;
