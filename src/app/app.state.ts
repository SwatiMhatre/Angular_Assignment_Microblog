import { Blogs } from './shared/model/blogs.model';
export interface AppState {
    readonly blogs : Blogs[];
}