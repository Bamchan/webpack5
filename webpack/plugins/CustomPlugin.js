class CustomPlugin {
    apply(compiler) {
        //
        compiler.hooks.done.tapAsync('Plugin Done', (stats, cb) => {
            console.log('compilation done 1', stats.hash);
            cb();
        });
    }
}

module.exports = CustomPlugin;
