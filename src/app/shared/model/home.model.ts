import { Blogs } from './blogs.model';

export interface Home {
    blogs : Blogs[];
    needsData : boolean;
}