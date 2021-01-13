<template>
    <s-card
        :params="{
            class: 'mt-0',
        }"
        name="link"
    >
        <v-col>
            <v-btn
                plain
                v-for="(lnk, name) in $t('links')"
                :key="name"
                @click="newTab(lnk.url)"
            >
                <v-icon>{{ lnk.icon }}</v-icon>
                {{ lnk.title }}
            </v-btn>
        </v-col>
    </s-card>
</template>

<script>
    import sCard from "../components/sCard";

    export default {
        components: {
            sCard,
        },
        data: () => ({
            textcolor: "orange",
        }),
        methods: {
            newTab: function (url) {
                if (url !== undefined && url != "") {
                    window.open(encodeURI(url), "_blank");
                }
            },
        },
    };
</script>
