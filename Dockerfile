# Usa una imagen base de Node.js
FROM node:17-slim

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y el package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todos los archivos del proyecto al contenedor
COPY . .

# Compila la aplicación Angular
RUN npm run build

# Exponer el puerto 80 (ajusta el puerto según tus necesidades)
EXPOSE 80

# Comando para ejecutar la aplicación Angular
CMD ["npm", "start"]
