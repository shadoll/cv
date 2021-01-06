<template>
    <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" @click="colorChanged()" >
                <v-icon v-if="$vuetify.theme.dark">mdi-brightness-7</v-icon>
                <v-icon v-if="!$vuetify.theme.dark">mdi-brightness-4</v-icon>
            </v-btn>
        </template>
    </v-menu>
</template>

<script>
    import { mdiConsole } from "@mdi/js";
    export default {
        name: "ColorSwitcher",
        methods: {
            colorChanged() {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            },
        },
    };
</script>
