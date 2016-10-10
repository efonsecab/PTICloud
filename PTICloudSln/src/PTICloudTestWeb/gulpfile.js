/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var webroot = "./wwwroot/";

var paths = {
    js: webroot + "js/**/*.js",
    minJs: webroot + "js/**/*.min.js",
    css: webroot + "css/**/*.css",
    minCss: webroot + "css/**/*.min.css",
    concatJsDest: webroot + "js/site.min.js",
    concatCssDest: webroot + "css/site.min.css"
};

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task("clean:AppFolder", function (cb) {
    rimraf(webroot + "app", cb);
});

gulp.task("clean:NodeModules", function (cb) {
    rimraf(webroot + "node_modules", cb);
});

gulp.copyFolderToWebRoot = function (folderName) {
    return gulp.src(folderName + "/**/*.js", { base: "." })
    .pipe(gulp.dest(webroot));
};

gulp.task("copy:AppFolderJs", function () {
    return gulp.src("app/**/*.js", { base: "." })
    .pipe(gulp.dest(webroot, { overwrite: true }));
});

gulp.task("copy:AppFolderTemplates", function () {
    return gulp.src("app/**/*.html", { base: "." })
    .pipe(gulp.dest(webroot, { overwrite: true }));
});

gulp.copyFolderToWebRoot("node_modules", { overwrite: true });

//gulp.copyFolderToWebRoot("node_modules/@angular");
//gulp.copyFolderToWebRoot("node_modules/rx");
//gulp.copyFolderToWebRoot("node_modules/rxjs");
//gulp.copyFolderToWebRoot("node_modules/core-js");
//gulp.copyFolderToWebRoot("node_modules/systemjs");
//gulp.copyFolderToWebRoot("node_modules/reflect-metadata");
//gulp.copyFolderToWebRoot("node_modules/rxjs");