import type { ExtractPropTypes } from 'vue';
export const buttonProps = {
  type: {
    type: String,
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
