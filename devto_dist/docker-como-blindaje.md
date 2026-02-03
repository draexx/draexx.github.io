---
canonical_url: 'https://pedrocarranza.com/blog/docker-como-blindaje/'
title: 'Docker como blindaje: estrategias para contener y desplegar sistemas legacy sin riesgos'
description: Cómo utilizar la contenerización para proteger y escalar sistemas antiguos sin comprometer la infraestructura moderna.
tags: 'docker, legacy, devops, cybersecurity'
cover_image: 'https://raw.githubusercontent.com/draexx/draexx.github.io/master/src/content/blog/docker-como-blindaje/docker-blindaje-banner.png'
published: false
id: 3223979
---
## El problema del "Monstruo en el Sótano"
Muchos desarrolladores cometen el error de pensar que **Docker** es una herramienta exclusiva para arquitecturas modernas de microservicios. La realidad es que Docker es, quizás, el mejor aliado para rescatar y estabilizar **sistemas «lo viejo» (Legacy)**. Sin embargo, meter código antiguo en un contenedor sin una estrategia clara es como meter un motor averiado en una caja nueva: tarde o temprano, la caja se romperá.

En esta entrega, exploramos cómo usar contenedores para aislar la deuda técnica y, lo más importante, cómo evitar los errores fatales que pueden costar la información de tu cliente.

## 1. El Mito de la Solución Mágica
Existe la falsa creencia de que Docker «arregla» el software. **Docker aísla el entorno, pero no repara el código ineficiente**. Si tu sistema legacy tiene fugas de memoria o consultas SQL pesadas, seguirá teniéndolas dentro del contenedor. El objetivo aquí no es la optimización mágica, sino la **predictibilidad**: lograr que el sistema funcione exactamente igual en tu laptop que en el servidor del cliente.

## 2. Control de Recursos: Domando a la Bestia
Un sistema legacy suele ser «egoísta» con los recursos. Si no pones límites, un proceso mal programado puede consumir toda la RAM del host y tumbar otros servicios. La eficiencia se configura, no es automática.

En tu archivo docker-compose.yml, es vital definir límites claros:
```
services:
  app-legacy:
    image: my-legacy-app:1.0
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
```
*Esto garantiza que tu sistema legacy tenga su «corral» y no afecte la estabilidad general del servidor.*

## 3. El Error Fatal: La Persistencia 🚨
Este es el punto donde muchos fallan. Los contenedores son **efímeros**; si el contenedor se reinicia o se actualiza, cualquier archivo guardado «adentro» desaparece. Para un sistema que maneja uploads de clientes o logs críticos, esto es un desastre.

**La solución:** El uso correcto de volumes:. Debes mapear las carpetas críticas del contenedor hacia el almacenamiento persistente del host:
```
volumes:
      - ./uploads:/var/www/html/uploads
      - ./logs:/var/www/html/logs
```
*Si no mapeas tus persistencias, no estás modernizando, estás jugando con fuego.*

## 4. Estrategia de Congelamiento y Multi-Stage
El Dockerfile es el manual de instrucciones definitivo. Al documentar cada dependencia necesaria para que el sistema legacy corra, evitas el clásico «en mi máquina funcionaba». Además, usar **Multi-Stage builds** te permite compilar lo necesario y mover solo lo esencial a la imagen final, evitando cargar «basura» de desarrollo que solo genera peso y vulnerabilidades.

## 5. Redes y Seguridad: El sistema «Escondido»
Una ventaja enorme de Docker es la capacidad de crear redes privadas. Puedes dejar tu sistema legacy en una red interna donde solo el **Microservicio Fachada** (el que construimos en el Post anterior) tenga acceso. De esta forma, el código antiguo, que quizás tiene vulnerabilidades de seguridad, queda totalmente inaccesible desde el internet público.

## Resumen de Riesgos
No todo es color de rosa. Si no tienes cuidado, puedes enfrentar:

* **Sobrecarga:** Por no limitar recursos.
* **Latencia:** Si las imágenes son demasiado pesadas y mal optimizadas.
* **Huecos de seguridad:** Si corres el contenedor como usuario root.

## Conclusión
Dockerizar no es solo «empaquetar», es **blindar**. Para un estratega de software, la prioridad siempre debe ser la continuidad del negocio y la integridad de los datos.

**Abramos el debate:** En un proceso de modernización, ¿qué consideras más grave: sacrificar un poco de rendimiento por límites de recursos, o arriesgarse a perder persistencia de datos por una mala configuración?
