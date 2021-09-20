/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { Box, Heading, Text, Flex, Link as StyledLink } from 'theme-ui'
import styled from '@emotion/styled'


const Product: React.FC<Product> = ({ name, description, price, _id }) => (
  <Link href={`/product/${encodeURIComponent(_id)}/`}>
    <a>
      <Flex sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 4,
        borderBottom: '1px solid',
        borderColor: 'border.lighter',
      }}>
        <Flex sx={{
          flexDirection: 'column',
        }}>
          <Heading as="h3" variant="md">{name}</Heading>
          {description && <Text as="p" variant="xs" sx={{
            color: 'text.light',
            mt: 1,
            maxWidth: '400px'
          }}>{description}</Text>}
        </Flex>
        <Flex sx={{
          flexDirection: 'column',
        }}>
          <Text>${ price || `0`}</Text>
        </Flex>
      </Flex>
    </a>
  </Link>
)

export default Product
