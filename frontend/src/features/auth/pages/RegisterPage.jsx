import AuthLayout from "../components/AuthLayout";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join SkillNova and start building your career with AI-powered guidance."
    >
      <RegisterForm />
    </AuthLayout>
  );
}
