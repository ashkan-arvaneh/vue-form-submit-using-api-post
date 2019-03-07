import { createLocalVue, mount } from "@vue/test-utils";
import VeeValidate from "vee-validate";
import ContactForm from "@/components/ContactForm";

const localVue = createLocalVue();
localVue.use(VeeValidate, {
  classes: true
});

describe("ContactForm", () => {
  const wrapper = mount(ContactForm, { localVue });
  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain(
      '<h3 class="text-center mb-4">Request a callback</h3>'
    );
  });
});
