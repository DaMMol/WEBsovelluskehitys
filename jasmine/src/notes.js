var notes = (function() {
    var list = [];

    return {
        add: function(note) {
            if (note) {
                if (/\S/.test(note)) {
                    var item = {timestamp: Date.now(), text: note};
                    list.push(item);
                    return true;
                }
            }
            return false;
        },
        remove: function(index) {
            if(index != null) {
                if (index > -1 && index < list.length) {
                    list.splice(index, 1);
                    return true;
                }
            }
            return false;
        },
        count: function() {
            return list.length;
        },
        list: function() {
            return list;
        },
        find: function(str) {
            let newlist = [];
            let stringlist = [];
            for(let i = 0; i<list.length;i++) {
                stringlist.push(list[i].text.toLowerCase());
                if(stringlist[i].includes(str.toLowerCase())) {
                    newlist.push(stringlist[i]);
                }
            }
            if(newlist.length > 0) {
                return newlist;
            }
            else {
                return false;
            }
        },
        clear: function() {
            list.splice(0, list.length);
        }
    }
}());
