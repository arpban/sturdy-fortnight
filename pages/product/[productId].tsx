/** @jsxImportSource theme-ui */
import { useState } from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import Link from "next/link"
import { Box, Container, Heading, Text, Flex, Button, Label } from "theme-ui"
import useSWR, { useSWRConfig } from "swr"
import { useFormik } from "formik"

import { Layout, Modal, Review } from "../../component"
import InputGroup from "../../component/forms/InputGroup"
import { fetcher } from "../../utils/fetcher"

const ProductPage: NextPage = () => {
  const router = useRouter()
  const { productId } = router.query
  const { mutate } = useSWRConfig()
  const [showModal, setShowModal] = useState(false)

  const formik = useFormik({
    initialValues: {
      rating: "",
      comment: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      console.log(JSON.stringify(values, null, 2))
      const response = await fetch(
        `http://localhost:3001/api/product/${productId}/review`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values, null, 2),
        }
      )
      const responseJson = await response.json()
      console.log(responseJson)
      setSubmitting(false)
      setShowModal(false)
      mutate(`http://localhost:3001/api/product/${productId}/review`)
    },
  })

  const { data, error } = useSWR<Product>(
    `http://localhost:3001/api/product/${productId}`,
    fetcher
  )

  const { data: reviewsData, error: reviewsError } = useSWR<Review[]>(
    `http://localhost:3001/api/product/${productId}/review`,
    fetcher
  )

  if (error) return "An error has occurred."
  if (!data) return "Loading..."

  return (
    <Layout title={data.name}>
      <Container
        sx={{
          minHeight: "100vh",
          bg: "background",
          pt: 8,
        }}
      >
        {/* <Link href="/"><a>Go back</a></Link> */}
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
          <Flex>
            <Text as="p" variant="lg" sx={{ fontWeight: "body" }}>
              3.8
            </Text>
          </Flex>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Add review
          </Button>
        </Flex>

        <Heading as="h2" variant="lg" mt={5}>
          Reviews
        </Heading>
        <Box mt={4}>
          {reviewsData &&
            reviewsData.map(review => (
              <Review key={review._id} review={review} />
            ))}
        </Box>
      </Container>

      <Modal isOpen={showModal} setShowModal={setShowModal}>
        <Heading as="h2" variant="lg">
          What's your rating?
        </Heading>
        <Box mt={3}>
          <form onSubmit={formik.handleSubmit}>
            <InputGroup>
              <Label htmlFor="rating">Rating</Label>
              <input
                id="rating"
                name="rating"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.rating}
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="comment">Comment</Label>
              <textarea
                name="comment"
                onChange={formik.handleChange}
                value={formik.values.comment}
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
