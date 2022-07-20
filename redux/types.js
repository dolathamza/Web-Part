// action - customization reducer
export const SET_MENU = '@customization/SET_MENU';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';
// action - customization user reducer
export const LOGIN_USER = "LOGIN_USER";
export const Loading = "Loading"
export const logout = "logout"
export const register_User = "register_User";
export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const GET_FB_PAGES = "GET_FB_PAGES";
export const LOADING_FB_PAGES = "LOADING_FB_PAGES";
export const GET_IG_ACCOUNTS = "GET_IG_ACCOUNTS"
export const LOADING_IG_ACCOUNTS = "LOADING_IG_ACCOUNTS"
export const GET_CALENDAR = "GET_CALENDAR"
export const LOADING_CALENDAR = "LOADING_CALENDAR";
export const GET_REPORT = "GET_REPORT";
export const LOADING_REPORT = "LOADING_REPORT";
export const LOADING_DASHBOARD_IMAGES = "LOADING_DASHBOARD_IMAGES";
export const GET_DASHBOARD_IMAGES = "GET_DASHBOARD_IMAGES";
export const GET_POSTS = "GET_POSTS";
export const LOADING_POSTS = "LOADING_POSTS";
export const GET_MORE_POSTS = "GET_MORE_POSTS";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const LOADING_ACTIVITIES = "LOADING_ACTIVITIES";
export const GET_MORE_ACTIVITIES = "GET_MORE_ACTIVITIES";

export const GET_SEARCH_INFLUENCER = "GET_INFLUENCER"
export const LOADING_SEARCH_INFLUENCER = "LOADING_INFLUENCER";
export const NOT_FOUND_SEARCH_INFLUENCER = "NOT_FOUND_INFLUENCER"


export const GET_INFLUENCERS = "GET_INFLUENCERS"
export const LOADING_INFLUENCERS = "LOADING_INFLUENCERS";
export const INFLUENCERS_PAGE_NO = "INFLUENCERS_PAGE_NO";
export const INFLUENCERS_SEARCH = "INFLUENCERS_SEARCH";


export const GET_INFLUENCER_DESCOVERY = "GET_INFLUENCER_DESCOVERY";
export const LOADING_INFLUENCER_DESCOVERY = "LOADING_INFLUENCER_DESCOVERY";
export const UPDATE_PASS = "UPDATE_PASS";
export const UP_LOADING = "UP_LOADING"


export const GET_USER_PROFILE = "GET_USER_PROFILE";
export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
export const USER_PROFILE_LOADING = "USER_PROFILE_LOADING";
// labs
export const GET_ALL_LABS = "GET_ALL_LABS";
export const LABS_LOADING = "LABS_LOADING";
// diets
export const DIETS_LOADING = "DIETS_LOADING";
export const GET_ALL_DIETS = "GET_ALL_DIETS";
// diest
//remedies
export const REMEDIES_LOADING = "REMEDIES_LOADING";
export const GET_ALL_REMEDIES = "GET_ALL_REMEDIES";


export const get_all_diest = (payload) => {
    return {
        type: GET_ALL_DIETS,
        payload
    }
}
export const diets_loading = (payload) => {
    return {
        type: DIETS_LOADING,
        payload
    }
}

export const get_all_remedies = (payload) => {
    return {
        type: GET_ALL_REMEDIES,
        payload
    }
}
export const remedies_loading = (payload) => {
    return {
        type: REMEDIES_LOADING,
        payload
    }
}


// labs
export const get_all_labs = (payload) => {
    return {
        type: GET_ALL_LABS,
        payload
    }
}
export const labs_loading = (payload) => {
    return {
        type: LABS_LOADING,
        payload
    }
}
// user profile...
export const get_user_profile = (payload) => {
    return {
        type: GET_USER_PROFILE,
        payload
    }
}

export const update_user_profile = (payload) => {
    return {
        type: UPDATE_USER_PROFILE,
        payload
    }
}

