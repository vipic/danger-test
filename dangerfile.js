const {message, dander} = require('danger')

const modifiedMD = danger.git.modified_files.join("- ")
message('Changed Files in this PR: \n - ' + modifiedMD)