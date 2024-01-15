export function useEventListener(dom: HTMLElement, eventType: string, callback: EventListenerOrEventListenerObject) {
    dom.addEventListener(eventType, callback)
    onUnmounted(() => {
        dom.removeEventListener(eventType, callback)
    })
}
