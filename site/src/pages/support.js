import React from "react"
import StripeSkus from "../components/stripe-skus";
import Layout from "../components/layout"

class Support extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout>
                <div>
                    <h1>Support Us</h1>
                    <StripeSkus />
                    <section role="faq">
                        <h2>FAQ About Supporting Us</h2>
                        <article role="question">
                            <h3>What can I expect to recieve in return for my contribution?</h3>
                            <div>
                                Not much at the moment. Being blunt is tough, but the reality is we're working on it as hard as we can but can't make any promises.
                                The moment we are able to tie donations into an account you can expect rewards, but until then your support frees up my time to focus on the project and helps complete the project faster.
                                However, you always have my sincere gratitude for anything you choose to contribute! We all have limited income, and making that step to donate really shows that this idea is sound.
                            </div>
                        </article>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default Support;