module.exports = {
    roots: ["src"],
    moduleFileExtensions: ["ts", "tsx", "js"],
    testPathIgnorePatterns: ["node_modules/"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: ["**/*.spec.(ts|tsx)", "**/*/.test.(ts|tsx)"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
};