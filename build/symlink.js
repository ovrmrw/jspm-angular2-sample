const fs = require('fs-extra');

fs.ensureSymlinkSync('./jspm_packages', './.dest/jspm_packages', 'junction');