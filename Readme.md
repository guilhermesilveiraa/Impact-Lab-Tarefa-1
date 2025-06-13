import { Alert } from '@mui/material'

# 🧩 Impact Lab - Tarefa 1

Aplicação full-stack com **upload de imagem**, composta por:

- 🖥️ **Backend:** Node.js + Express + TypeScript
- 🌐 **Frontend:** React + TypeScript + Material UI

---

## 🚀 Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone <repo-url>
cd Impact-Lab-Tarefa-1
```

### 2. Instalar dependências

```bash
cd backend
npm install
cd ../frontend
npm install
cd ..
npm install  # instala o concurrently na raiz
```

### 3. Criar arquivos `.env`

**No backend (`backend/.env`)**:

```env
PORT=4000
```

**No frontend (`frontend/.env`)**:

```env
REACT_APP_API_URL=http://localhost:4000
```

### 4. Rodar o projeto

```bash
npm run dev
```

> Isso executa simultaneamente o servidor backend e o React com Material UI

---

## 📁 Estrutura do Projeto

```txt
Impact-Lab-Tarefa-1/
├── backend/        # API Express com Upload
├── frontend/       # React + Material UI
├── package.json    # Script raiz para rodar ambos
```

---

## ✅ Funcionalidades Implementadas

### 📤 Upload de Imagem

- Interface amigável com Material UI
- Preview da imagem antes do envio
- Validação básica
- Envio via `POST /api/upload`
- Salvamento local no backend (pasta `uploads/`)
- Feedback visual com alertas de sucesso ou erro

<Alert severity="success">
  Upload funcional e com preview pronto!
</Alert>

---

## 🖼️ Exemplo de Uso

1. Acesse `http://localhost:3000`
2. Clique em **Escolher imagem**
3. Veja o **preview**
4. Clique em **Enviar**
5. A imagem será salva localmente

---

## 🧰 Tecnologias

| Camada    | Tecnologia                  |
| --------- | --------------------------- |
| Frontend  | React 19, TypeScript, MUI   |
| Backend   | Express, TypeScript, Multer |
| Dev Tools | ts-node-dev, concurrently   |
| Storage   | Local (pasta `uploads/`)    |

---

## 📦 Próximos passos

- [ ] Validação avançada no backend
- [ ] Histórico de imagens enviadas
- [ ] Armazenamento em nuvem (S3, Firebase)
- [ ] Deploy (Vercel + Render)

---

> Criado com 💡 por Matheus — Impact Lab
