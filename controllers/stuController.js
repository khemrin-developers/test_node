export const about = (req, res) =>{
  res.render("about");
}

export const home = (req, res)=>{
    res.render("home")
}
export default {about, home}