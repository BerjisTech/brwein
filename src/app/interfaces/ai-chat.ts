import { UUID } from "crypto";
import { User } from "./user";
export interface AiChat {
    id: UUID;
    ai_id: UUID;
    user_id: UUID;
    prompt: string;
    response: string;
    created_at: string;
    updated_at: string;
    user: User;
}
export interface AIChats{
    id: UUID;
    title: string;
    created_at: string;
    updated_at: string;
    user_id: UUID;
    ai_id: UUID;
    aiChat: AiChat[];
    user: User;
}
