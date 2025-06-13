// src/index.ts
import app from './app'
import dotenv from 'dotenv';
import cors from "cors"

dotenv.config();


const startServer = async () => {
  try {
    const PORT = process.env.PORT || 4000

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`)
    })
  } catch (error) {
    console.error('❌ Erro ao iniciar o servidor:', error)
    process.exit(1)
  }
}

startServer()
