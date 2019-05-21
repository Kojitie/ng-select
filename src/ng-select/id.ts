export function newId() {
    // First character is an 'a', it's good practice to tag id to begin with a letter
    return "a" + Math.random().toString(36).substring(2, 15);
}
