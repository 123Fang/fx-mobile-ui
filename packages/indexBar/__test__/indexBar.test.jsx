
import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import indexBar from '../index.vue'


// demo
it('should emit click event', () => {
  const wrapper = mount(indexBar);
  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toHaveLength(1);
});
