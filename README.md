# Control de Gastos

Aplicación de control de gastos personales, basada en la planificación del proyecto:
- Registro de transacciones (monto, categoría, fecha y hora)
- Historial visual con edición y eliminación
- Filtros por mes y categoría

## Estructura

```
control-gastos/
├── backend/                    # API en Node.js + Express + TypeScript + PostgreSQL
│   └── src/
│       ├── modules/
│       │   ├── database/
│       │   │   └── database.ts        # Conexión a PostgreSQL
│       │   └── expense/
│       │       ├── controllers/
│       │       ├── services/
│       │       ├── models/
│       │       └── routes/
│       ├── App.ts              # Configuración de Express
│       └── server.ts           # Punto de entrada
└── frontend/                   # Angular (standalone components)
    └── src/app/
        ├── expense/
        │   ├── components/
        │   │   ├── expense-form/       # Registro de transacciones
        │   │   ├── expense-history/    # Historial visual (editar/eliminar)
        │   │   └── expense-filters/    # Filtros por mes/categoría
        │   ├── services/expense.service.ts
        │   └── models/expense.model.ts
        ├── app.component.ts
        ├── app.routes.ts
        └── app.config.ts
```

## Backend

```bash
cd backend
npm install
cp .env.example .env   # ajusta tus credenciales de PostgreSQL
npm run dev             # http://localhost:3000
```

Endpoints disponibles (`/api/expenses`):
- `GET /api/expenses?month=&year=&category=` — listar (con filtros opcionales)
- `GET /api/expenses/:id` — obtener uno
- `POST /api/expenses` — crear `{ amount, category, transactionDate }`
- `PUT /api/expenses/:id` — actualizar
- `DELETE /api/expenses/:id` — eliminar

La tabla `expenses` se crea automáticamente en PostgreSQL al iniciar el servidor.

## Frontend

```bash
cd frontend
npm install
npm start   # http://localhost:4200
```

El frontend consume la API definida en `src/environments/environment.ts` (`http://localhost:3000/api` por defecto).

## Notas

- No incluido: aplicación móvil, múltiples monedas (solo quetzales), enlace bancario — según el alcance definido en la planificación.
- Este scaffold cubre la estructura y funcionalidad base; puedes ampliarlo con autenticación, paginación, gráficas, etc.
