'use strict'
 
var gulp = require("gulp"),
  concat = require("gulp-concat"),
minifier = require("minifier"),
     del = require("del");

gulp.task("concatScripts", function() {
  return gulp.src(["js/jquery.js",
            "js/fastclick.js", 
            "js/foundation.js", 
            "js/foundation.equalizer.js", 
            "js/foundation.reveal.js"])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("js"));
});

gulp.task("concatCSS", function() {  
  return gulp.src(["css/normalize.css", 
            "css/foundation.css", 
            "css/basics.css",
            "css/menu.css",
            "css/hero.css",
            "css/photo-grid.css",
            "css/modals.css",
            "css/footer.css"])
    .pipe(concat("app.css"))
    .pipe(gulp.dest("css"));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
  return minifier.minify("js/app.js");
});

gulp.task("minifyCSS", ["concatCSS"], function() {
  return minifier.minify("css/app.css");
});

gulp.task('watchFiles', function(){
	gulp.watch(['css/*.css','!css/app.css', '!css/app.min.css'], ['minifyCSS']);
	gulp.watch(['js/*.js','!js/app.js', '!js/app.min.js'], ['minifyScripts']);
});

gulp.task("clean", function() {
  del(["dist", "css/app*.css*", "js/app*.js*"]);
});

gulp.task("build", ["minifyScripts", "minifyCSS"], function() {
  return gulp.src(["css/app.min.css", "js/app.min.js", "index.html", "img/**"], {base: "./"})
                  .pipe(gulp.dest("dist"));
});

gulp.task("default", ["clean"], function() {
  gulp.start("build");
});