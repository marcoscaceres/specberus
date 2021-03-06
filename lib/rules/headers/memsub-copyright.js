const self = {
    name: 'headers.memsub-copyright'
};

exports.name = self.name;

exports.check = function (sr, done) {
    var $c = sr.$("body div.head p.copyright")
    ;
    if ($c.length) {
        // ,   "http://www.w3.org/Consortium/Legal/copyright-documents":           "document use"
        var seen = false;
        $c.find("a[href]").each(function () {
            var $a = sr.$(this);
            if ($a.attr("href").indexOf("https://www.w3.org/Consortium/Legal/copyright-documents") === 0) {
                seen = true;
                return false;
            }
        });
        if (!seen) sr.error(self, "not-found");
    }
    else sr.error(self, "not-found");
    done();
};
