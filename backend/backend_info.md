/backend
│
├── /api/routes      # Rotas (endpoints da API)
│   ├── userRoutes.js
│   └── postRoutes.js
|
├── /config      # Arquivos de configuração
│   ├── db.js    # Configuração do banco de dados
│   └── server.js # Configuração do servidor
│
├── /controllers # Controladores (lógica de negócios)
│   ├── userController.js
│   └── postController.js
│
├── /models      # Modelos (representação de dados)
│   ├── userModel.js
│   └── postModel.js
│
├── ? /services    # Serviços (operações específicas)
│   ├── authService.js
│   └── emailService.js
│
├── ? /middlewares # Middlewares (processamento antes das rotas)
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── ? /utils       # Utilitários (funções auxiliares)
│   ├── logger.js
│   └── validator.js
│
├── /tests       # Testes (testes unitários e de integração)
│   ├── userTests.js
│   └── postTests.js
│
└── index.js     # Ponto de entrada da aplicação
  