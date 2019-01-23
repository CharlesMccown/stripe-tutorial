import React from "react"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
        <div>
        <h1>The System</h1>
        <div>
          Words, words, words.
        </div>
      </div>
    </Layout>
  )
}
