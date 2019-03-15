setTimeout(function () {

    var nodes = document.body.childNodes;

    for(var i = 0; i < nodes.length; i++) {

        if (nodes[i].nodeName === "DIV") {

            nodes[i].parentElement.removeChild(nodes[i]);
        }
    }

    var container = document.createElement("div");
    container.id = "body";

    document.body.appendChild(container);

    const trigger = function() {
        if (typeof SeclusionManager === "undefined") {

            setTimeout(trigger, 200);
            return;
        }

        SeclusionManager.triggerBootstrap();
    };

    trigger();
}, 500);