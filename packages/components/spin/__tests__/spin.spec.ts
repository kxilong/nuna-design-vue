import { mount } from '@vue/test-utils';
import Spin from '../src/index.vue';

const AXIOM = 'Rem is the best girl';

describe('Spin.vue', () => {
  test('render test', () => {
    const wrapper = mount(Spin, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});
