terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Remote backend is required for running Terraform in GitHub Actions
  # Replace 'YOUR_UNIQUE_S3_BUCKET_NAME' with a bucket you have created in AWS.
  backend "s3" {
    bucket         = "stickynoted-terraform-state-bucket"
    key            = "state/terraform.tfstate"
    region         = "us-east-1"
  }
}

provider "aws" {
  region = var.aws_region
}
