import { fn } from '@storybook/test';
import products from '../Carproducts/products';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default{
    title: 'Car-products',
    component: products,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    },
};
// export const Default = {
//     args: {
//       task: {
//         id: '1',
//         title: 'Test Task',
//         // state: 'TASK_INBOX',
//       },
//     },
//   };
  export const Primary = {
    args: {
      primary: true,
      label: "gtrg",
      size: "large",
      backgroundColor: "red"
    },
  };