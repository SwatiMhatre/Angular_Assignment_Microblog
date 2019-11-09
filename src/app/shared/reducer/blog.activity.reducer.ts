import { Activity } from '../model/activity.model';
import * as ActivityActions from '../action/blogs.activity.actions'
import { ActivityType } from '../model/activity.type';

const initialState: Activity = {
    blogId: "",
    likes: false,
    dislikes: false,
    comments: "",
    activityType: ActivityType.UNDEFINED,
    timeStamp:null
};

export function activityReducer(state: Activity = initialState, action: ActivityActions.Action) {
    switch (action.type) {
        case ActivityActions.LOAD_ACTIVITY:
            return Object.assign([state], [...action.payload]);
        case ActivityActions.ADD_LIKE:
            return { ...state, activity: action.payload };
        case ActivityActions.ADD_COMMENT:
            return Object.assign({}, state, action.payload);
        case ActivityActions.ADD_DISLIKE:
            return Object.assign({}, state, action.payload);
        case ActivityActions.REMOVE_COMMENT:
            return Object.assign({}, state, action.payload);
        default:
            return state
    }
}