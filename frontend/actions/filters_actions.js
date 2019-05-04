
export const REMOVE_FILTERS = "REMOVE_FILTERS";
export const UPDATE_FILTERS = "UPDATE_FILTERS";
export const UPDATE_FILTERS_LIVE = "UPDATE_FILTERS_LIVE";

export const changeFilterLive = (filter, value) => ({
    type: UPDATE_FILTERS_LIVE,
    filter,
    value
});

export const changeFilter = filters => ({
    type: UPDATE_FILTERS,
    filters
});

