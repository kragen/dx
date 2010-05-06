// The Karnak Template Complex

//     Copyright ⓒ 2010 Ångströ, Inc.

//     This file is part of Disco Explorer.

//     Disco Explorer is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

//     Disco Explorer is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.

//     You should have received a copy of the GNU General Public License
//     along with Disco Explorer.  If not, see <http://www.gnu.org/licenses/>.

function htmlescape(html) {
    if (!html) return html;
    // This replacement stuff turns out not to be a bottleneck of
    // vcard2html.
    return ((''+html).
            replace(/&/g, "&amp;").
            replace(/</g, "&lt;").
            replace(/>/g, "&gt;").
            replace(/\"/g, "&quot;"));
}

var tmpl = {
  as_template: function(template) {
        if (typeof template === 'string') 
            return tmpl.lit(template);
        if (template.length !== undefined) 
            return tmpl.seq(template);
        return template;
    },
  ifdef: function(varname, template) {
        template = tmpl.as_template(template);
        return {render: function(vars) { 
                if (vars[varname] != undefined) return template.render(vars);
                return '';
            }};
    },
  seq: function(templates) {
        templates = $.map(templates, tmpl.as_template);
        return {render: function(vars) {
                var rv = [];
                for (var ii = 0; ii < templates.length; ii++) 
                    rv.push(templates[ii].render(vars));
                return rv.join('');
            }};
    },
  lit: function(string) {
        return {render: function(vars) { return string }};
    },
  v: function(varname) {
        return {render: function(vars) { return htmlescape(vars[varname]) }};
    },
  rawvar: function(varname) {
        return {render: function(vars) { return vars[varname] }};
    },
  div: function(varname) {
        return tmpl.ifdef(varname,
                          ['<div class="'+varname+'">', tmpl.v(varname), '</div>']);
    },
  img: function(varname) {
        return tmpl.ifdef(varname, ['  <img class="'+varname+'" src="', tmpl.v(varname), '">']);
    }
};
