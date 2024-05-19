import { UUID } from "crypto";
import { User } from "./user";

export interface Course {
    id: UUID;
    name: string;
    description: string;
    lessons: Lesson[];
    level: string;
    organizer: User;
    progress: number;
    poster: string;
    rating: number;
}

export interface Lesson {
    id: UUID;
    name: string;
    description: string;
}


