# Instagram Clone - React Native
 
## Aviso de Segurança:

As credenciais do Firebase incluídas neste repositório não são válidas. O projeto original do Firebase foi excluído permanentemente, e, como resultado, essas credenciais não têm mais efeito e não permitem acesso a nenhum serviço ou dado.

Essas credenciais foram mantidas apenas para referência histórica e não representam nenhum risco de segurança, já que o projeto associado não existe mais.

Para futuras implementações, novas credenciais deverão ser geradas em um projeto Firebase ativo.

## 📱 Sobre o Projeto

Este é um clone do Instagram desenvolvido com React Native e Firebase. O projeto demonstra a implementação de funcionalidades principais do Instagram, utilizando Firebase como back-end para autenticação de usuários e armazenamento de dados em tempo real.

## 🚀 Tecnologias Utilizadas

- React Native
- Firebase Authentication
- Firebase Realtime Database
- Firebase Storage
- Expo
- JavaScript/TypeScript

## 📁 Estrutura do Projeto

```
├── Firebase_+Criando+Banco+Realtime.pdf     # Guia de configuração do Firebase
├── Firebase_+Registro+de+Usuário.pdf        # Guia de autenticação Firebase
├── insta/               # Projeto React Native
│   ├── src/
│   ├── package.json
│   └── README.md
└── README.md            # Este arquivo
```

## 📚 Documentação

### Guias do Firebase
Nos arquivos `Firebase_+Criando+Banco+Realtime.pdf` e `Firebase_+Registro+de+Usuário.pdf` você encontrará PDFs com instruções detalhadas sobre:

1. **Firebase_+Criando+Banco+Realtime.pdf**
   - Criação do projeto no Firebase Console
   - Configuração do Realtime Database
   - Regras de segurança
   - Estrutura do banco de dados

2. **Firebase_+Registro+de+Usuário.pdf**
   - Configuração da autenticação
   - Implementação de registro de usuários

## 💻 Funcionalidades Implementadas

- [x] Autenticação de usuários
- [x] Feed de posts
- [x] Upload de fotos
- [x] Likes e comentários
- [x] Perfil do usuário
- [x] Stories
- [x] Direct Messages

## ⚙️ Como Executar

1. **Configuração do Firebase**
   ```bash
   # Siga as instruções dos PDFs citados anteriormente para configurar seu projeto
   ```

2. **Instalação das Dependências**
   ```bash
   cd insta
   npm install
   # ou
   yarn install
   ```

3. **Configuração das Variáveis de Ambiente**
   ```bash
   # Crie um arquivo .env na raiz do projeto
   FIREBASE_API_KEY=sua_api_key
   FIREBASE_AUTH_DOMAIN=seu_auth_domain
   FIREBASE_DATABASE_URL=sua_database_url
   FIREBASE_PROJECT_ID=seu_project_id
   FIREBASE_STORAGE_BUCKET=seu_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
   FIREBASE_APP_ID=seu_app_id
   ```

4. **Executando o Projeto**
   ```bash
   npm start
   # ou
   yarn start
   ```

## 📱 Requisitos Mínimos

- Node.js 14+
- npm ou yarn
- React Native CLI
- Android Studio (para desenvolvimento Android)
- Xcode (para desenvolvimento iOS - apenas macOS)

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
