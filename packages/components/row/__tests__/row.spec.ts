import { mount } from '@vue/test-utils'
import Row from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Row.vue', () => {
  test('render test', () => {
    const wrapper = mount(Row, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
