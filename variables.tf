variable "region" {
  type = string
}

variable "location" {
  type = string
}

variable "zone" {
  type = string
}

variable "project" {
  type        = string
  description = "Project name"
}

variable "image" {
  type        = string
  description = "Docker image tag"
}
