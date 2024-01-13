import { ref, onMounted, onUnmounted } from "vue";

export function useEventListener(dom: HTMLElement, eventType: string) {
    const callback = ref<Function>(() => { })
    if (dom && eventType) {
        const handler = () => callback.value()
        onMounted(() => {
            dom.addEventListener(eventType, handler)
        })
        onUnmounted(() => {
            dom.removeEventListener(eventType, handler)
        })
    }
    return {
        setEventCb: cb => callback.value = cb
    }
}
