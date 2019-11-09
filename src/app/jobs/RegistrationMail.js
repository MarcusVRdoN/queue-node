import Mail from '../lib/Mail'

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data

    await Mail.sendMail({
      from: 'Marcus V. R. do Nascimento <marcusvrdon@yopmail.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de Usuário',
      html: `
        <h1>Olá, ${user.name}</h1>
        <p>Bem-vindo ao sistema de filas da Rocketseat! :D</p>
      `
    })
  }
}