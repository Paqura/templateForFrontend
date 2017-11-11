var paths = {
    base: {
        src: "./src/",
        dist: "./dist/"
    },
    html: {
        srcDir: function() {
            return paths.base.src + "njk/"
        },
        src: function() {
            return paths.base.src + "njk/*.njk"
        },
        srcWatch: function() {
            return paths.base.src + "njk/**/*.njk"
        },
        dist: function() {
            return paths.base.dist
        }
    },
    scss: {
        src: function() {
            return paths.base.src + "scss/**/*.scss"
        },
        csssrc: function() {
            return paths.base.src + "scss/**/*.css"
        },
        dist: function() {
            return paths.base.dist + "css/"
        },
    },
    js: {
        src: function() {
            return paths.base.src + "js/**/*.js"
        },
        dist: function() {
            return paths.base.dist + "js/"
        }
    },
    images: {
        src: function() {
            return paths.base.src + "images/**/*.*"
        },
        dist: function() {
            return paths.base.dist + "images/"
        },
    },
    svg: {
        src: function() {
            return paths.base.src + "images/svg/**/*.svg"
        }
    },
    vendors: {
        src: function() {
            return paths.base.src + 'vendors/**/*.*'
        },
        dist: function() {
            return paths.base.dist + 'vendors/'
        }
    },
    ajax: {
        src: function() {
            return paths.base.src + 'ajax/**/*.*'
        },
        dist: function() {
            return paths.base.dist + 'ajax/'
        }
    },
    fonts: {
        src: function() {
            return paths.base.src + "fonts/**/*.*"
        },
        dist: function() {
            return paths.base.dist + "fonts/"
        }
    },
    ui: {
        src: function() {
            return paths.base.src + "ui/**/*.scss"
        },
    },
    maps: function() {
        return paths.base.dist + "maps/"
    }
};

module.exports = paths;