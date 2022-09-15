import { Fragment, useState } from "react";
import { Modal, Button, Group, Tabs } from "@mantine/core";

const Auth = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Fragment>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Join BlogHack"
        centered
        overlayOpacity={0.55}
        overlayBlur={3}
        transition="fade"
      >
        <Tabs defaultValue="login">
          <Tabs.List>
            <Tabs.Tab value="login">Login</Tabs.Tab>
            <Tabs.Tab value="signup">Signup</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="login">Login</Tabs.Panel>
          <Tabs.Panel value="signup">Signup</Tabs.Panel>
        </Tabs>
      </Modal>

      <Group position="center">
        <Button
          onClick={() => setOpened(true)}
          color="teal"
          sx={{ fontFamily: "Poppins", fontWeight: "lighter" }}
        >
          Login
        </Button>
      </Group>
    </Fragment>
  );
};

export default Auth;
