<template>
    <simple>
        <s-side-bar :miniVariant="miniVariant" />
        <s-app-bar bgimage="https://picsum.photos/id/180/1920/1080">
        <!-- <s-app-bar :bgimage="require('@/assets/images/bg.jpg')"> -->
            <template v-slot:logo>
                <g-image src="~/assets/images/avatar.png"></g-image>
            </template>
            {{ $t("about.name") }}
        </s-app-bar>

        <v-main>
            <v-sheet id="scrolling-techniques" class="overflow-y-auto">
                <!-- <s-card
                    :name="name"
                    v-for="(category, name) in $t('cv')"
                    :key="name"
                >
                    content
                </s-card> -->
                <v-row dense>
                    <v-col class="md-12">
                        <s-card
                            :params="{
                                class: 'mt-0',
                            }"
                            name="about"
                        >
                            <div class="trade mt-5 mb-5">
                                {{ $t("about.trade") }}
                            </div>
                            <blockquote>
                                {{ $t("about.summary") }}
                            </blockquote>
                        </s-card>
                    </v-col>

                    <v-col class="md-12">
                        <s-card
                            :params="{
                                class: 'mt-0',
                            }"
                            name="information"
                        >
                            <v-list>
                                <v-list-item
                                    v-for="(info, name) in $t('information')"
                                    :key="name"
                                >
                                    <v-list-item-icon class="mt-3 mb-3">
                                        <v-icon :color="textcolor">{{
                                            info.icon
                                        }}</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content class="pt-1 pb-1">
                                        <v-list-item-title>
                                            {{
                                                $t(
                                                    "information." +
                                                        name +
                                                        ".msg",
                                                    information[name]
                                                )
                                            }}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </s-card>
                    </v-col>
                </v-row>

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

                <s-card
                    :params="{
                        class: 'mt-0',
                        width: '100%',
                    }"
                    name="technologies"
                >
                    <v-col v-for="(tech, k) in $t('tech')" :key="k">
                        <v-subheader>{{ tech.group }}</v-subheader>
                        <v-chip-group column>
                            <v-chip
                                v-for="(tech, k) in tech.list"
                                :key="k"
                                class="ma-1"
                                :color="textcolor"
                                outlined
                            >
                                <v-icon left>{{ tech.icon }}</v-icon>
                                {{ tech.title }}
                            </v-chip>
                        </v-chip-group>
                    </v-col>
                </s-card>

                <s-card
                    :params="{
                        class: 'mt-0',
                        width: '100%',
                    }"
                    :name="category"
                    v-for="(category, t) in timelines"
                    :key="t"
                >
                    <s-timeline :category="category" />
                </s-card>
            </v-sheet>
        </v-main>
    </simple>
</template>

<script>
    import sCard from "../components/sCard";
    import sSideBar from "~/components/sSideBar";
    import sAppBar from "~/components/sAppBar";
    import sTimeline from "../components/sTimeline";
    import {
        mdiJquery,
        mdiLanguageCss3,
        mdiLanguageHtml5,
        mdiLaravel,
        mdiNodejs,
        mdiSkype,
        mdiVuejs,
        mdiLanguagePhp,
        mdiApi,
        mdiSass,
        mdiGit,
        mdiGitlab,
        mdiDocker,
        mdiBash,
        mdiAccountGroup,
        mdiAccountSupervisorCircle,
        mdiHeadLightbulb,
        mdiHeadDotsHorizontal,
        mdiArrowDecision,
        mdiDatabase,
        mdiGraphql,
    } from "@mdi/js";

    export default {
        components: {
            sSideBar,
            sAppBar,
            sCard,
            sTimeline,
        },
        data: () => ({
            textcolor: "orange",
            miniVariant: false,

            timelines: ["experience", "education"],
        }),
        metaInfo() {
            return {
                title: this.$i18n.t("meta.title"),
            };
        },
        created() {},
        methods: {
            newTab: function (url) {
                window.open(url, "_blank");
            },
        },
        computed: {
            lifeyears() {
                // wrong counter, it start from year, not bithday
                return new Date().getFullYear() - 1981;
            },
            lifedays() {
                return Math.round(
                    (new Date().getTime() - new Date("1981/03/01").getTime()) /
                        (1000 * 3600 * 24)
                );
            },
            information() {
                return {
                    age: {
                        years: this.lifeyears,
                        days: this.lifedays,
                    },
                };
            },
        },
    };
</script>

<style>
    .v-chip-group {
        margin-top: -15px;
    }

    .v-card__text {
        padding-top: 0;
        padding-bottom: 0;
    }
    .v-subheader {
        padding: 0;
        text-transform: uppercase;
    }

    .trade {
        font-family: "Poiret One", Roboto, sans-serif !important;
        font-size: 1.6rem;
        line-height: 0.1rem;
    }
</style>
