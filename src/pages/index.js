import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import EpisodeInfo from "../components/episodeinfo"

const ep1Url =
  "https://ned-mediafiles-s3bucket-17clqsbifzu88.s3.amazonaws.com/art001_isabellareopen_f1rule.mp3"

const IndexPage = () => (
  <Layout>
    <SEO title="Art Northeast Dacne" />
    <p>Welcome to art northeast dance.</p>
    <EpisodeInfo
      title={"Episode 001"}
      introText={"Isabella reopen"}
      audioUrl={ep1Url}
    />
  </Layout>
)

export default IndexPage
