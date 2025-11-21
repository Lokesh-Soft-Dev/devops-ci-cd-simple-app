# DevOps CI/CD Pipeline – Simple Node.js Application
---
- This repository contains a complete CI/CD automation setup for a simple Node.js application using **GitHub Actions and Docker**.  
- The goal of the project is to demonstrate how to automatically test the application, build a Docker image, push it to Docker Hub, and run it locally as a fully containerized service.

- The Node.js app includes three endpoints: `/` (welcome message), `/health` (service check), and `/metrics` (Prometheus-style output).  
- A Dockerfile is used to containerize the application, and GitHub Actions handles the automation pipeline.
---
## The CI/CD workflow performs the following steps:
- Checks out the repository  
- Installs Node dependencies  
- Runs application tests  
- Logs into Docker Hub using repository secrets (`REGISTRY_USER`, `REGISTRY_TOKEN`)  
- Builds the Docker image using Buildx  
- Tags the image with both `latest` and the commit SHA  
- Pushes the image to Docker Hub: **https://hub.docker.com/repository/docker/lokesh111996/simple-app/**
---
## You can run the app locally using Docker:
- docker pull lokesh111996/simple-app:latest
- docker run -d --name simple_app -p 5000:3000 lokesh111996/simple-app:latest
- curl http://localhost:5000/

---

## The GitHub Actions workflow file is located in:  
```text

`.github/workflows/ci-cd.yml`

```

- This file defines the build-and-test job and the Docker build-and-push job.  
- The pipeline has been successfully executed, and the logs show the Docker layers being built, pushed, and tagged correctly.
---
## The project includes:
- Node.js application (`simple-app/`)
- Dockerfile for building the container
- GitHub Actions CI/CD pipeline
- Deployment verification using Docker on a local machine
---

**IMPORTANT NOTE (HIGHLIGHTED):**  

➡️ A complete `submission_project1` folder has already been uploaded to this repository.  
➡️ This folder contains ALL required `screenshots`: `GitHub Actions workflow success, Docker build logs, Docker Hub tags page, app running in browser, and all evidence needed for final project submission`.  
➡️ No external files are needed — everything is attached in the submission folder.

---
## This project demonstrates:  

- CI/CD best practices  
- Automated Docker image creation  
- Docker Hub integration  
- Local deployment validation  
- Complete DevOps workflow implementation

---

## 👤 Author

### KANNAIAH LOKESH
### GitHub: https://github.com/Lokesh-Soft-Dev
### Docker Hub Repository: https://hub.docker.com/repository/docker/lokesh111996/simple-app/

---

