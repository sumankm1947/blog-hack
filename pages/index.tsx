import { AppShell } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import Footer_ from "../components/home/footer";
import Header_ from "../components/home/header";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>BlogHack</title>
        <meta name="description" content="A blog writing website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        padding="md"
        footer={<Footer_ />}
        header={<Header_ />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <div style={{ height: "200vh" }}></div>
      </AppShell>
    </Fragment>
  );
};

export default Home;
