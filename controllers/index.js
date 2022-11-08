const router = require("express").Router();

const authRoutes = require("./authRoutes");
const dashbordRoutes = require("./dashbordRoutes");
const homeRoutes = require("./homeRoutes");
const postRoutes = require("./postRoutes");

router.use("/", homeRoutes);
router.use("/auth", authRoutes);
router.use("/posts", postRoutes);
router.use("/dashboard", dashbordRoutes);

module.exports = router;
