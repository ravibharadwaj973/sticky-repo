output "ec2_public_ip" {
  value       = aws_instance.app_server.public_ip
  description = "Public IP of the EC2 Instance (for web browser access)"
}

output "ecr_backend_url" {
  value       = aws_ecr_repository.backend.repository_url
  description = "Registry URL of the Backend repository"
}

output "ecr_frontend_url" {
  value       = aws_ecr_repository.frontend.repository_url
  description = "Registry URL of the Frontend repository"
}

output "github_actions_role_arn" {
  value       = aws_iam_role.github_actions.arn
  description = "IAM Role ARN for GitHub Actions workflow role-to-assume"
}
