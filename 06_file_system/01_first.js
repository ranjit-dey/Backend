/*== ================================= ==*/
/*== COMMON METHOD TO READ A FILE ==*/

/*
import fs from 'fs'

fs.readFile('file.txt', "utf8", (err, data) => {
    if (err) throw err
    console.log(data)
})
*/

/*== ================================= ==*/
/*== NEW METHOD TO READ FILE ==*/

/*
import fs from 'fs/promises'

try {
    const data = await fs.readFile('file.txt', 'utf-8')
    console.log(data)
} catch (error) {
    console.log(error.message)
}
*/

/*== ================================= ==*/
/*== MOVE DATA FROM SOURCE TO DESTINATION ==*/

/*
import fs from 'fs/promises'

const source_file_path = '../sheryians_backend/server.js'

// == IF NO FILE EXIST THEN FILE AUTOMATICALLY CREATE ==
const destination_file_path = 'newFile.txt'

try {
    const data = await fs.readFile(source_file_path, 'utf-8')
    await fs.writeFile(destination_file_path, data)
    console.log(`${source_file_path} -> ${destination_file_path}`)
} catch (error) {
    console.log(error.message)
}
*/

/*== ================================= ==*/
/*== APPEND FILE DATA ==*/

/*
import fs from 'fs/promises'

const source_file_path = 'file.txt'
const append_file_path = '../sheryians_backend/server.js'

try {
    const data = await fs.readFile(append_file_path, 'utf-8')
    await fs.appendFile(source_file_path, data)
} catch (error) {
    console.log(error.message)
}
*/

/*== ================================= ==*/
/*== DELETE FILE ==*/

/*
import fs from 'fs/promises'

try {
    await fs.unlink('newFile.txt')
} catch (error) {
    console.log(error.message)
}
 */

/*== ================================= ==*/
/*== RENAME FILE ==*/

/*
import fs from 'fs/promises'

try {
    await fs.rename('newFile.txt', 'renamedNewFile.txt')
} catch (error) {
    console.log(error.message)
}
*/



/*== ================================= ==*/
/*== MOVE FILE ==*/

import fs from 'fs/promises'



/*== ================================= ==*/
/*== METADATA EXTRACTOR ==*/

/*
import fs from 'fs/promises'

try {
    const stats = await fs.stat('renamedNewFile.txt')
    console.log(stats)
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.birthtimeMs.toString())
} catch (error) {
    console.log(stats)
}
 */
