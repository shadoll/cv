<template>
    <v-footer dark v-bind="footerAttrs">
        <v-col class="text-right" cols="12">
            &copy; {{ new Date().getFullYear() }}, shadoll
        </v-col>
    </v-footer>
</template>

<script>
    export default {
        data: () => ({}),
        computed: {
            footerAttrs() {
                const attrs = {};

                switch (this.$vuetify.breakpoint.name) {
                    case "xs":
                    case "sm":
                        attrs.absolute = true;
                        attrs.padless = true;
                        attrs.app = false;
                        break;
                    case "md":
                    case "lg":
                    case "xl":
                        attrs.absolute = false;
                        attrs.padless = true;
                        attrs.app = true;
                        break;
                }
                return attrs;
            },
        },
    };
</script>
