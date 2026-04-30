
import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import pagination from '../index.vue'


// demo
it('should emit click event', () => {
  const wrapper = mount(pagination);
  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toHaveLength(1);
});
