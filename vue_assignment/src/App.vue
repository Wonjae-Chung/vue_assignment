<template>
    <div id = "app">
        <router-view>
            <home></home>
        </router-view>
       
    </div>
</template>

<script>
import Home_under from '@/components/Home_under.vue'

export default {
    name : "App",
    components : {
        'home' : Home_under
    }
};
</script>


