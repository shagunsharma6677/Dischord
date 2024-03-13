import CardWrapper from "./card-wrapper";
import Header from "./header";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Dont have an account"
      backButtonHref="/auth/register"
      showSocial
    >
   Login Form !!!
    </CardWrapper>
  );
};
