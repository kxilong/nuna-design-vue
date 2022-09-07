import { mount } from '@vue/test-utils'
import Collapse from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Collapse.vue', () => {
  test('render test', () => {
    const wrapper = mount(Collapse, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
