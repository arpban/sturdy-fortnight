/** @jsxImportSource theme-ui */
import { useState, Suspense } from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import Link from "next/link"
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Button,
  Label,
  Link as StyledLink,
  Textarea,
} from "theme-ui"
import useSWR, { useSWRConfig } from "swr"
import { useFormik } from "formik"

import {
  Layout,
  Modal,
  Review,
  StarRating,
  StarRatingStatic,
  Spinner,
} from "../../component"
import InputGroup from "../../component/forms/InputGroup"
import { fetcher } from "../../utils/fetcher"

const ProductPage: NextPage = () => {
  const router = useRouter()
  const { productId } = router.query
  const { mutate } = useSWRConfig()
  const [showModal, setShowModal] = useState(false)

  const formik = useFormik({
    initialValues: {
      rating: 5,
      comment: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      console.log(JSON.stringify(values, null, 2))
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/product/${productId}/review`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values, null, 2),
        }
      )
      const responseJson = await response.json()
      setSubmitting(false)
      setShowModal(false)
      mutate(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/product/${productId}/review`
      )
      mutate(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/product/${productId}`)
      formik.resetForm({})
    },
  })

  const { data, error } = useSWR<Product>(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/product/${productId}`,
    fetcher
  )

  const { data: reviewsData, error: reviewsError } = useSWR<Review[]>(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/product/${productId}/review`,
    fetcher
  )

  if (error) return <Text>An error has occurred.</Text>
  if (!data) return <Spinner />

  return (
    <Layout title={data.name}>
      <Container
        sx={{
          minHeight: "100vh",
          bg: "background",
          py: 8,
        }}
      >
        <Box mb={3}>
          <Link href="/" passHref>
            <StyledLink>&larr; Go back</StyledLink>
          </Link>
        </Box>
        <Heading as="h1" variant="xl">
          {data.name}
        </Heading>

        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            py: 7,
            borderBottom: "1px solid",
            borderColor: "border.light",
          }}
        >
          <Flex
            sx={{
              alignItems: "center",
            }}
          >
            <Text as="p" variant="xl" sx={{ fontWeight: "body" }} mr={3}>
              {data.rating}
            </Text>
            {data.rating && <StarRatingStatic rating={data.rating} />}
          </Flex>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Add review
          </Button>
        </Flex>

        <Heading as="h2" variant="lg" mt={5}>
          Reviews
        </Heading>
        <Suspense fallback={<div>Loading...</div>}>
          <Box mt={4}>
            {reviewsData &&
              reviewsData.map(review => (
                <Review key={review._id} review={review} />
              ))}
          </Box>
        </Suspense>
      </Container>

      {/* Review popup */}
      <Modal isOpen={showModal} setShowModal={setShowModal}>
        <Heading as="h2" variant="lg">
          What&apos;s your rating?
        </Heading>
        <Box mt={4}>
          <form onSubmit={formik.handleSubmit}>
            <InputGroup>
              <Label htmlFor="rating" mb={2}>
                Rating
              </Label>
              <StarRating
                name={`new-review`}
                updateRating={rating => formik.setFieldValue("rating", rating)}
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="comment" mb={2}>
                Comment
              </Label>
              <Textarea
                name="comment"
                onChange={formik.handleChange}
                value={formik.values.comment}
                placeholder="Start typing..."
              />
            </InputGroup>

            <InputGroup>
              <Button
                type="submit"
                disabled={formik.isSubmitting}
                sx={{
                  "&:disabled": {
                    backgroundColor: "muted",
                    cursor: "progress",
                  },
                }}
              >
                Submit review
              </Button>
            </InputGroup>
          </form>
        </Box>
      </Modal>
    </Layout>
  )
}

export default ProductPage
