const router = require("express").Router();

const authRoutes = require("./authRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const homeRoutes = require("./homeRoutes");
const postRoutes = require("./postRoutes");

router.use("/", homeRoutes);
router.use("/auth", authRoutes);
router.use("/posts", postRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
