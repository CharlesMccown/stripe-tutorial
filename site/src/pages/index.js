import React from "react"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
        <div className="site-logo-container">
            <div>
                Some words describing the site home page.
            </div>     
        </div>
    </Layout>
  )
}
