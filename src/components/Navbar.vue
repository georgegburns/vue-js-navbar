<script>
import { RouterLink, RouterView } from 'vue-router'
import {reactive, VueElement} from 'vue'

export default {
    data() {
        return {
            open: false,
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        }
    },
    methods: {
        handleClick() {
        this.open = !this.open;
        console.log(this.open);
        console.log(this.windowHeight, this.windowWidth)
        },
    },
};

</script>

<template>
    <header>
        <nav class="flex items-center justify-between flex-wrap bg-gray-800">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">Nug Run Club</span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 rounded text-teal-200 hover:text-white" @click="handleClick()">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div v-if="open || windowWidth >= 768" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/">Dashboard</RouterLink>
                    <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/Reports">Reports</RouterLink>
                    <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/HallOfFame">Hall of Fame</RouterLink>
                    <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/Settings">Settings</RouterLink>
                    <button class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Login</button>
                </div>
            </div>
        </nav>
    </header>
    <RouterView />
</template>
