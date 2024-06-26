import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import DashboardHeader from '.';
import Navigation from '../../molecules/navigation-menu';
import AvatarWrapper from '../../molecules/avatar';
import { UserNav } from '../profile-menu/index';
import { userNavigation } from '../profile-menu/data';
import { navigationLinks } from '../../molecules/navigation-menu/data';

export default {
  component: DashboardHeader,
  subcomponents: {
    Navigation,
    AvatarWrapper,
    UserNav,
  },
  argTypes: {},
} as Meta<typeof DashboardHeader>;

const Template: StoryFn<typeof DashboardHeader> = (args) => (
  <DashboardHeader {...args} />
);

export const HeaderStory = Template.bind({});

HeaderStory.args = {
  title: 'ayasofya',
  logo: '',
  userNav: userNavigation,
  navMenu: navigationLinks,
};
