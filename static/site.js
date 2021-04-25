var first = question_tree.children[0].id;
function hashSelect(first) {
    console.log("Changing to new hash...");
    var found = false;
    all_ids.forEach(idx => {
        var curr = document.querySelector('#' + idx);
        if (location.href.endsWith(SEP + idx)) {
            curr.classList.remove('d-none');
            found = true;
        }
        else {
            var isHidden = curr.classList.contains('d-none');
            if (! isHidden) {
                curr.classList.add('d-none');
            }
        }
    });
    if (! found) {
        document.querySelector("#" + first).classList.remove('d-none');
        history.pushState({}, '', location.href + SEP + first);
    }
}

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
    all_ids.shift()
    hashSelect(first);

    // Wire up the "yes" links
    document.querySelectorAll("a.yes").forEach((yes) => {
        yes.addEventListener("click", (e) => {
            e.currentTarget.parentElement.parentElement.classList.add('d-none');
            var next = e.currentTarget.getAttribute('data-next');
            document.querySelector('#' + next).classList.remove('d-none');
            var original = location.href.replace(/\/$/, "");
            history.pushState({}, '', original + SEP + next);
        });
    });

    // Wire up the "nope" links
    document.querySelectorAll("a.nope").forEach((nope) => {
        nope.addEventListener("click", (e) => {
            e.currentTarget.parentElement.parentElement.classList.add('d-none');
            var next = e.currentTarget.getAttribute('data-next');
            document.querySelector('#' + next).classList.remove('d-none');
            var tokens = location.href.replace(/\/$/, "").split(SEP).slice(0, -1);
            tokens.push(next);
            history.replaceState({}, '', tokens.join(SEP));
        });
    });

    // Wire up the "back" links
    document.querySelectorAll("a.back").forEach((back) => {
        back.addEventListener("click", (e) => {
            e.currentTarget.parentElement.parentElement.classList.add('d-none');
            var tokens = location.href.replace(/\/$/, "").split(SEP).slice(0, -1);
            var next = tokens.slice(-1).pop();
            history.go(-1);
            document.querySelector('#' + next).classList.remove('d-none');
        });
    });
    window.addEventListener('hashchange', function() {
        // Detect hash changes for "back" functions
        hashSelect(first);
    });

});

function reloadHome() {
    window.location = "#" + first;
}
