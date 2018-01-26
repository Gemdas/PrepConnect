const router = require("express").Router();
const nodemailer = require("nodemailer");
const smtpTransport = nodemailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	auth: {
		user: "noreply.prepconnect@gmail.com",
		pass: "TurtleLover69"
	}
});
router.route("/").post((req, res) =>{
	const mailOptions={
		to :req.body.email,
		subject : "PrepConnect",
		text : "We at PrepConnect would like to thank you for you interest in " + req.body.jobTitle + ". Unfortunately the recruiter who posted this job has decided to go with a different candidate."
	}
	smtpTransport.sendMail(mailOptions, function(error, response){
		if(error){
			console.log("errored")
			res.json(error);
		}else{
			res.json(response);
		}
	});
})
module.exports=router;