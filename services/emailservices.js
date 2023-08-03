const nodemailer=require("nodemailer");
require("dotenv/config");

async function sendMail({from,to,subject,text,html}){
let transporter=nodemailer.createTransport({
    host:process.env.SMTP_HOST,
<<<<<<< HEAD
    port:process.env.SMTP_PORT ,
=======
    port:process.env.SMTP_PORT ||587,
>>>>>>> 2e87bbc0cb78c0cb6117b89805fc31b17312763d
    secure:false,
    auth:{
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS
    }
})

let info=await transporter.sendMail({
    from:`inshare <${from}>`,
    to,
    subject,
    text,
    html
})
}
module.exports=sendMail;
