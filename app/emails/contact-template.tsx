type EmailTemplateProps = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

export function EmailTemplate({
  name,
  email,
  message,
  subject,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>{subject}</h1>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Message:</strong>
      </p>

      <p style={{ whiteSpace: 'pre-wrap' }}>
        {message}
      </p>
    </div>
  );
}