const Timezone = ($Date = new Date()) => {
    return {
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        offset: -($Date.getTimezoneOffset() / 60)
    };
};

export default Timezone;
