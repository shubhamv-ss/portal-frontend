import { ComponentStory } from '@storybook/react'

import { Cards as Component } from '.'

export default {
  title: 'Cards',
  component: Component,
  argTypes: {},
}

const Template: ComponentStory<typeof Component> = (args: any) => (
  <Component {...args} />
)

const items = [
  {
    title: 'Catena-X News',
    subtitle: 'Catena-X',
    image: {
      src: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=640&q=420',
      alt: 'Catena-X Card',
    },
    description: 'Lorem Ipsum is simply dummy text of the printing.',
    onButtonClick: () => {
      console.log('Catena-X News')
    },
    readMoreText: 'Read more',
    readMoreLink: '#',
    status: 'release',
    statusText: 'In Release',
  },
  {
    title: 'Samrt MOM',
    subtitle: 'Catena-X2',
    image: {
      src: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=640&q=420',
      alt: 'Catena-X Card',
    },
    description:
      'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    onButtonClick: () => {
      console.log('Samrt MOM')
    },
    readMoreText: 'Read more',
    readMoreLink: '#',
    status: 'active',
    statusText: 'Active',
  },
  {
    title: 'Fraud Reporter',
    subtitle: 'Catena-X',
    image: {
      src: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=640&q=420',
      alt: 'Catena-X Card',
    },
    description: 'sea takimata sanctus est Lorem ipsum dolor sit amet.',
    onButtonClick: () => {
      console.log('Fraud Reporter')
    },
    readMoreText: 'Read more',
    readMoreLink: '#',
    status: 'inactive',
    statusText: 'inactive',
  },
  {
    title: 'Fraud Dashboard',
    subtitle: 'Catena-X',
    image: {
      src: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=640&q=420',
      alt: 'Catena-X Card',
    },
    description: 'At vero eos et accusam et justo duo dolores et ea rebum.',
    onButtonClick: () => {
      console.log('Fraud Dashboard')
    },
    readMoreText: 'Read more',
    readMoreLink: '#',
  },
]

export const ContentCards = Template.bind({})
ContentCards.args = {
  columns: 6,
  items: items,
  variant: 'compact',
  buttonText: 'Details',
  imageSize: 'medium',
  imageShape: 'round',
  addButtonClicked: false,
}
