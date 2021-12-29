export const subtitles = [
    { _id: "5b21ca3eeb7c6fbccd474518", name: "Russian" },
    { _id: "5b75ca3eeb7d6fbccd479814", name: "English" },
    { _id: "5b54ca3eeb7h6fbccd472320", name: "France" },
    { _id: "5b34ca3deb7h6fbccd4723770", name: "German" }
];

export function getSubtitles() {
    return subtitles.filter(s => s);
}
