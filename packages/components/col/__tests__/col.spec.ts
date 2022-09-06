import { mount } from '@vue/test-utils'
import Col from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Col.vue', () => {
  test('render test', () => {
    const wrapper = mount(Col, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
