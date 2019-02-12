module.exports = {
  createProject: (req,res)=>{
    req.body.users = req.body.payload.id;
    Project.create(req.body).then(createdProject=>{
      res.ok(createdProject);
    })
  },
  getProjects: (req,res) => {
    Project.find()
      .populateAll()
      .then(projects=>{
        res.ok(projects)
      })
  },
  addUser: async (req,res) => {
    await Project.addToCollection(req.body.projectId,'users')
      .members(req.body.payload.id);
    res.ok('added')
  }
};
