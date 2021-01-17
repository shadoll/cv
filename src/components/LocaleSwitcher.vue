<template>
    <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" class="d-print-none">
                <v-icon>mdi-translate</v-icon>
            </v-btn>
        </template>
        <v-list v-model="currentLocale">
            <v-list-item
                @click="localeChanged(locale)"
                v-for="locale in availableLocales"
                :key="locale"
                :value="locale"
            >
                <v-list-item-title>{{
                    $t("locales." + locale + ".title")
                }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        name: "LocaleSwitcher",
        data: function () {
            return {
                currentLocale: this.$i18n.locale.toString(),
                availableLocales: this.$i18n.availableLocales,
            };
        },
        methods: {
            localeChanged(lng) {
                // this.$router.push({
                //     path: this.$tp(this.$route.path, this.currentLocale, true),
                // });
                this.$router.push({
                    path: this.$tp(this.$route.path, lng, true),
                });
            },
        },
    };
</script>
