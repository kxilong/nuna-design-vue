import { mount } from '@vue/test-utils'
import Avator from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Avator.vue', () => {
  test('render test', () => {
    const wrapper = mount(Avator, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
