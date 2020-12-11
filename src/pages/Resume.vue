<template>
    <Resume>
        <side-bar :mini-variant="miniVariant" />

        <v-app-bar
            app
            absolute
            clipped-left
            color="#6A76AB"
            dark
            shrink-on-scroll
            prominent0
            src="https://picsum.photos/id/180/1920/1080"
            fade-img-on-scroll0
            scroll-target="#scrolling-techniques-3"
        >
            <template v-slot:img="{ props }">
                <v-img
                    v-bind="props"
                    gradient="to top right, rgba(53,60,79,0.8), rgba(73,80,99,0.7)"
                ></v-img>
            </template>
            <v-app-bar-nav-icon
                @click.stop="miniVariant = !miniVariant"
            ></v-app-bar-nav-icon>
            <v-avatar size="90">
                <g-image src="~/assets/images/avatar.png"></g-image>
            </v-avatar>
            <v-toolbar-title
                style="
                    font-family: 'Poiret One', sans-serif;
                    font-size: 3rem;
                    text-shadow: #694800 1px 1px 6px;
                "
                class="amber--text text--darken-2"
                >{{ $t("about.name") }}</v-toolbar-title
            >
            <v-spacer></v-spacer>
            <LocaleSwitcher />
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <v-sheet id="scrolling-techniques-3" class="overflow-y-auto">
                <v-card width="100%" tile>
                    <v-card-title>{{ $t("cv.about") }}</v-card-title>
                    <v-row align="end" class="fill-height">
                        <v-col align-self="start" cols="3">
                            <v-avatar
                                class="profile"
                                color="grey"
                                size="164"
                                tile
                            >
                                <g-image
                                    src="~/assets/images/avatar.png"
                                ></g-image>
                            </v-avatar>
                        </v-col>
                        <v-col>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class="title">
                                        {{ $t("about.name") }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>{{
                                        $t("about.trade")
                                    }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title
                                        ><v-icon
                                            :color="textcolor"
                                            style="transform: rotate(90deg)"
                                            >mdi-altimeter</v-icon
                                        >
                                        {{
                                            new Date().getFullYear() -
                                            1981 +
                                            $t("about.age")
                                        }}</v-list-item-title
                                    >
                                </v-list-item-content>
                                <v-list-item-content>
                                    <v-list-item-title
                                        ><v-icon :color="textcolor"
                                            >mdi-map-marker</v-icon
                                        >{{
                                            $t("about.location")
                                        }}</v-list-item-title
                                    >
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title
                                        ><v-icon :color="textcolor"
                                            >mdi-phone</v-icon
                                        >{{
                                            $t("about.phone")
                                        }}</v-list-item-title
                                    >
                                </v-list-item-content>
                                <v-list-item-content>
                                    <v-list-item-title
                                        ><v-icon :color="textcolor"
                                            >mdi-email</v-icon
                                        >
                                        {{
                                            $t("about.email")
                                        }}</v-list-item-title
                                    >
                                </v-list-item-content>
                                <v-list-item-content>
                                    <v-list-item-title
                                        ><v-icon :color="textcolor">{{
                                            mdiSkype
                                        }}</v-icon>
                                        {{
                                            $t("about.skype")
                                        }}</v-list-item-title
                                    >
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card width="100%" tile>
                    <v-card-title>{{ $t("cv.technologies") }}</v-card-title>
                    <v-card-text v-for="(tech, k) in $t('tech')" :key="k">
                        <v-subheader>{{ tech.group }}</v-subheader>
                        <v-chip-group column multiple>
                            <v-chip
                                v-for="(tech, k) in tech.list"
                                :key="k"
                                class="ma-2"
                                :color="textcolor"
                                label
                                text-color="white"
                            >
                                <v-icon left v-text="tech.icon"></v-icon>
                                {{ tech.title }}
                            </v-chip>
                        </v-chip-group>
                    </v-card-text>
                </v-card>
                <v-card width="100%" tile>
                    <v-card-title>{{ $t("cv.experience") }}</v-card-title>
                    <v-card-text>
                        <v-timeline>
                            <v-timeline-item
                                :color="textcolor"
                                right
                                small
                                v-for="(item, k) in $t('exp')"
                                :key="k"
                            >
                                <template v-slot:opposite>
                                    <h3 class="headline">
                                        {{ item.place }}
                                    </h3>
                                    <span :class="`${textcolor}--text`">{{
                                        item.period
                                    }}</span>
                                </template>
                                <h2
                                    :class="`font-weight-light mb-4 ${textcolor}--text`"
                                >
                                    {{ item.title }}
                                </h2>
                                <div>
                                    {{ item.description }}
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
                <v-card width="100%" tile id="school">
                    <v-card-title>{{ $t("cv.education") }}</v-card-title>
                    <v-card-text>
                        <v-timeline>
                            <v-timeline-item
                                :color="textcolor"
                                right
                                small
                                v-for="(item, k) in $t('education')"
                                :key="k"
                            >
                                <template v-slot:opposite>
                                    <h3 class="headline">
                                        {{ item.place }}
                                    </h3>
                                    <span :class="`${textcolor}--text`">{{
                                        item.period
                                    }}</span>
                                </template>
                                <h2
                                    :class="`headline font-weight-light mb-4 ${textcolor}--text`"
                                >
                                    {{ item.title }}
                                </h2>
                                <div>
                                    {{ item.description }}
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-sheet>
        </v-main>
    </Resume>
</template>

<script>
    import LocaleSwitcher from "~/components/LocaleSwitcher";
    import SideBar from "~/components/SideBar";
    import Resume from "../layouts/Resume.vue";
    import { mdiSkype } from "@mdi/js";
    import { mdiVuejs } from "@mdi/js";

    export default {
        components: { LocaleSwitcher, SideBar, Resume },
        data: () => ({
            textcolor: "orange",
            drawer: null,
            miniVariant: false,
            mdiSkype: mdiSkype,
            mdiVuejs: mdiVuejs,
        }),
        metaInfo: {
            title: "About us",
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
    /* .v-timeline .v-timeline-item--after .v-timeline-item__body {
                          max-width: calc(70% - 48px) !important;
                        }
                        .v-timeline:before {
                        left: calc(30% - 1px) !important;
                        }
                        .v-timeline-item__opposite {
                          max-width: calc(30% - 48px);
                        } */
</style>
