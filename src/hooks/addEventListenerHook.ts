import { ref, onMounted, onUnmounted } from "vue";

export function useEventListener(dom: HTMLElement, eventType: string) {
    const callback = ref<Function>(() => { })
    if (dom && eventType) {
        onMounted(() => {
            dom.addEventListener(eventType, () => callback.value())
        })

        onUnmounted(() => {
            dom.removeEventListener(eventType, () => callback.value())
        })
    }
    return {
        setEventCb: cb => callback.value = cb
    }
}
