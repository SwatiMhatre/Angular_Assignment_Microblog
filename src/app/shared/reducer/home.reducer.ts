import{Action} from '@ngrx/store';
import{Blogs} from '../model/blogs.model';
import{Activity} from '../model/activity.model';
import * as HomeActions from '../action/home.actions'
import { Home } from '../model/home.model';

const initialState : Home = {
    blogs:[{
        id : "",
        title:"",
        article : "",
             imageURL : "",
             likes : 0,
             dislikes : 0,
             comments : []
        }],
        needsData:true,
}

export function homeReducer(state:Home= initialState, action:HomeActions.Action){
    switch (action.type){
        case HomeActions.LOAD_HOME:
            return Object.assign({}, state,  {blogs:action.payload,
                needsData:false,});
            case HomeActions.UPDATE_HOME:
                return  Object.assign({}, state,   {blogs:action.payload,
                    needsData:false,});
            default :
            return state
        
    }
}