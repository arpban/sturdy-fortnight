/** @jsxImportSource theme-ui */
import { Box, Flex } from "theme-ui"

type Props = {
  children: React.ReactNode
  isOpen: boolean
  setShowModal: (state: boolean) => void
}

const Modal: React.FC<Props> = ({
  children,
  isOpen,
  setShowModal,
  ...props
}) => {
  if (!isOpen) {
    return null
  }

  return (
    <Flex
      {...props}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100vh",
        background: "rgba(123, 123, 123, 0.3)",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
      }}
      onClick={(e: React.MouseEvent): void => {
        // Only closes the modal if the user clicks on the blank area
        if (e.target === e.currentTarget) {
          setShowModal(false)
        }
      }}
    >
      <Box
        sx={{
          maxWidth: "500px",
          width: "100%",
          m: 4,
          backgroundColor: "background",
          p: 5,
          borderRadius: "16px",
          boxShadow:
            "0px 10px 38px -10px rgba(14, 18, 22, 0.35), 0px 10px 20px -15px rgba(14, 18, 22, 0.2)",
        }}
      >
        {children}
      </Box>
    </Flex>
  )
}

export default Modal
