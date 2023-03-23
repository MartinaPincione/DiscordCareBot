import { SlashCommandBuilder } from 'discord.js'
import { command } from '../../utils'

const meta = new SlashCommandBuilder()
  .setName('care')
  .setDescription('Need support?')

export default command(meta, ({ interaction }) => {

  return interaction.reply({
    ephemeral: true,
    content: "https://studenthealth.uconn.edu/emergency-contacts/"
  })
})
