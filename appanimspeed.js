console.log("EZ App Anim Speed | Loaded");

for (let name of ["slideUp", "slideDown", "fadeIn", "fadeOut"]) {
    $.prototype[name] = (function () {
        const cached = $.prototype[name];
        return function () {
            if (Number.isInteger(arguments[0])) {
                arguments[0] = Math.floor(arguments[0] / 5);
            }
            const p = cached.apply(this, arguments);
            return p;
        };
    })();
}