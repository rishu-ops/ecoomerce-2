import React from 'react'
import Layout from '../components/layout/Layout'

const About = () => {
  return (
    <Layout title={'About us'}>
  <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://img.freepik.com/free-vector/brainstorming-concept-landing-page_52683-26979.jpg?w=740&t=st=1704710632~exp=1704711232~hmac=8f3c13806f9c760e16115f538fbb378792c87d7b5ca4a4adc0ac17efc114a7ee"
            alt="contactus"
            className="img-fluid images"
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Online Transactions: Ecommerce involves online transactions where buyers and sellers connect through websites or online platforms.

Variety of Products: Ecommerce platforms offer a wide variety of products, ranging from physical goods like clothing and electronics to digital products and services.

Payment Methods: Ecommerce transactions often involve electronic payments, using credit cards, digital wallets, or other online payment methods.

Global Reach: Ecommerce allows businesses to reach a global audience, breaking down geographical barriers and expanding market reach.

Convenience: Consumers can shop at any time of the day from the comfort of their homes, making ecommerce highly convenient.


          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
