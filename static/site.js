function hashSelect(first) {
    console.log("Changing to new hash...");
    var found = false;
    all_ids.forEach(idx => {
        var curr = document.querySelector('#' + idx);
        if (location.href.endsWith(SEP + idx)) {
            curr.classList.remove('hidden');
            found = true;
        }
        else {
            var isHidden = curr.classList.contains('hidden');
            if (! isHidden) {
                curr.classList.add('hidden');
            }
        }
    });
    if (! found) {
        document.querySelector("#" + first).classList.remove('hidden');
        history.pushState({}, '', location.href + SEP + first);
    }
}

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
    // First thing.. hide the warning about javascript being required.
    document.querySelector("#js-warning").classList.add('hidden');

    all_ids.shift()
    var first = question_tree.children[0].id;
    hashSelect(first);

    // Wire up the "yes" links
    document.querySelectorAll("a.yes").forEach((yes) => {
        yes.addEventListener("click", (e) => {
            e.currentTarget.parentElement.parentElement.classList.add('hidden');
            var next = e.currentTarget.getAttribute('data-next');
            document.querySelector('#' + next).classList.remove('hidden');
            var original = location.href.replace(/\/$/, "");
            history.pushState({}, '', original + SEP + next);
        });
    });

    // Wire up the "nope" links
    document.querySelectorAll("a.nope").forEach((nope) => {
        nope.addEventListener("click", (e) => {
            e.currentTarget.parentElement.parentElement.classList.add('hidden');
            var next = e.currentTarget.getAttribute('data-next');
            document.querySelector('#' + next).classList.remove('hidden');
            var tokens = location.href.replace(/\/$/, "").split(SEP).slice(0, -1);
            tokens.push(next);
            history.replaceState({}, '', tokens.join(SEP));
        });
    });

    // Wire up the "back" links
    document.querySelectorAll("a.back").forEach((back) => {
        back.addEventListener("click", (e) => {
            e.currentTarget.parentElement.parentElement.classList.add('hidden');
            var tokens = location.href.replace(/\/$/, "").split(SEP).slice(0, -1);
            var next = tokens.slice(-1).pop();
            history.go(-1);
            document.querySelector('#' + next).classList.remove('hidden');
        });
    });
    window.addEventListener('hashchange', function() {
        // Detect hash changes for "back" functions
        hashSelect(first);
    });

});

function reloadHome() {
    window.location = "#" + question_tree.children[0].id;
}
