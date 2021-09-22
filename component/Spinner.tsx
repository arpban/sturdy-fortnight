/** @jsxImportSource theme-ui */
import HashLoader from "react-spinners/HashLoader"
import { Flex } from "theme-ui"

const Spinner = () => (
  <Flex
    sx={{
      width: "100%",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <HashLoader loading={true} color={"orange"} size={60} />
  </Flex>
)

export default Spinner
