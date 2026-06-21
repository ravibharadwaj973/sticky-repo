
variable "aws_region" {
  type        = string
  default     = "ap-south-1"
  description = "AWS region for resources"
}

variable "project_name" {
  type        = string
  default     = "stickynoted"
  description = "Prefix for resources"
}
variable "key_name" {
  type        = string
  description = "AWS EC2 Key Pair Name"
}
variable "instance_type" {
  type        = string
  default     = "t3.micro"
  description = "EC2 instance size"
}

