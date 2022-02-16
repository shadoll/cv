<template>
    <v-timeline
        :dark="$vuetify.theme.dark"
        :dense="$vuetify.breakpoint.smAndDown"
        :align-top="$vuetify.breakpoint.smAndDown"
    >
        <v-timeline-item
            :color="textcolor"
            right
            small
            v-for="(item, k) in $t(category)"
            :key="k"
            fill-dot
        >
            <template v-slot:opposite v-if="!$vuetify.breakpoint.smAndDown">
                <h3 class="headline">
                    {{ item.place }}
                    <v-icon
                        v-if="item.url"
                        link
                        size="20"
                        :color="`${textcolor}`"
                        :dark="$vuetify.theme.dark"
                        @click="newTab(item.url)"
                        >mdi-open-in-new</v-icon
                    >
                </h3>
                <span :class="`${textcolor}--text`">{{ item.period }}</span>
            </template>
            <v-card :color="textcolor" elevation="0" tile>
                <v-card-title v-if="$vuetify.breakpoint.smAndDown">
                    {{ item.place }}
                    <div>{{ item.period }}</div>
                </v-card-title>
                <v-card-text class="pa-0">
                    <v-list v-if="item.list">
                        <v-list-item v-for="(subitem, i) in item.list" :key="i">
                            <v-list-item-content>
                                <v-list-item-title
                                    :class="`text-h6 ${textcolor}--text`"
                                >
                                    {{ subitem.title }}
                                </v-list-item-title>
                                {{ subitem.description }}
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    <v-list v-else>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title
                                    :class="`text-h6 ${textcolor}--text`"
                                >
                                    {{ item.title }}
                                </v-list-item-title>
                                {{ item.description }}
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
    export default {
        props: {
            category: "",
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

<style scoped>
    .v-card__title {
        font-family: Roboto, sans-serif;
        font-size: 1.25rem;
        font-weight: 400;
    }
    .v-card__title > div {
        font-size: 0.8rem;
        margin-left: 1rem;
    }
    .v-timeline:before {
        background-color: #ff9800;
    }
</style>