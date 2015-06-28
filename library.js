(function(module) {
	"use strict";

	module.exports.register = function(data, callback) {
		data.codeTable["spoiler"] = {
			apply: function(value, argument) {
				return '\
				<div class="panel panel-default">\
					<div class="panel-heading">\
						<button type="button" onclick="$(this).parent().next().collapse(\'toggle\');" class="btn btn-default btn-xs btn-ajx-spoiler" data-toggle="collapse">' + (argument !== undefined ? argument : "Spoiler") + '</button>\
					</div>\
					<div class="panel-collapse collapse out">\
						<div class="panel-body">\
						' + value + '\
						</div>\
					</div>\
				</div>';
			}
		};
		callback(data);
	};
}(module));