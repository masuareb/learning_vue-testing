import MessageDisplay from "@/components/MessageDisplay";
import { mount } from '@vue/test-utils'

describe('MessageDisplay', () => {
    test('Calls getMessage and display message', async() => {
        // mock the API call
        const wrapper = mount(MessageDisplay)
        // wait for promise to resolve
        // check that call happened once
        // check that component displays message
    })

    test('Displays an error when getMessage call fails', async() => {
        // mock the failed API call
        const wrapper = mount(MessageDisplay)
        // wait for promise to resolve
        // check that call happened once
        // check that component displays error
    })
})