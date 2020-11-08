const { Project } = require('../../models');

exports.list = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const projects = await Project.findAll({ where: { userId } });
    res.json({ ok: true, projects });
  } catch (err) {
    next(err);
  }
};
