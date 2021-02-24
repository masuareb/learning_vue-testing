import MessageDisplay from "@/components/MessageDisplay";
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios';
import flushPromises from "flush-promises";

jest.mock('@/services/axios')
beforeEach(() => {
    jest.clearAllMocks()
})
describe('MessageDisplay', () => {

    test('Calls getMessage and display message', async() => {
        const mockMessage = 'Hello from the db'
        getMessage.mockResolvedValueOnce({ text: mockMessage })
        // mock the API call
        const wrapper = mount(MessageDisplay)
        // wait for promise to resolve
        await flushPromises()
        // check that call happened once
        expect(getMessage).toHaveBeenCalledTimes(1)
        // check that component displays message
        const message = wrapper.find('[data-testid="message"]').element.textContent
        expect(message).toEqual(mockMessage)
    })

    test('Displays an error when getMessage call fails', async() => {
        const mockError = 'Oops! Something went wrong.'
        getMessage.mockRejectedValueOnce({ text: mockError })
        // mock the API call
        const wrapper = mount(MessageDisplay)
        // wait for promise to resolve
        await flushPromises()
        // check that call happened once
        expect(getMessage).toHaveBeenCalledTimes(1)
        // check that component displays message
        const error = wrapper.find('[data-testid="message-error"]').element.textContent
        expect(error).toEqual(mockError)
    })
})