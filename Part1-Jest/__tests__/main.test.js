const formatVolumeIconPath = require("../assets/scripts/main");

describe("testing the formatVolumeIconPath() function and how the icons change with volume", () => {
    test("vol level >= 67 --> vol icon 3 expected", () => {
        expect(formatVolumeIconPath(67)).toContain("volume-level-3");
    });

    test("vol level == 66 --> vol icon 2 expected", () => {
        expect(formatVolumeIconPath(66)).toContain("volume-level-2");
    });

    test("vol level >= 34 --> vol icon 2 expected", () => {
        expect(formatVolumeIconPath(34)).toContain("volume-level-2");
    });

    test("vol level == 33 --> vol icon 1 expected", () => {
        expect(formatVolumeIconPath(33)).toContain("volume-level-1");
    });

    test("vol level >= 1 --> vol icon 1 expected", () => {
        expect(formatVolumeIconPath(1)).toContain("volume-level-1");
    });

    test("vol level == 0 --> vol icon 0 expected", () => {
        expect(formatVolumeIconPath(0)).toContain("volume-level-0");
    });
});