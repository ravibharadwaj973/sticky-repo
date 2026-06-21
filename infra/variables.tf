variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "AWS region for resources"
}

variable "project_name" {
  type        = string
  default     = "stickynoted"
  description = "Prefix for resources"
}

variable "instance_type" {
  type        = string
  default     = "t3.micro"
  description = "EC2 instance size"
}

variable "github_repo" {
  type        = string
  default     = "ravibharadwaj973/sticky-repo"
  description = "GitHub repository owner/name for OIDC trust relationship"
}
