
import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import tabbar from '../index.vue'


// demo
it('should emit click event', () => {
  const wrapper = mount(tabbar);
  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toHaveLength(1);
});
