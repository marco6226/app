# Requisitos
## Instalaciones
- Java JDK 11
- Gradle 7.2 (crear carpeta sobre el disco C con el nombre 'Gradle' en ella descomprimir el zip con gradle)

Lo siguiente se instala desde Adroid Studio
- SDK 30
- Build Tools 30.0.3
- SDK Command-line tools (latest)
- Android Emulator
- Android SDK Platform-Tools
## Variables de entorno
Esta veriables indican donde se encuentra instalado el SDK y JDK de Java
- ANDROID_HOME - C:\Users\Nombre-Usuario\AppData\Local\Android\Sdk
- ANDROID_SDK_ROOT - C:\Users\Nombre-Usuario\AppData\Local\Android\Sdk
- JAVA_HOME - C:\Program Files\Java\jdk-11.0.16
#### Variable de entorno PATH 
Se agregan las siguientes direcciones.
- C:\Users\Nombre-Usuario\AppData\Local\Android\Sdk\platform-tools
- C:\Users\Nombre-Usuario\AppData\Local\Android\Sdk\platform-tools\latest\bin
- C:\Users\Nombre-Usuario\AppData\Local\Android\Sdk\emulator
- C:\Users\Nombre-Usuario\AppData\Local\Android\Sdk\build-tools
- C:\Users\Nombre-Usuario\AppData\Local\Android\Sdk\tools\bin
- C:\Gradle\gredle-7.2\bin
- C:\Program Fies\Java\jdk-11.0.16\bin
- C:\Users\Nombre-Usuario\AppData\Local\Android\Sdk\build-tools\30.0.3

## Instalar proyecto
Para instalar las dependencias, ejecutar:
```node
npm i --force
```

#### Principales comandos para compilar la apk.
- Crea la carpeta resources o la actualiza según lo que se tiene en la app.
```npm
ionic cordova resources
```
- Prepara los plugin y los archivos necesarios para compilar
```npm
ionic cordova prepare android
```
- Compila la aplicación generando el apk.
```npm
ionic cordova build --prod android
```
#### Si se desea generar los archivos necesarios para cordova (config.xml).
- Activa y crea los archivos necesarios para implementar cordova.

Este comando solo se debe ejecutar si se requiere iniciar la integración con cordova desde cero.
```npm
ionic integrations enable cordova --add
```
## Sobre resources
Se deben pegar el icon.png y splash.png de Sigess ya que ionic configura los suyos por defecto.
También cargar las carpetas correspondientes en resources/android/ para icon y splash


PROS Y CONTRAS DE MARCELA GERALD