export const loading_user_profile = (payload) => {
    return {
        type: USER_PROFILE_LOADING,
        payload
    }
}


export const up_loading = (payload) => {
    return {
        type: UP_LOADING,
        payload
    }
}


export const update_pass = (payload) => {
    return {
        type: UPDATE_PASS,
        payload
    }
}


export const influesnver_search = (payload) => {
    return {
        type: INFLUENCERS_SEARCH,
        payload
    }
}


export const get_dashboard_images = (payload) => {
    return {
        type: GET_DASHBOARD_IMAGES,
        payload
    }
}


export const influencers_page_no = (payload) => {
    return {
        type: INFLUENCERS_PAGE_NO,
        payload
    }
}


export const loading_dashboard_images = (payload) => {
    return {
        type: LOADING_DASHBOARD_IMAGES,
        payload
    }
}


export const loading_influencer_descovery = (payload) => {
    return {
        type: LOADING_INFLUENCER_DESCOVERY,
        payload
    }
}

export const get_influencer_descovery = (payload) => {
    return {
        type: GET_INFLUENCER_DESCOVERY,
        payload
    }

}


export const loading_influencers = (payload) => {
    return {
        type: LOADING_INFLUENCERS,
        payload
    }
}
export const get_influencers = (payload) => {
    return {
        type: GET_INFLUENCERS,
        payload
    }
}


export const loading_ig_accounts = (payload) => {
    return {
        type: LOADING_IG_ACCOUNTS,
        payload
    }
}

export const loading_fb_pages = (payload) => {
    return {
        type: LOADING_FB_PAGES,
        payload
    }
}

export const not_found_search_influencer = (payload) => {
    return {
        type: NOT_FOUND_SEARCH_INFLUENCER,
        payload
    }
}

export const loading_search_influencer = (payload) => {
    return {
        type: LOADING_SEARCH_INFLUENCER,
        payload
    }
}
export const get_search_influencer = (payload) => {
    return {
        type: GET_SEARCH_INFLUENCER,
        payload
    }
}


export const get_more_activities = (payload) => {
    return {
        type: GET_MORE_ACTIVITIES,
        payload
    }
}
export const get_activities = (payload) => {
    return {
        type: GET_ACTIVITIES,
        payload
    }
}
export const loading_activities = (payload) => {
    return {
        type: LOADING_ACTIVITIES,
        payload
    }
}


export const get_more_posts = (payload) => {
    return {
        type: GET_MORE_POSTS,
        payload
    }
}
export const get_posts = (payload) => {
    return {
        type: GET_POSTS,
        payload
    }
}
export const loading_posts = (payload) => {
    return {
        type: LOADING_POSTS,
        payload
    }
}

export const loading_report = (payload) => {
    return {
        type: LOADING_REPORT,
        payload
    }
}
export const get_report = (payload) => {
    return {
        type: GET_REPORT,
        payload
    }
}
export const loading_calendar = (payload) => {
    return {
        type: LOADING_CALENDAR,
        payload
    }
}
export const get_calendar = (payload) => {
    return {
        type: GET_CALENDAR,
        payload
    }
}

export const ig_accounts = (payload) => {
    return {
        type: GET_IG_ACCOUNTS,
        payload
    }
}
export const fb_pages = (payload) => {
    return {
        type: GET_FB_PAGES,
        payload
    }
}
export const update_user = (payload) => {
    return {
        type: UPDATE_USER,
        payload
    }
}

export const get_user = (payload) => {
    return {
        type: GET_USER,
        payload
    }
}

export const login_user = (payload) => {
    return {
        type: LOGIN_USER,
        payload
    }
}

export const loading_user = (payload) => {
    return {
        type: Loading,
        payload
    }
}

export const logout_user = () => {
    return {
        type: logout,
    }
}

export const register_user = (payload) => {
    return {
        type: register_User,
        payload
    }
}

