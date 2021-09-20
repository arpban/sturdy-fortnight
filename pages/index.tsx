/** @jsxImportSource theme-ui */
import type { NextPage } from 'next'
import Head from 'next/head'
import {Box, Container, Heading, Text, Flex} from 'theme-ui'
import useSWR from "swr";

import { Product } from '../component';
import { fetcher } from '../utils/fetcher'

const Home: NextPage = () => {
  const { data, error } = useSWR<Product[]>(
    "http://localhost:3001/api/product/",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  console.log(data)

  return (
    <div>
      <Head>
        <title>Mintroad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container variant="full">
        <Container sx={{
          minHeight: '100vh',
          bg: "background",
          pt: 8
        }}>
          <Heading as="h1" variant="xl" sx={{
            textAlign: 'center',
          }}>Mintroad</Heading>
          
          <Flex sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 7,
            py: 3,
            borderBottom: '1px solid',
            borderColor: 'border.base'
          }}>
            <Heading as="h2" variant="lg">Products</Heading>
          </Flex>
          
          {data.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </Container>
      </Container>
    </div>
  )
}

export default Home
