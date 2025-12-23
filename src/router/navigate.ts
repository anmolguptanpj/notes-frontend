import { router } from "./router";

export function navigate(path:string) {
    history.pushState({},"",path);
    router();
}