const { Telegraf } = require("telegraf");
const TOKEN = "5945553432:AAEYjjElRWYpGm8VXeya5eCtQQourvDL0BE";
const bot = new Telegraf(TOKEN);

//const web_link = "https://celebrated-torte-184681.netlify.app/";

bot.help((ctx) =>{
  ctx.reply('Ayuda');
  // opciones de ayuda
})
bot.settings((ctx) =>{
  //como si fuera mnú
  ctx.reply('opciones menu');
})
//comando propio
bot.command(['Hola', 'hola', 'Buenos días', 'HOLA', 'BUENOS DIAS'],(ctx) =>{
/*   let iduser= ctx.from.id
  bot.telegram.sendMessage('ISA MUÑOZ'+iduser) */
//ctx.reply('Soy Bambot, asistente virtual del restaurante Bambú')
});
//estar pendiente de un msj
/* bot.hears(['Hola', 'hola', 'Buenos días', 'HOLA', 'BUENOS DIAS'], ctx => {
  ctx.reply('Bienvenido '+ctx.from.first_name+' '+ctx.from.last_name +' 😊')
  ctx.reply('Hola! Soy Bambot, asistente virtual del restaurante Bambú')
  console.log('hujjjjj '+ctx.from.first_name)//mostrar nombre de usuario

  ctx.reply('Para registrarse escriba los siguientes datos: \nId: \nNombre: \n Edad: \nEstatura: \nPeso:'
  //Identificación, /Nombre, /Apellido, /sexo, /Edad, /peso en (kg), estatura'
  )
  //let iduser= ctx.from.id
  //ctx.reply('Isa_m '+iduser)//ide usuario
}) */
// preguntas
bot.hears(['Hola', 'hola', 'Buenos días', 'HOLA', 'BUENOS DIAS'], ctx => {
  ctx.reply('Hola! Soy Bambot, asistente virtual del restaurante Bambú')
  ctx.reply('necesito los siguientes datos')
  ctx.reply('nombre')
  console.log('hujjjjj '+ctx.from.first_name)//mostrar nombre de usuario

  ctx.reply('Para registrarse escriba los siguientes datos: \nId: \nNombre: \n Edad: \nEstatura: \nPeso:'
  //Identificación, /Nombre, /Apellido, /sexo, /Edad, /peso en (kg), estatura'
  )
  //let iduser= ctx.from.id
  //ctx.reply('Isa_m '+iduser)//ide usuario
})

bot.use((ctx, next) => {
  //ctx.state.guardar ='fay -_-';
  ctx.state.prueba =10;
  console.log(ctx);
  next(ctx);
  ctx.reply(next.ctx+'[o-o]');
  console.log('hola osot');
})
bot.start((ctx) =>{
 /*  console.log(ctx.updateSubTypes[0])
  bot.telegram.sendMessage(ctx.chat.id, 'hello world') */
  //console.log(ctx.from)
  //console.log(ctx.chat)
  //console.log(ctx.message)
  //ctx.reply('Bienvenido' +ctx.from.fi)
   /*  ctx.reply("Bienvenido Pola :)))))", {
      reply_markup: {
       // keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
      },
    }) */
  //ctx.reply(ctx.state.guardar);
  ctx.reply(ctx.state.prueba);
  console.log('*-* ++++--')
  }
  );

/* bot.on("foto", (ctx) => {
 
  ctx.reply("la foto") //context function reply the message
  console.log('cjb -_-'+ctx)
}) */
bot.launch();
