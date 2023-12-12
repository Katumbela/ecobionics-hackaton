// const nodemailer = require('nodemailer');

// const enviarEmail = (destinatario, assunto, conteudo) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'seu-email@gmail.com',
//       pass: 'oidfuyfawbfkcvfy',
//     },
//   });

//   const mailOptions = {
//     from: 'info@arotec.ao',
//     to: destinatario,
//     subject: assunto,
//     text: conteudo,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Erro ao enviar o e-mail:', error);
//     } else {
//       console.log('E-mail enviado com sucesso:', info.response);
//     }
//   });
// };

// module.exports = enviarEmail;
