const staff ={
    index: (req, res)=>{
        return res.render("staff")
    },
    add: (req,res)=>{
        res.send("Agregar")
    }
}
module.exports=staff