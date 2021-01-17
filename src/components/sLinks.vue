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
                class="d-print-none"
            >
                <v-icon>{{ lnk.icon }}</v-icon>
                {{ lnk.title }}
            </v-btn>
            <v-row dense>
                <v-col v-for="(lnk, name) in $t('links')" :key="name">
                    <v-card max-width="230" flat class="d-none d-print-block">
                        <v-card-title class="qr-title">
                            {{ lnk.title }}
                        </v-card-title>
                        <v-card-text>
                            <qrcode
                                :value="lnk.url"
                                :options="{ width: 200 }"
                                tag="img"
                            ></qrcode>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
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
