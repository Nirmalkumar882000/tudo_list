const router = express.Router();
const{ insertData } = require("../controllers/sampleController")



router.route('/sample').post(insertData)




module.exports =router;