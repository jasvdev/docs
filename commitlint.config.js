module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 100],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "type-enum": [2, "always", ["feat", "fix"]],
    "scope-empty": [2, "never"],
    "scope-enum": [
      2,
      "always",
      [
        ":sparkles:",
        ":art:",
        ":recycle:",
        ":tada:",
        ":fire:",
        ":bug:",
        ":memo:",
        ":file_folder:",
        ":test_tube:",
        ":wrench:",
      ],
    ],
  },
};
