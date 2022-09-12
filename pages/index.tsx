import { Text } from "@mantine/core";

import type { NextPage } from "next";
import Head from "next/head";
import { Fragment,  } from "react";

const Home: NextPage = () => {


  return (
    <Fragment>
      <Head>
        <title>BlogHack</title>
        <meta name="description" content="A blog writing website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text>hello</Text>
    </Fragment>
  );
};

export default Home;
