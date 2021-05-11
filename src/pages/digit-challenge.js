import * as React from "react";
import { Link } from "gatsby";

import Layout from "@components/layout";
import Seo from "@components/seo";
import DigitImageContainer from "@components/DigitImageContainer";

const SecondPage = () => (
  <Layout>
    <Seo title="Digit Challenge" />
    <h1>Welcome to the basic Layout of the Digit Challenge</h1>
    <DigitImageContainer />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
