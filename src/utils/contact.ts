export function buildGmailComposeUrl(
  email: string,
  subject = '',
  body = '',
): string {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: email,
  });

  if (subject) params.set('su', subject);
  if (body) params.set('body', body);

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function buildMailtoUrl(
  email: string,
  subject = '',
  body = '',
): string {
  const params = new URLSearchParams();

  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);

  const query = params.toString();
  return `mailto:${email}${query ? `?${query}` : ''}`;
}
