import { browser } from "$app/environment";
import type { FeedbackModel } from "$db/types.js";
import { writable } from "svelte/store";

export const FeedbackStore = writable<FeedbackModel[]>([]);
