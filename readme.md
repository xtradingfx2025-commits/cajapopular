# Instrucciones para Instalar CRC (CodeReady Containers)

## Requisitos Previos

### Habilitar Virtualización
**IMPORTANTE**: Antes de instalar CRC, debes asegurarte de que la virtualización esté habilitada en tu máquina.
 
#### Para Windows:
1. Reinicia tu computadora y entra al BIOS/UEFI (generalmente presionando F2, F12, Delete o Esc durante el arranque)
2. Busca la opción "Virtualization Technology" o "Intel VT-x" / "AMD-V"
3. Habilítala y guarda los cambios

#### Para Linux:
Verifica si la virtualización está habilitada ejecutando:
```bash
egrep -c '(vmx|svm)' /proc/cpuinfo
```
Si el resultado es mayor a 0, la virtualización está habilitada.

## Descargar e Instalar CRC

### 1. Descargar CRC

#### Opción A: Desde el sitio web oficial
1. Ve a [https://developers.redhat.com/products/codeready-containers/overview](https://developers.redhat.com/products/codeready-containers/overview)
2. Crea una cuenta gratuita de Red Hat Developer (si no tienes una)
3. Descarga la versión correspondiente a tu sistema operativo:
   - **Windows**: `crc-windows-amd64.zip`
   - **macOS**: `crc-macos-amd64.tar.xz`
   - **Linux**: `crc-linux-amd64.tar.xz`

#### Opción B: Usando línea de comandos (Linux/macOS)
```bash
# Para Linux
wget https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/crc/latest/crc-linux-amd64.tar.xz

# Para macOS
wget https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/crc/latest/crc-macos-amd64.tar.xz
```

### 2. Instalar CRC

#### En Windows:
1. Extrae el archivo ZIP descargado
2. Copia el ejecutable `crc.exe` a una carpeta en tu PATH (por ejemplo, `C:\Windows\System32`)
3. Abre PowerShell como administrador y verifica la instalación:
```powershell
crc version
```

#### En Linux:
```bash
# Extrae el archivo
tar -xf crc-linux-amd64.tar.xz

# Mueve el binario a /usr/local/bin
sudo mv crc-linux-*-amd64/crc /usr/local/bin/

# Verifica la instalación
crc version
```

#### En macOS:
```bash
# Extrae el archivo
tar -xf crc-macos-amd64.tar.xz

# Mueve el binario a /usr/local/bin
sudo mv crc-macos-*-amd64/crc /usr/local/bin/

# Verifica la instalación
crc version
```

### 3. Configurar CRC

#### Configuración inicial:
```bash
# Configura CRC (esto descargará la imagen de OpenShift)
crc setup

# Inicia CRC por primera vez
crc start
```

**Nota**: Durante el primer inicio, se te pedirá el "pull secret" que puedes obtener desde tu cuenta de Red Hat Developer.

#### Configuraciones adicionales recomendadas:
```bash
# Asignar más memoria (recomendado: 16GB)
crc config set memory 16384

# Asignar más CPUs (recomendado: 4 CPUs)
crc config set cpus 4

# Habilitar monitoreo
crc config set enable-cluster-monitoring true
```

### 4. Verificar la Instalación

```bash
# Verificar el estado del cluster
crc status

# Obtener información de acceso
crc console --credentials

# Acceder a la consola web
crc console
```

### 5. Comandos Útiles

```bash
# Detener CRC
crc stop

# Reiniciar CRC
crc start

# Eliminar el cluster
crc delete

# Ver logs
crc logs

# Configurar oc CLI
eval $(crc oc-env)
```

## Solución de Problemas Comunes

### Error de Virtualización
Si recibes errores relacionados con virtualización:
- Asegúrate de que la virtualización esté habilitada en el BIOS
- En Windows, verifica que Hyper-V esté habilitado
- En Linux, verifica que tu usuario esté en el grupo `libvirt`

### Problemas de Memoria
Si CRC no inicia por falta de memoria:
```bash
crc config set memory 12288  # Reduce a 12GB si tienes limitaciones
```

### Problemas de Red
Si tienes problemas de conectividad:
```bash
crc config set nameserver 8.8.8.8
```

## Recursos Adicionales

- [Documentación oficial de CRC](https://crc.dev/crc/)
- [Guía de inicio rápido de OpenShift](https://docs.openshift.com/container-platform/latest/getting_started/index.html)
- [Red Hat Developer Portal](https://developers.redhat.com/)

---

Put the contents of the started code here.
