/** @jsxImportSource theme-ui */
import { useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Box, Container, Heading, Text, Flex, Button } from 'theme-ui'
import useSWR from "swr";

import { Layout, Modal } from '../../component'
import { fetcher } from '../../utils/fetcher'

const ProductPage: NextPage = () => {
  const router = useRouter()
  const { productId } = router.query

  const { data, error } = useSWR<Product>(
    `http://localhost:3001/api/product/${productId}/`,
    fetcher
  );
  const [showModal, setShowModal] = useState(false)
  
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  console.log(data)

  return (
    <Layout title={data.name}>
      <Container sx={{
        minHeight: '100vh',
        bg: "background",
        pt: 8
      }}>
        {/* <Link href="/"><a>Go back</a></Link> */}
        <Heading as="h1" variant="xl">{data.name}</Heading>
        
        <Flex sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 7,
          borderBottom: '1px solid',
          borderColor: 'border.light'
        }}>
          <Flex>
            <Text as="p" variant="lg" sx={{fontWeight: 'body'}}>3.8</Text>
          </Flex>
          <Button variant="primary" onClick={() => setShowModal(true)}>Add review</Button>
        </Flex>

        <Heading as="h2" variant="lg" mt={5}>Reviews</Heading>
      </Container>

      <Modal isOpen={showModal} setShowModal={setShowModal}>
        <Heading as="h2" variant="lg">What's your rating?</Heading>
        
      </Modal>
    </Layout>
  )
}

export default ProductPage