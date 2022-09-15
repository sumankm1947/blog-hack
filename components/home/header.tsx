import React from "react";
import Link from "next/link";

import {
  Header,
  Group,
  Box,
  List,
  Avatar,
  createStyles,
  Space,
  NavLink,
  Anchor,
} from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Auth from "./auth";

const useStyles = createStyles((theme) => ({
  header: {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
  },
  header_link: {
    color: "teal",
    fontSize: "20px",
    fontWeight: "lighter",
    fontFamily: "Poppins",
    ["&:hover"]: {
      textDecoration: "none",
    },
  },
}));

const Header_ = () => {
  const { classes } = useStyles();

  const { user } = useSelector((state: RootState) => state.user);
  return (
    <Header height="auto">
      <Group position="apart" px={100}>
        <Group position="center" align="center" py={10}>
          <Box>LOGO</Box>
        </Group>
        <Group position="center" align="center" py={10}>
          <List className={classes.header}>
            <List.Item>
              <Link href="/about" passHref>
                <Anchor component="a" className={classes.header_link}>
                  About
                </Anchor>
              </Link>
            </List.Item>
            <Space w="lg" />
            <List.Item>
              <Link href="/blogs" passHref>
                <Anchor component="a" className={classes.header_link}>
                  Blogs
                </Anchor>
              </Link>
            </List.Item>
            <Space w="lg" />
          </List>
          {user ? (
            <Avatar
              color="teal"
              radius="xl"
              sx={{ cursor: "pointer" }}
              src={user.avatar}
            >
              {user.username}
            </Avatar>
          ) : (
            <Auth />
          )}
        </Group>
      </Group>
    </Header>
  );
};

export default Header_;
