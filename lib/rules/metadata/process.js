/**
 * Pseudo-rule for metadata extraction: process.
 */

exports.name = 'metadata.process';

exports.check = function(sr, done) {
    var $processDocument = sr.$('a#w3c_process_revision');
    return done({process: $processDocument.attr('href')});
};