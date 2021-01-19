# Terraform 'Hello World'

An investigation into a simple App, setup using:
- [Next.js](https://nextjs.org/)
- [Docker](https://www.docker.com/)
- [Terraform](https://www.terraform.io/)
- [Google Cloud Platform (GCP)](https://cloud.google.com/)

## Table of Contents
- [Requirements](#requirements)
- [Setup](#setup)
- [Development](#development)
- [Docker use](#docker-use)
- [Terraform use](#terraform-use)
- [Kudos](#kudos)

### Requirements
Please install [Node.js](http://nodejs.org/) `>= v14.13.0` and [npm](https://nodejs.org/download/) `>= v6.14.11`.

You may find it easier to use the Node Version Manager [nvm](https://github.com/creationix/nvm)

### Setup
Install npm dependencies:
```
npm i
```

### Development
To develop and work on the site locally:
```
npm run dev
```

### Docker use
You need to provide the PORT for the Docker app, locally or in Cloud Run
```
export PORT=8080
```
> The default port in Cloud Run is 8080

Build the Docker app
```
docker build . -t [HOSTNAME]/[PROJECT-ID]/[IMAGE]
```

Running Docker
```
docker run -p 8080:8080 [HOSTNAME]/[PROJECT-ID]/[IMAGE]
```

Push the built Docker to GCP Container registry
```
docker push [HOSTNAME]/[PROJECT-ID]/[IMAGE]
```

### Terraform use
```
terraform init
```

```
terraform plan
```

```
terraform apply
```
> Your apps url will be shown in the cli after successful deployment

### Kudos
Thanks to the following blog posts/tutorials:
- https://medium.com/google-cloud/deploying-docker-images-to-cloud-run-using-terraform-ee8ae4ecb72e
- https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/
- https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code?in=terraform/gcp-get-started
