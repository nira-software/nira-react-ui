import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  component: Button,
  title: 'Nira/Componentes/Button',
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg'],
      },
    },
    outline: {
      control: {
        type: 'boolean',
        default: false,
      },
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
    size: 'md',
    outline: false,
    className: '',
  },
};

export const Neutral: Story = {
  args: {
    children: 'Click me',
    size: 'md',
    outline: false,
    className: 'btn-neutral',
  },
};

export const Primary: Story = {
  args: {
    children: 'Click me',
    size: 'md',
    outline: false,
    className: 'btn-primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Click me',
    size: 'md',
    outline: false,
    className: 'btn-secondary',
  },
};

export const Accent: Story = {
  args: {
    children: 'Click me',
    size: 'md',
    outline: false,
    className: 'btn-accent',
  },
};

export const Info: Story = {
  args: {
    children: 'Click me',
    size: 'md',
    outline: false,
    className: 'btn-info',
  },
};

export const Success: Story = {
  args: {
    children: 'Click me',
    size: 'md',
    outline: false,
    className: 'btn-success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Click me',
    size: 'md',
    outline: false,
    className: 'btn-warning',
  },
};

export const Error: Story = {
  args: {
    children: 'Click me',
    size: 'md',
    outline: false,
    className: 'btn-error',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Click me',
    size: 'md',
    outline: false,
    className: 'btn-ghost',
  },
};
