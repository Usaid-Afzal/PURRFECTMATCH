import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from '../styles/FooterSocial.module.css';

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <img src='/src/assets/logo.png' alt='Logo' width={30} height={30} />
      <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}