const express = requrie('express');

const router = express.Router();

router.get("/users",async(req,res)=>{
  const allDbUsers = await User.find({});
  const html = `
  <ul>
  ${allDbUsers
    .map((user)=>`<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

router.get("/api/users",async(req,res)=>{
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
})


router.route("/api/users/:id")
.get(async(req,res)=>{
  const user =await User.findById(req.params.id);
  if(!user)
    return res.status(404).json({error:"user not found"});
  return res.json({status:"Success"});
})
.patch(async(req,res)=>{
  await User.findByIdAndUpdate(req.params.id, {lastName:"Changed"});
  return res.json({status:"Success"});
})
.delete(async(req,res)=>{
  await User.findByIdAndDelete(req.params.id);
  return res.json({status:"Success"});
});

route.post("/api/users",async(req,res)=>{
  const body = req.body;
});