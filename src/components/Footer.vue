<template>
    <v-footer dark v-bind="footerAttrs">
        <span>&copy; {{ new Date().getFullYear() }}, shadoll</span>
    </v-footer>
</template>

<script>
    export default {
        data: () => ({}),
        computed: {
            footerAttrs() {
                console.log("ya");
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
                        attrs.padless = false;
                        attrs.app = true;
                        break;
                }
                console.log(attrs);
                return attrs;
            },
        },
    };
</script>
