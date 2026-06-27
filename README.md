# Frontend_Proyecto_JavaEE

Frontend Nginx para el chat empresarial JavaEE.

Sirve HTML, CSS y JavaScript, y se integra con el backend mediante `/api` a traves de la EC2 publica con EIP `44.210.180.79`.

## Estado AWS actual

- Se despliega en la EC2 `i-0105066ec62ac404a` (`nexolab-prod-app-ec2`).
- La entrada publica usa `SG_EC2` con 80/443 y SSH restringido por IP.
- El backend queda detras de Nginx y RDS usa `SG_RDS` en 5432.