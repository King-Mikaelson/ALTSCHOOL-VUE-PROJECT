import {ref} from "vue";
import {useStore} from "vuex";


export default function counterFunction() {
    const number= ref("")
    const store = useStore();

    const increase = (number) => {
    store.dispatch("increment")
    }


    const decrease = (number) => {
    store.dispatch("decrement")
    };

    const reset = () => {
    store.dispatch("reset")
    }

    const input = () => {
    store.dispatch("input", number.value)
    }


return {increase, decrease, reset, input, number}
}