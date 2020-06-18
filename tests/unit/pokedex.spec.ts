import { createLocalVue, mount } from '@vue/test-utils';
import PokemonDetails from '@/components/PokemonDetails.vue';
import Vuetify from 'vuetify';
import { VueConstructor } from 'vue/types/vue';
import { POKEMON_TYPE_COLOR } from '@/enums';
import VueRouter from 'vue-router';

describe('PokemonDetails.vue', () => {
  let localVue: VueConstructor;
  let wrapper: any;
  const router = new VueRouter();

  beforeAll(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuetify, {});
    wrapper = mount(PokemonDetails, {
      localVue,
      router,
    });
  });

  it('checks functionality of getTypeColor', () => {
    expect(wrapper.vm.getTypeColor(POKEMON_TYPE_COLOR.FIRE)).toBe('#e6290c');
  });

  it('checks getTypeColor with unkown value', () => {
    expect(wrapper.vm.getTypeColor('dummy')).toBe('primary');
  });

  it('checks functionality of isHiddenAbility', () => {
    expect(wrapper.vm.isHiddenAbility(true, 'example')).toBe('example (hidden ability)');
    expect(wrapper.vm.isHiddenAbility(false, 'example')).toBe('example');
  });

  it('checks functionality of nameConvert', () => {
    expect(wrapper.vm.nameConvert('example')).toBe('EXAMPLE');
  });

});
