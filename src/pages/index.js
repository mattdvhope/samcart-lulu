import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import interactWithLulu from "../components/interactWithLulu" // Import the function

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>Sandbox to test Samcart interaction with Lulu API</h1>
      <button 
        className={styles.largeButton} 
        onClick={() => interactWithLulu()} // Invoke the imported function
        style={{
          padding: "20px 40px",
          fontSize: "18px",
          backgroundColor: "#007acc",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Request Lulu API JWT
      </button>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
