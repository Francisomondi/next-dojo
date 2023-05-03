import React from 'react'
import Layout from './../layout/layout.jsx'

const home = (props) => {
  return (
    <Layout>
        <h1>{props.title}</h1>
        <h2> {props.description}</h2>
    </Layout>
  )
}


export default home
export async function getStaticProps(){
    const data= {title:"my great post", description: "indeed a great post"}

    return{
        props:data
    }
}