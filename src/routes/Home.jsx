import Banner from "../components/banner/Banner"
import { Box } from "@mui/material"
import styles from "./home.module.css"

const Home = () => {
  return (
    <Box className={styles.container}>
      <Banner />
    </Box>

  )
}

export default Home