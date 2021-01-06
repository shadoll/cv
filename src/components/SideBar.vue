<template>
    <v-navigation-drawer
        app
        :dark="$vuetify.theme.dark"
        clipped
        :mini-variant.sync="mini"
        permanent
        bottom
        class="d-print-none"
    >
        <v-list dense>
            <v-list-item
                link
                v-for="(item, name) in $t('cv')"
                :key="name"
                v-on:click="go('#' + name)"
            >
                <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{
                        item.title
                    }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: ["miniVariant"],
        data: () => ({
        }),
        methods: {
            go(label) {
                this.$vuetify.goTo(label, "easeInOutCubic");
                this.mini;
            },
        },
        computed: {
            mini() {
                window.ss = this.$vuetify
                switch (this.$vuetify.breakpoint.name) {
                    case "xs":
                        return true;
                    case "sm":
                        return true;
                    case "md":
                        return false;
                    case "lg":
                        return false;
                    case "xl":
                        return false;
                }
            },
        },
    };
</script>
